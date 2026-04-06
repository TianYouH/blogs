#!/bin/bash

# 安装 VuePress 和依赖

echo "正在安装 VuePress 和依赖..."
npm install

echo "正在安装额外的依赖..."
npm install @vuepress/theme-default@next
npm install @vuepress/bundler-vite
npm install -D sass-embedded

echo "依赖安装完成！"