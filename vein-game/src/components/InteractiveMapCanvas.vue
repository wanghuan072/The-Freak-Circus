<template>
  <div class="map-canvas-wrapper" ref="wrapperRef">
    <canvas ref="canvasRef" class="map-canvas"></canvas>

    <div
      v-if="hoveredMarker"
      class="marker-tooltip"
      :style="tooltipStyle(hoveredMarker)"
    >
      <strong>{{ hoveredMarker.title }}</strong>
    </div>

    <div
      v-if="activeMarker"
      class="marker-card"
      :style="tooltipStyle(activeMarker, true)"
    >
      <h4>{{ activeMarker.title }}</h4>
      <p>{{ activeMarker.description }}</p>
    </div>

    <div class="map-hints">
      <span>滚轮缩放</span>
      <span>拖拽平移</span>
      <span>悬停查看点位</span>
      <span>点击查看详情</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    default: '/images/map/map.webp'
  },
  markers: {
    type: Array,
    default: () => []
  },
  initialCenter: {
    // 0-1 normalized coords
    type: Object,
    default: () => ({ x: 0.62, y: 0.52 })
  },
  initialScale: {
    type: Number,
    default: 1.6
  }
})

const wrapperRef = ref(null)
const canvasRef = ref(null)

const image = new Image()
const state = ref({
  imgWidth: 0,
  imgHeight: 0,
  scale: 1,
  baseScale: 1,
  offsetX: 0,
  offsetY: 0,
  dragging: false,
  dragStartX: 0,
  dragStartY: 0,
  dragStartOffsetX: 0,
  dragStartOffsetY: 0,
  hoveredId: null,
  activeId: null,
  imageReady: false
})

const hoveredMarker = computed(() =>
  props.markers.find(m => m.id === state.value.hoveredId)
)
const activeMarker = computed(() =>
  props.markers.find(m => m.id === state.value.activeId)
)

const MIN_SCALE = 0.5
const MAX_SCALE = 3
const MARKER_RADIUS = 8
const HIT_RADIUS = 14

const tooltipStyle = (marker, offset = false) => {
  const { x, y } = markerScreenPosition(marker)
  const translate = offset ? 'translate(-50%, -110%)' : 'translate(-50%, -140%)'
  return {
    left: `${x}px`,
    top: `${y}px`,
    transform: translate
  }
}

const clampOffsets = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const s = state.value
  const mapW = s.imgWidth * s.scale
  const mapH = s.imgHeight * s.scale
  const minX = Math.min(0, rect.width - mapW)
  const minY = Math.min(0, rect.height - mapH)
  s.offsetX = Math.min(0, Math.max(minX, s.offsetX))
  s.offsetY = Math.min(0, Math.max(minY, s.offsetY))
}

const centerImage = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const s = state.value
  const mapW = s.imgWidth * s.scale
  const mapH = s.imgHeight * s.scale
  s.offsetX = (rect.width - mapW) / 2
  s.offsetY = (rect.height - mapH) / 2
}

const markerScreenPosition = (marker) => {
  const s = state.value
  return {
    x: marker.x * s.imgWidth * s.scale + s.offsetX,
    y: marker.y * s.imgHeight * s.scale + s.offsetY
  }
}

const draw = () => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return
  if (!state.value.imageReady) return
  const s = state.value

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.save()
  ctx.translate(s.offsetX, s.offsetY)
  ctx.scale(s.scale, s.scale)
  ctx.drawImage(image, 0, 0, s.imgWidth, s.imgHeight)
  ctx.restore()

  props.markers.forEach(marker => {
    const { x, y } = markerScreenPosition(marker)
    const isActive = s.activeId === marker.id
    const isHover = s.hoveredId === marker.id
    ctx.beginPath()
    ctx.arc(x, y, MARKER_RADIUS, 0, Math.PI * 2)
    ctx.fillStyle = isActive
      ? 'rgba(255, 87, 87, 0.95)'
      : isHover
        ? 'rgba(255, 87, 87, 0.7)'
        : 'rgba(255, 255, 255, 0.75)'
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)'
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()
  })
}

const resizeCanvas = () => {
  const wrapper = wrapperRef.value
  const canvas = canvasRef.value
  if (!wrapper || !canvas) return
  const rect = wrapper.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  canvas.style.width = `${rect.width}px`
  canvas.style.height = `${rect.height}px`
  const s = state.value
  const fitScale = Math.min(rect.width / s.imgWidth, rect.height / s.imgHeight)
  s.baseScale = fitScale
  if (s.scale < s.baseScale) s.scale = s.baseScale
  clampOffsets()
  draw()
}

const handleWheel = (e) => {
  e.preventDefault()
  const s = state.value
  const rect = canvasRef.value.getBoundingClientRect()
  const cursorX = e.clientX - rect.left
  const cursorY = e.clientY - rect.top

  const prevScale = s.scale
  const delta = e.deltaY > 0 ? 0.9 : 1.1
  s.scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, s.scale * delta))

  const scaleRatio = s.scale / prevScale
  s.offsetX = cursorX - (cursorX - s.offsetX) * scaleRatio
  s.offsetY = cursorY - (cursorY - s.offsetY) * scaleRatio

  clampOffsets()
  draw()
}

