# 格式要求

## 配置文件格式

### config.js

- 使用 ESM 模块系统
- 正确导入必要的依赖
- 遵循 VuePress 2.0 配置规范
- 保持配置结构清晰，易于维护

```javascript
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

export default {
  base: "/",
  title: "你好世界",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "这是我的博客",
  theme: defaultTheme({
    lastUpdatedText: "最后更新时间",
    contributorsText: "贡献者",
    navbar: [
      // 导航项
    ],
    sidebar: {
      // 侧边栏配置
    },
  }),
  bundler: viteBundler(),
};
```

## 内容文件格式

### Markdown 文件

- 使用标准 Markdown 格式
- 包含清晰的标题层级
- 使用适当的格式化元素（列表、代码块等）
- 保持内容结构一致

```markdown
# 标题

## 子标题

### 小标题

- 列表项 1
- 列表项 2

```javascript
// 代码块
```
```

## 目录结构

- 按照功能和主题组织目录
- 使用小写字母和连字符命名目录
- 为每个目录创建 README.md 文件
- 保持目录结构层次清晰

```
/docs
  /section
    /sub-section
      README.md
```

## 导航配置

- 导航项按逻辑顺序排列
- 子菜单使用适当的层级结构
- 链接指向正确的路径
- 保持导航配置简洁明了

```javascript
{
  text: "Section",
  children: [
    { text: "Subsection 1", link: "/section/subsection1/" },
    { text: "Subsection 2", link: "/section/subsection2/" },
  ],
},
```

## 侧边栏配置

- 按目录组织侧边栏
- 使用可折叠的侧边栏项
- 链接指向正确的文件路径
- 保持侧边栏配置与目录结构一致

```javascript
"/section/": [
  {
    text: "Subsection 1",
    collapsible: true,
    children: ["/section/subsection1/README.md"],
  },
  {
    text: "Subsection 2",
    collapsible: true,
    children: ["/section/subsection2/README.md"],
  },
],
```