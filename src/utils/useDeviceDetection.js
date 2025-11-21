import { ref, onMounted, onUnmounted } from 'vue'

export function useDeviceDetection() {
    const isMobile = ref(false)

    const checkDeviceType = () => {
        isMobile.value = window.matchMedia('(max-width: 767px)').matches
    }

    // 立即检测设备类型
    checkDeviceType()

    onMounted(() => {
        // 监听窗口大小变化
        window.addEventListener('resize', checkDeviceType)
    })

    onUnmounted(() => {
        // 清理事件监听器
        window.removeEventListener('resize', checkDeviceType)
    })

    return {
        isMobile,
        checkDeviceType
    }
}
