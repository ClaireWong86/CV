# 王杜娟 · 个人品牌站

产品 / 运营 / 市场方向的个人品牌网站。Vite + React + TypeScript。

## 开发

```bash
npm install
npm run dev      # http://localhost:5180
npm run build
npm run preview
```

## 内容维护

| 文件 | 用途 |
|------|------|
| `src/data/site.ts` | 定位、导航、联系信息 |
| `src/data/content.ts` | 指标、案例、文章列表 |
| `src/data/profile.ts` | 关于页与技能 |
| `content/articles/` | Markdown 文章（待接入） |

## 部署

推送到 GitHub 后，Vercel 会自动构建 `dist/` 目录。
