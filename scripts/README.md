# 站点地图生成说明

## 使用方法

站点地图已改为**静态生成方式**，不再在构建时动态生成。

### 生成站点地图

```bash
npm run generate-sitemap
```

### 何时更新站点地图

1. **添加新游戏时**：在 `src/data/en/games.js` 添加新游戏后，运行 `npm run generate-sitemap`
2. **添加新页面时**：更新 `scripts/generate-sitemap.js` 中的路由配置，然后运行 `npm run generate-sitemap`
3. **修改游戏信息时**：修改游戏数据后，运行 `npm run generate-sitemap`

### 站点地图内容

站点地图会包含：
- **静态页面**：13 个页面 × 9 种语言 = 117 个 URL
- **游戏列表页**：1 个页面 × 9 种语言 = 9 个 URL
- **游戏详情页**：所有游戏 × 9 种语言

总计：**153+ 个 URL**（根据游戏数量变化）

### 修改脚本

如果需要添加或修改页面，编辑 `scripts/generate-sitemap.js`：

```javascript
// 在 routes 数组中添加新路由
const routes = [
    { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
    { path: '/new-page', name: 'newPage', priority: 0.8, changefreq: 'monthly' },
    // ...
]
```

### Priority 和 ChangeFreq 说明

- **priority**: 0.0 到 1.0 之间的数值，表示页面重要性
- **changefreq**: 更新频率（always, hourly, daily, weekly, monthly, yearly, never）

### 注意事项

- 站点地图文件位于 `public/sitemap.xml`
- 构建时会自动复制到 `dist/sitemap.xml`
- 务必在提交代码前运行 `npm run generate-sitemap` 更新站点地图

