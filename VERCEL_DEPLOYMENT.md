# Vercel 部署指南

## 快速部署

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 登录并部署：
```bash
vercel login
vercel
```

3. 生产环境部署：
```bash
vercel --prod
```

## 配置说明

- `vercel.json`: 简单的SPA路由配置，所有路由都指向 `index.html`
- `.vercelignore`: 排除不需要的文件

## 多语言支持

部署后支持所有语言路由：
- `/` (英语)
- `/zh/` (中文) 
- `/ja/` (日语)
- `/ru/` (俄语)
- `/ko/` (韩语)
- `/de/` (德语)
- `/fr/` (法语)
- `/es/` (西班牙语)
- `/pt/` (葡萄牙语)

## SEO 文件

构建时自动生成：
- `/sitemap.xml`
- `/robots.txt`
