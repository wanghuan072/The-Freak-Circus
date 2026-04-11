import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const NATIVE_ID = 'container-20f454a6b133aad5da418bed2ee46fa4'
const NATIVE_SRC =
  'https://pl29120202.profitablecpmratenetwork.com/20f454a6b133aad5da418bed2ee46fa4/invoke.js'

const HPF728 = {
  key: '2ff0216456afc12106640e61a9eb5350',
  format: 'iframe',
  height: 90,
  width: 728,
  params: {},
}
const HPF728_URL = 'https://www.highperformanceformat.com/2ff0216456afc12106640e61a9eb5350/invoke.js'
const HPF300 = {
  key: '2fb8ddfe61334f4979c09f4ef50345b7',
  format: 'iframe',
  height: 250,
  width: 300,
  params: {},
}
const HPF300_URL = 'https://www.highperformanceformat.com/2fb8ddfe61334f4979c09f4ef50345b7/invoke.js'

const SEL_NATIVE = 'script[data-adsterra-native-invoke]'

function appendScript(src, parent) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(src))
    parent.appendChild(s)
  })
}

async function injectBannersSequential(slotRefs, opts, invokeUrl) {
  for (const r of slotRefs) {
    const el = r?.value
    if (!el || el.dataset.hpf === '1') continue
    el.dataset.hpf = '1'
    const cfg = document.createElement('script')
    cfg.textContent = `atOptions=${JSON.stringify(opts)};`
    el.appendChild(cfg)
    await appendScript(invokeUrl, el).catch(() => {})
  }
}

/**
 * @param {import('vue').Ref<HTMLElement | null>[]} slots728
 * @param {import('vue').Ref<HTMLElement | null>[]} slots300
 * @param {{ when?: import('vue').Ref<boolean> | import('vue').ComputedRef<boolean> }} options
 * when：为 true 时才注入（详情页等异步内容；默认仅 onMounted）
 */
export function useAdsterraPageAds(slots728, slots300, options = {}) {
  const { when = null } = options
  const isMobile = ref(false)

  async function run() {
    if (document.getElementById(NATIVE_ID) && !document.querySelector(SEL_NATIVE)) {
      const s = document.createElement('script')
      s.async = true
      s.setAttribute('data-cfasync', 'false')
      s.setAttribute('data-adsterra-native-invoke', '1')
      s.src = NATIVE_SRC
      document.body.appendChild(s)
    }
    if (isMobile.value) {
      await injectBannersSequential(slots300, HPF300, HPF300_URL)
    } else {
      await injectBannersSequential(slots728, HPF728, HPF728_URL)
    }
  }

  function schedule() {
    isMobile.value = window.matchMedia('(max-width: 1023px)').matches
    nextTick(() => {
      void run()
    })
  }

  if (when != null) {
    watch(
      when,
      (ok) => {
        if (ok) schedule()
      },
      { immediate: true }
    )
  } else {
    onMounted(schedule)
  }

  onBeforeUnmount(() => {
    document.querySelector(SEL_NATIVE)?.remove()
  })

  return { isMobile }
}
