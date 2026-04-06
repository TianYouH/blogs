# VuePress 博客维护助手

本文件描述了 VuePress 博客项目的维护助手，用于帮助管理和维护博客项目。

## 项目概述

这是一个基于 VuePress 2.0 的博客项目，用于分享技术知识和经验。项目包含多个技术领域的内容，包括前端、服务端、数据、AI 和开发工具等。

## 维护助手职责

1. **版本管理**：跟踪和更新 VuePress 及其依赖的版本
2. **依赖管理**：确保项目依赖的正确安装和配置
3. **内容管理**：协助添加、更新和组织博客内容
4. **配置管理**：维护和更新 VuePress 配置
5. **故障排除**：解决常见的 VuePress 问题
6. **部署协助**：帮助构建和部署博客

## 项目结构

```
/blogs
  /docs            # 博客内容
    /ai           # AI 相关内容
    /web          # 前端相关内容
    /server       # 服务端相关内容
    /data         # 数据相关内容
    /dev          # 开发工具相关内容
    /.vuepress    # VuePress 配置
  /trae/skills    # 技能文件
  package.json    # 项目配置
  AGENTS.md       # 维护助手配置
```

## 常用命令

### 开发服务器

```bash
npm run docs:dev
```

### 构建生产版本

```bash
npm run docs:build
```

### 安装依赖

```bash
npm install
```

## 维护指南

### 版本更新

1. 检查当前 VuePress 版本
2. 确定目标版本
3. 修改 package.json 文件
4. 运行 npm install 安装更新
5. 测试更新后的站点

### 内容添加

1. 创建新的内容目录结构
2. 添加内容文件
3. 更新导航栏配置
4. 更新侧边栏配置
5. 测试内容显示

### 故障排除

1. **缺少预处理器依赖 "sass-embedded"**
   - 解决方案：运行 `npm install -D sass-embedded`

2. **缺少主题或打包器选项**
   - 解决方案：确保在 config.js 中配置了 `theme` 和 `bundler`

3. **菜单项不显示**
   - 解决方案：检查 config.js 中的导航栏配置，确保它正确嵌套在 `defaultTheme` 下

4. **侧边栏不显示**
   - 解决方案：检查 config.js 中的侧边栏配置，确保其结构正确

## 技能文件

项目包含一个技能文件，用于指导项目的维护：

- `.trae/skills/vuepress-blog-maintenance/SKILL.md` - 详细的维护指南

## 模板文件

项目包含配置文件模板，可用于参考：

- `.trae/skills/vuepress-blog-maintenance/assets/config-template.js` - 配置文件模板

## 自动化脚本

项目包含自动化脚本，用于简化维护任务：

- `.trae/skills/vuepress-blog-maintenance/scripts/install-dependencies.sh` - 安装依赖
- `.trae/skills/vuepress-blog-maintenance/scripts/start-dev-server.sh` - 启动开发服务器
- `.trae/skills/vuepress-blog-maintenance/scripts/build-production.sh` - 构建生产版本

## 参考资料

- [VuePress 官方文档](https://vuepress.vuejs.org/)
- [VuePress 2.0 配置参考](https://vuepress.vuejs.org/reference/config.html)
- [VuePress 主题参考](https://vuepress.vuejs.org/reference/theme-api.html)