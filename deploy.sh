#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件 不拷贝gh-pages将无法执行自动化
cp -r ../../../.github ./
cp -r ../../../CNAME ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:TianYouH/blogs.git gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:TianYouH/blogs.git master:gh-pages
# git push -f git@gitee.com:tianyouh/blogs.git master:gh-pages

cd -