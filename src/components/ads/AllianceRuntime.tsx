'use client'

import { useEffect } from 'react'

const nativeKey = '20f454a6b133aad5da418bed2ee46fa4'

/** 联盟广告独立加载，与保留的 AdSense 组件和广告容器无关。 */
export function AllianceRuntime() {
  useEffect(() => {
    // 文档级标记避免 React 开发模式重复执行 Effect 时重复请求广告。
    if (document.documentElement.dataset.allianceAdsStarted) return
    document.documentElement.dataset.allianceAdsStarted = 'true'

    const native = document.querySelector<HTMLElement>('[data-alliance-native]')
    if (native) {
      const container = document.createElement('div')
      container.id = `container-${nativeKey}`
      const script = document.createElement('script')
      script.async = true
      script.dataset.cfasync = 'false'
      script.src = `https://bauval.org/21/${nativeKey}`
      native.appendChild(container)
      native.appendChild(script)
    }

    // 全站每个文档只加载一次 Popunder。
    const popunder = document.createElement('script')
    popunder.dataset.cfasync = 'false'
    popunder.src = 'https://abscloud.org/1/86184a7b725dc261734d690d7a202831'
    document.body.appendChild(popunder)

    const mobile = window.matchMedia('(max-width: 768px)').matches
    const key = mobile ? '2fb8ddfe61334f4979c09f4ef50345b7' : '2ff0216456afc12106640e61a9eb5350'
    const width = mobile ? 300 : 728
    const height = mobile ? 250 : 90
    const slots = Array.from(document.querySelectorAll<HTMLElement>('[data-alliance-banner]'))

    function loadBanner(index: number) {
      if (index >= slots.length) return
      const frame = document.createElement('iframe')
      frame.title = '广告'
      frame.width = String(width)
      frame.height = String(height)
      frame.scrolling = 'no'
      // 每个横幅有自己的 window.atOptions，兼容广告脚本的 document.write。
      frame.srcdoc = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;overflow:hidden}</style></head><body><script>var atOptions={key:'${key}',format:'iframe',height:${height},width:${width},params:{}};</script><script src="https://bauval.org/22/${key}"></script></body></html>`
      frame.onload = () => loadBanner(index + 1)
      frame.onerror = () => loadBanner(index + 1)
      slots[index].appendChild(frame)
    }
    loadBanner(0)
  }, [])

  return null
}