const handlePointerDown = (e) => {
  const s = state.value
  s.dragging = true
  s.dragStartX = e.clientX
  s.dragStartY = e.clientY
  s.dragStartOffsetX = s.offsetX
  s.dragStartOffsetY = s.offsetY
  window.addEventListener('pointermove', handlePointerMove)
  window.addEventListener('pointerup', handlePointerUp)
}

const handlePointerMove = (e) => {
  const s = state.value
  if (s.dragging) {
    const dx = e.clientX - s.dragStartX
    const dy = e.clientY - s.dragStartY
    s.offsetX = s.dragStartOffsetX + dx
    s.offsetY = s.dragStartOffsetY + dy
    clampOffsets()
    draw()
  } else {
    handleHover(e)
  }
}

const handlePointerUp = () => {
  state.value.dragging = false
  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('pointerup', handlePointerUp)
}

const handleHover = (e) => {
  const rect = canvasRef.value.getBoundingClientRect()
  const px = e.clientX - rect.left
  const py = e.clientY - rect.top
  const s = state.value
  let found = null
  for (const marker of props.markers) {
    const { x, y } = markerScreenPosition(marker)
    const dist = Math.hypot(px - x, py - y)
    if (dist <= HIT_RADIUS) {
      found = marker.id
      break
    }
  }
  if (found !== s.hoveredId) {
    s.hoveredId = found
    draw()
  }
}

const handleClick = (e) => {
  const rect = canvasRef.value.getBoundingClientRect()
  const px = e.clientX - rect.left
  const py = e.clientY - rect.top
  const s = state.value
  let found = null
  for (const marker of props.markers) {
    const { x, y } = markerScreenPosition(marker)
    const dist = Math.hypot(px - x, py - y)
    if (dist <= HIT_RADIUS) {
      found = marker.id
      break
    }
  }
  s.activeId = found
  draw()
}

const attachEvents = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.addEventListener('wheel', handleWheel, { passive: false })
  canvas.addEventListener('pointerdown', handlePointerDown)
  canvas.addEventListener('pointermove', handleHover)
  canvas.addEventListener('click', handleClick)
}

const detachEvents = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.removeEventListener('wheel', handleWheel)
  canvas.removeEventListener('pointerdown', handlePointerDown)
  canvas.removeEventListener('pointermove', handleHover)
  canvas.removeEventListener('click', handleClick)
  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('pointerup', handlePointerUp)
}

const init = () => {
  if (!image.complete) return
  state.value.imgWidth = image.width
  state.value.imgHeight = image.height
  state.value.scale = state.value.baseScale || 1
  state.value.offsetX = 0
  state.value.offsetY = 0
  state.value.imageReady = true
  resizeCanvas()
  // 基于传入的初始中心与缩放居中
  const canvas = canvasRef.value
  if (canvas && state.value.imageReady) {
    const rect = canvas.getBoundingClientRect()
    const targetScale = Math.min(
      MAX_SCALE,
      Math.max(MIN_SCALE, state.value.baseScale * (props.initialScale || 1))
    )
    state.value.scale = targetScale
    const focusX = props.initialCenter?.x ?? 0.5
    const focusY = props.initialCenter?.y ?? 0.5
    state.value.offsetX = rect.width / 2 - focusX * state.value.imgWidth * targetScale
    state.value.offsetY = rect.height / 2 - focusY * state.value.imgHeight * targetScale
  }
  clampOffsets()
  draw()
}

onMounted(() => {
  image.onload = () => {
    init()
  }
  image.onerror = () => {
    console.warn('Map image failed to load:', props.imageSrc)
    state.value.imageReady = false
  }
  image.src = props.imageSrc
  attachEvents()
  window.addEventListener('resize', resizeCanvas)
})

onBeforeUnmount(() => {
  detachEvents()
  window.removeEventListener('resize', resizeCanvas)
})

watch(() => props.imageSrc, (val) => {
  if (!val) return
  state.value.imageReady = false
  image.src = val
})
</script>

<style scoped>
.map-canvas-wrapper {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(20, 0, 0, 0.55);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.map-canvas {
  width: 100%;
  height: 100%;
  display: block;
  cursor: grab;
}

.map-canvas:active {
  cursor: grabbing;
}

.marker-tooltip,
.marker-card {
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 12px;
  pointer-events: none;
  white-space: nowrap;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

.marker-card {
  white-space: normal;
  max-width: 240px;
  pointer-events: auto;
}

.marker-card h4 {
  margin: 0 0 6px;
  font-size: 14px;
}

.marker-card p {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

.map-hints {
  position: absolute;
  left: 12px;
  bottom: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 8px 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}

.map-hints span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 768px) {
  .map-canvas-wrapper {
    height: 60vh;
    min-height: 320px;
  }
}
</style>

