# Git Flow 工作流程

Git 作为一个源码（版本）管理系统，不可避免涉及到多人协作。

它可以使得版本库的演进保持简洁，主干清晰，各个分支各司其职、井井有条。

协作必须有一个规范的工作流程，让大家有效地合作，使得项目井井有条地发展下去。"工作流程"在英语里，叫做"workflow"或者"flow"，原意是水流，比喻项目像水流那样，顺畅、自然地向前流动，不会发生冲击、对撞、甚至漩涡。

三种广泛使用的工作流程：

1. Git flow
2. Github flow
3. Gitlab flow

三种工作流程，有一个共同点：都采用"功能驱动式开发"（Feature-driven development，简称FDD）。

它指的是，需求是开发的起点，先有需求再有功能分支（feature branch）或者补丁分支（hotfix branch）。完成开发后，该分支就合并到主分支，然后被删除

> 参考资料：
>
> [Git 工作流程](https://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
