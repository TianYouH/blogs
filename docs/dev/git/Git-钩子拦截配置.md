# Git-钩子拦截配置

## 测试环境
    windows7>vscode>webpack@4.x

## 相关依赖

    "husky": "^7.0.4"
        husky可以让我们向项目中方便添加git hooks
    "lint-staged": "^12.1.2"
        在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的。
        但是整个项目上运行lint速度会很慢，lint-staged能够让lint只检测暂存区的文件，所以速度很快。
    "@commitlint/cli": "^15.0.0"
    "@commitlint/config-conventional": "^15.0.0"
        用于检查项目的 Commit message 是否符合格式（采用默认）。

## 安装

    `npm i husky lint-staged @commitlint/cli @commitlint/config-conventional -D`

## 相关配置说明

### lint-staged

配置文件 添加到项目根目录下 根据实际验证情况调整配置

lint-staged.config.js
```js
module.exports = {
  '*.(js|vue)': ['eslint --fix --cache', 'prettier  --write'],
  '*.(vue|htm|html|css|less|sass|scss|styl|stylus|md|js)': [
    // 'stylelint --fix --cache',
    'prettier  --write'
  ]
  // '*.(htm|html)': ['htmlhint', 'prettier  --write']
};
```

### commitlint

配置

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

测试

```bash
echo 'foo: bar' | commitlint
```

### husky

1. 在packgae.json中添加prepare脚本

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
// prepare脚本会在npm install（不带参数）之后自动执行。
// 也就是说当我们执行npm install安装完项目依赖后会执行 husky install命令，该命令会创建.husky/目录并指定该目录为git hooks所在的目录。
```

2. 添加git hooks，运行一下命令创建git hooks

`npx husky add .husky/pre-commit "npx lint-staged"`

运行完该命令后我们会看到.husky/目录下新增了一个名为pre-commit的shell脚本。
也就是说在在执行git commit命令时会先执行pre-commit这个脚本。pre-commit脚本内容如下：

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
# 依赖 lint-staged 库
```

可以看到该脚本的功能就是执行npx lint-staged这个命令

3. 添加 commit-msg 验证钩子

`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

运行完该命令后我们会看到.husky/目录下新增了一个名为commit-msg的shell脚本（如果没有自动生成，请手动添加）。
也就是说在在执行git commit命令时会先执行pre-commit这个脚本。pre-commit脚本内容如下：

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
# 依赖 commitlint 相关库
```

提交的时候会依据配置钩子，验证代码规范及提交格式；

4. 生成目录格式参考

- .husky 📁
    - _ 📁
        - .gitignore 📄
        - husky.sh 📄
    - commit-msg 📄
    - pre-commit 📄

> 参考资料：
>
> [husky](https://typicode.github.io/husky/#/?id=features)
>
> [husky使用总结](https://zhuanlan.zhihu.com/p/366786798)
>
> [lint-staged](https://www.npmjs.com/package/lint-staged)