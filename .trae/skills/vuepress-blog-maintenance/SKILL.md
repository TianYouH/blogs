---
name: "vuepress-blog-maintenance"
description: "维护和更新 VuePress 博客项目，包括版本更新、依赖管理和内容添加。当需要更新博客或添加新内容部分时调用。"
version: "1.0.0"
author: "Trae AI"
date: "2026-04-06"
---

# VuePress 博客维护

## 版本信息

| 版本 | 日期 | 描述 |
|------|------|------|
| 1.0.0 | 2026-04-06 | 初始版本，包含基本维护指南和 AI 内容添加 |

## Skill 职责

1. **版本更新**：管理 VuePress 及其依赖的版本更新
2. **依赖管理**：处理项目依赖的安装和配置
3. **配置管理**：维护和更新 VuePress 配置文件
4. **内容管理**：添加和组织博客内容
5. **故障排除**：解决常见的 VuePress 问题
6. **自动化**：提供可自动化的维护脚本

## 触发场景

- 当需要更新 VuePress 版本时
- 当需要添加新的内容部分时
- 当遇到 VuePress 相关问题时
- 当需要维护项目依赖时
- 当需要部署博客时

## 执行步骤

### 1. 版本更新

1. 检查当前 VuePress 版本
2. 确定目标版本
3. 修改 package.json 文件
4. 运行 npm install 安装更新
5. 测试更新后的站点

### 2. 依赖管理

1. 检查当前依赖状态
2. 安装必要的依赖包
3. 验证依赖安装成功
4. 测试站点功能

### 3. 内容添加

1. 创建新的内容目录结构
2. 添加内容文件
3. 更新导航栏配置
4. 更新侧边栏配置
5. 测试内容显示

### 4. 故障排除

1. 识别问题类型
2. 查找相关错误信息
3. 应用相应的解决方案
4. 验证问题是否解决

### 5. 部署

1. 构建生产版本
2. 测试构建结果
3. 部署到目标服务器

## 输出标准

1. **配置文件**：符合 VuePress 2.0 配置标准，使用 ESM 模块系统
2. **目录结构**：按照项目规范组织，层次清晰
3. **内容文件**：使用 Markdown 格式，结构完整
4. **导航配置**：包含所有必要的导航项，链接正确
5. **侧边栏配置**：按目录组织，可折叠，链接正确
6. **依赖管理**：所有依赖正确安装，版本兼容
7. **站点功能**：所有页面正常显示，功能正常

## 项目概述

该项目是一个 VuePress 2.0 博客，具有以下结构：

```
/blogs
  /docs
    /ai
      /overview
      /machine-learning
      /deep-learning
      /nlp
      /keywords
    /web
    /server
    /data
    /dev
    /.vuepress
      /public
      config.js
  package.json
```

## 版本更新

### VuePress 更新

**当前版本**：2.0.0-rc.28

**更新过程**：
1. 修改 `package.json` 文件以更新 VuePress 版本
2. 运行 `npm install` 安装更新后的版本
3. 根据需要更新依赖和配置

**之前版本**：2.0.0-beta.59

## 依赖管理

### 必需的依赖

- `vuepress@^2.0.0-rc.28` - VuePress 主包
- `@vuepress/theme-default@next` - VuePress 2.0 的默认主题
- `@vuepress/bundler-vite` - VuePress 2.0 的打包器
- `sass-embedded` - VuePress 的 SCSS 预处理器

### 安装命令

```bash
# 安装 VuePress 和依赖
npm install

# 安装额外的依赖
npm install @vuepress/theme-default@next
npm install @vuepress/bundler-vite
npm install -D sass-embedded
```

## 配置更改

### 配置文件结构

配置文件 (`docs/.vuepress/config.js`) 使用 ESM 模块系统，具有以下结构：

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

### 关键配置点

- **主题**：使用 `@vuepress/theme-default` 中的 `defaultTheme`
- **打包器**：使用 `@vuepress/bundler-vite` 中的 `viteBundler`
- **导航栏**：包含指向不同部分的链接，包括前端、服务、数据、AI 和开发
- **侧边栏**：按目录配置，具有可折叠部分

## 内容添加

### AI 部分

添加了一个新的 AI 部分，包含以下子目录：

- **AI 概述** (`/ai/overview/`) - AI 概念介绍
- **机器学习** (`/ai/machine-learning/`) - 机器学习概念和算法
- **深度学习** (`/ai/deep-learning/`) - 深度学习架构和技术
- **自然语言处理** (`/ai/nlp/`) - NLP 概念和应用
- **关键词** (`/ai/keywords/`) - 全面的 AI 术语表

### 导航更新

将 AI 部分添加到导航栏，包含指向所有子部分的链接：

```javascript
{
  text: "AI",
  children: [
    { text: "AI 概述", link: "/ai/overview/" },
    { text: "机器学习", link: "/ai/machine-learning/" },
    { text: "深度学习", link: "/ai/deep-learning/" },
    { text: "自然语言处理", link: "/ai/nlp/" },
    { text: "关键词说明", link: "/ai/keywords/" },
  ],
},
```

### 侧边栏配置

将 AI 部分添加到侧边栏：

```javascript
"/ai/": [
  {
    text: "AI 概述",
    collapsible: true,
    children: ["/ai/overview/README.md"],
  },
  {
    text: "机器学习",
    collapsible: true,
    children: ["/ai/machine-learning/README.md"],
  },
  {
    text: "深度学习",
    collapsible: true,
    children: ["/ai/deep-learning/README.md"],
  },
  {
    text: "自然语言处理",
    collapsible: true,
    children: ["/ai/nlp/README.md"],
  },
  {
    text: "关键词说明",
    collapsible: true,
    children: ["/ai/keywords/README.md"],
  },
],
```

## 故障排除

### 常见问题

1. **缺少预处理器依赖 "sass-embedded"**
   - 解决方案：运行 `npm install -D sass-embedded`

2. **缺少主题或打包器选项**
   - 解决方案：确保在 `config.js` 中配置了 `theme` 和 `bundler`

3. **菜单项不显示**
   - 解决方案：检查 `config.js` 中的导航栏配置，确保它正确嵌套在 `defaultTheme` 下

4. **侧边栏不显示**
   - 解决方案：检查 `config.js` 中的侧边栏配置，确保其结构正确

### 开发服务器

启动开发服务器：

```bash
npm run docs:dev
```

服务器将在 `http://localhost:8080/` 运行

### 构建命令

为生产环境构建站点：

```bash
npm run docs:build
```

## 维护提示

1. **定期更新**：保持 VuePress 和依赖项的更新
2. **内容管理**：将内容组织在逻辑目录结构中
3. **配置备份**：保留 config.js 文件的备份
4. **测试**：在部署前在本地测试更改
5. **文档**：使用任何新的更改或添加更新此技能

## 参考资料

详细的格式要求和内容标准请参考 `references` 目录。

## 自动化脚本

可自动化的维护步骤请参考 `scripts` 目录。

## 模板文件

可复用的模板文件请参考 `assets` 目录。