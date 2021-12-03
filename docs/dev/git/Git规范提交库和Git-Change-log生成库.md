# Git规范提交库和Git-Change-log生成库



使用 commitizen 保证 提交格式正确，然后使用Husky配合commitlint验证提交说明的有效性，最后可以选择性使用 conventional-changelog 生成 Change log



## 1. *Commitizen* Commit message 格式工具

用来生成符合格式的 Commit message。

首先，安装提交 cli 工具：

```
npm install commitizen -g
```

接下来，通过键入以下方式，初始化项目以使用 cz 常规更改日志适配器：

```
commitizen init cz-conventional-changelog --save-dev --save-exact
```

或者，如果您使用的是yarn：

```
commitizen init cz-conventional-changelog --yarn --dev --exact
```

以后，凡是用到`git commit`命令，一律改为使用`git cz`。这时，就会出现选项.

## 2. conventional-changelog-cli 根据 Commit 生成日志

代码

```bash
npm install -g conventional-changelog-cli
cd my-project
conventional-changelog -p angular -i CHANGELOG.md -s
```



> 参考资料：
>
> [阮一峰 Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
>
> [commitizen](https://github.com/commitizen/cz-cli)
>
> [husky v4](https://github.com/typicode/husky/tree/master)
>
> [commitlint](https://commitlint.js.org)
>
> [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

