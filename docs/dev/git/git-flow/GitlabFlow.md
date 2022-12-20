# GitlabFlow

Gitlab flow 是 Git flow 与 Github flow 的综合。它吸取了两者的优点，既有适应不同开发环境的弹性，又有单一主分支的简单和便利。它是 Gitlab.com 推荐的做法。

## 上游优先

Gitlab flow 的最大原则叫做"上游优先"（upsteam first），即只存在一个主分支master，它是所有其他分支的"上游"。只有上游分支采纳的代码变化，才能应用到其他分支。

[Chromium](https://www.chromium.org/chromium-os/chromiumos-design-docs/upstream-first/)(Chrome的工程版或称实验版)项目就是一个例子，它明确规定，上游分支依次为：
1. Linus Torvalds的分支
2. 子系统（比如netdev）的分支
3. 设备厂商（比如三星）的分支

## 持续发布

Gitlab flow 分成两种情况，适应不同的开发流程。

<img :src="$withBase('/image/dev/git/gitlabFlow.png')" alt="示例">

对于"持续发布"的项目，它建议在master分支以外，再建立不同的环境分支。比如，"开发环境"的分支是master，"预发环境"的分支是pre-production，"生产环境"的分支是production。

开发分支是预发分支的"上游"，预发分支又是生产分支的"上游"。代码的变化，必须由"上游"向"下游"发展。比如，生产环境出现了bug，这时就要新建一个功能分支，先把它合并到master，确认没有问题，再cherry-pick到pre-production，这一步也没有问题，才进入production。

只有紧急情况，才允许跳过上游，直接合并到下游分支。

## 版本发布

<img :src="$withBase('/image/dev/git/gitlabFlow2.png')" alt="示例">

对于"版本发布"的项目，建议的做法是每一个稳定版本，都要从master分支拉出一个分支，比如2-3-stable、2-4-stable等等。

以后，只有修补bug，才允许将代码合并到这些分支，并且此时要更新小版本号。
