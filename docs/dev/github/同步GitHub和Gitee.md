# 同步GitHub和Gitee

目的

当 博客 发生发布更新时 将 Github 代码自动同步到 Gitee 仓库

## 手动同步

在 Gitee 的项目主页，提供了同步的按钮，只用点一下，即可与 Github 同步更新。

> 这里的同步功能默认是强制同步

<img :src="$withBase('/image/dev/github/同步GitHub和Gitee1.png')" alt="示例">

> 该项目需要是通过导入进来的项目

<img :src="$withBase('/image/dev/github/同步GitHub和Gitee2.png')" alt="示例">


有点麻烦的是，我们需要在推送到 Github 后，再到 Gitee 项目主页手动点击一下。

## 推送两个仓库

除此之外，我们也可以在 sh 脚本文件里，直接推送到两个仓库地址上：

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:TianYouH/blogs.git master:gh-pages
git push -f git@gitee.com:tianyouh/blogs.git master:gh-pages

cd -
```

当我们执行 sh deploy.sh 的时候，就会自动往两个仓库里推送。

## Github Actions 自动同步

利用 Github Actions，写一个工作流，在发现 Github 博客仓库的 gh-pages 分支代码更新后，自动同步当前代码到 Gitee 上。

关于 Github Actions 的介绍，可以参考阮一峰老师的 [《GitHub Actions 入门教程》](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)。

为了实现 Gitee 和 Github 的同步，我们需要借助一个 action，还好业界已经有现成的实现了，这里我采用的是 [Hub Mirror Action](https://github.com/Yikun/hub-mirror-action)，我们可以看到使用的示例代码：

```yml
steps:
- name: Mirror the Github organization repos to Gitee.
  uses: Yikun/hub-mirror-action@master
  with:
    src: github/kunpengcompute
    dst: gitee/kunpengcompute
    dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
    dst_token: ${{ secrets.GITEE_TOKEN }}
    account_type: org
```

其中有四个必填项：

- src 表示需要被同步的源端账户名，即我们 Github 的账户名，因为我的 Github ID 是 mqyqingfeng，所以这里我应该改成 github/TianYouH。

- dst 表示需要同步到的目的端账户名，即我们 Gitee 的账户名，因为我的 Gitee ID 也是 mqyqingfeng，所以这里我应该改成 gitee/tianyouh。

- dst_key 表示用于在目的端上传代码的私钥，然后将其保存在 Secrets 中。
具体的操作步骤如下：

::: details 私钥示例

获取私钥：

`cat ~/.ssh/id_rsa`  
```
-----BEGIN OPENSSH PRIVATE KEY-----
...
SwnotWv2kZvdzcH/aivu1MHS2ryEGZE6qZtQVsYOh8TyhFNJ98WrElC0on2HdHm1AuaAAi
U+saYGGNQVFuUGZQBhyciqmVWMO25JbAk+NCWIxmp+4Sv0eg89v8utT3WrYSiEI5ccWs5G
...
RORX58LHJ/U8KQK4TzE1lVz5O1jJcDaYmdjFdG5JAAAFkMhRdLLIUXSyAAAAB3NzaC1yc2
EAAAGBALp39yORSIsUhCB/ixuillrLSXUpn/AugC0QU8K6H7luPTFtVisy0xAfocKpsBzb
Gr0/zBpdCIi+OIi+0dGEpmZYlyP5xqexJoTF2iOFmUy1xdKEgdu/ryydvxo0xu4qzeVas/
...
-----END OPENSSH PRIVATE KEY-----
```

复制私钥内容，选择 "要同步的 Github 仓库" -> "Setting" -> "Secrets" -> "New repository secret"

<img :src="$withBase('/image/dev/github/同步GitHub和Gitee3.png')" alt="示例">

填入 Secret 内容，Name 命名为 "GITEE_PRIVATE_KEY"，Value 为复制的内容

然后点击 Add secret 即可。
:::

- dst_token 创建仓库的API tokens， 用于自动创建不存在的仓库。这里我们从 Gitee 上获取，
选择 "头像" -> "设置" -> "[私人令牌](https://gitee.com/profile/personal_access_tokens)" -> "生成新令牌"

生成并复制 Token，然后同样的步骤，保存在 Github 的 Secrets 中，Name 为 "GITEE_TOKEN"

> 注意：检查gitee SSH公钥是否包含 对应公钥。否则，可能会引起 没有权限访问仓库问题。

那么我们就可以在仓库建立的根目录下，建立目录 .github/workflows ，然后创建一个名为syncToGitee.yml 的文件：
```yml
name: syncToGitee
on:
  push:
    branches:
      - gh-pages
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
    - name: Mirror the Github organization repos to Gitee.
      uses: Yikun/hub-mirror-action@master
      with:
        src: 'github/TianYouH'
        dst: 'gitee/tianyouh'
        dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
        dst_token:  ${{ secrets.GITEE_TOKEN }}
        static_list: "blogs"
        force_update: true
```
其中，`static_list` 表示单一仓库同步，`force_update` 为 `true` 表示启用 `git push -f` 强制同步。

当我们把这样的文件提交到 Github，Github 会自动检测并运行该脚本。但是现在还有几个问题要注意：

1. 检查项目是否启用Actions, "Github 仓库" -> "Setting" -> "Actions" -> "General"

2. 因为我们是提交到 Github 的 gh-pages 分支上，这个文件和目录需要写在 gh-pages 分支
观察我们的脚本代码，我们就会发现，每次我们 sh deploy.sh 的时候，都是编译代码到 dist 目录，然后重新 git init ，最后强制提交。所以我们在项目的根目录建立 .github/woorkflows/syncToGitee.yml 并没有什么用，一来提交的是 dist 目录里的代码，二是每次还都会清空重新编译生成代码提交。
为此，我们可以在**脚本里添加代码**，每次编译完后，再拷贝外层的 .github/woorkflows/syncToGitee.yml 到 dist 目录里，再提交到 Github 上。

我们依然在项目根目录添加目录和文件

此时的文件结构如下：
::: details 文件结构
```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ .github
│  └─ workflows
│			└─ syncToGitee.yml
└─ package.json
└─ deploy.sh
```
:::

脚本文件代码如下：

::: details 脚本代码
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件 不拷贝gh-pages将无法执行自动化
cp -r ../../../.github ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:TianYouH/blogs.git master:gh-pages

cd -
```
:::

此时我们再运行 sh deploy.sh 代码提交到 Github，就可以在仓库的 Actions 中看到运行记录：

执行时间大概一分钟左右，Gitee 的代码就会自动同步。

至此，我们实现了 Github 与 Gitee 代码仓库的同步。


参阅博客及文档：

[冴羽：一篇教你代码同步 Github 和 Gitee](https://github.com/mqyqingfeng/Blog/issues/236)
