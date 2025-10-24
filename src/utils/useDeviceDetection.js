import { ref, onMounted, onUnmounted } from 'vue'

export function useDeviceDetection() {
    const isMobile = ref(false)

    const checkDeviceType = () => {
        isMobile.value = window.matchMedia('(max-width: 767px)').matches
    }

    // 立即检测设备类型
    checkDeviceType()

    onMounted(() => {
        // 使用防抖减少resize事件频率
        let resizeTimeout
        const debouncedCheck = () => {
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(checkDeviceType, 100)
        }
        
        window.addEventListener('resize', debouncedCheck)
        
        // 清理函数
        onUnmounted(() => {
            window.removeEventListener('resize', debouncedCheck)
            clearTimeout(resizeTimeout)
        })
    })

    return {
        isMobile,
        checkDeviceType
    }
}
