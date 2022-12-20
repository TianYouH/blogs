# GitFlow

最早诞生、并得到广泛采用的一种工作流程，就是Git flow 。

<img :src="$withBase('/image/dev/git/gitFlow.png')" alt="示例">

## 特点

它最主要的特点有两个：

1. 首先，项目存在两个长期分支。
  - 主分支 `master`
  - 开发分支 `develop`

前者用于存放对外发布的版本，任何时候在这个分支拿到的，都是稳定的分布版；后者用于日常开发，存放最新的开发版。

2. 其次，项目存在三种短期分支。
  - 功能分支 `feature`
  - 补丁分支 `hotfix`
  - 预发分支 `release`

一旦完成开发，它们就会被合并进develop或master，然后被删除。

## 分支

### 主分支Master

首先，代码库应该有一个、且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布。

<img :src="$withBase('/image/dev/git/master.png')" alt="示例">

Git主分支的名字，默认叫做Master。它是自动建立的，版本库初始化以后，默认就是在主分支在进行开发。

### 开发分支Develop

主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做Develop。

<img :src="$withBase('/image/dev/git/develop.png')" alt="示例">

这个分支可以用来生成代码的最新隔夜版本（nightly）。如果想正式对外发布，就在Master分支上，对Develop分支进行"合并"（merge）。

### 临时性分支

前面讲到版本库的两条主要分支：Master和Develop。前者用于正式发布，后者用于日常开发。其实，常设分支只需要这两条就够了，不需要其他了。

但是，除了常设分支以外，还有一些临时性分支，用于应对一些特定目的的版本开发。临时性分支主要有三种：

* 功能（feature）分支

* 预发布（release）分支

* 修补bug（fixbug）分支

这三种分支都属于临时性需要，使用完以后，应该删除，使得代码库的常设分支始终只有Master和Develop。

#### 功能分支Feature

它是为了开发某种特定功能，从Develop分支上面分出来的。开发完成后，要再并入Develop。

<img :src="$withBase('/image/dev/git/feature.png')" alt="示例">

功能分支的名字，推荐采用feature/*的形式命名。

#### 预发布分支Release

预发布分支，它是指发布正式版本之前（即合并到Master分支之前），我们可能需要有一个预发布的版本进行测试。

预发布分支是从Develop分支上面分出来的，预发布结束以后，必须合并进Develop和Master分支。

它的命名，推荐采用release/*的形式。

#### 修补bug分支Fixbug

修补bug分支。软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。

修补bug分支是从Master分支上面分出来的。修补结束以后，再合并进Master和Develop分支。

<img :src="$withBase('/image/dev/git/fixbug.png')" alt="示例">

它的命名，推荐采用fixbug/*的形式。

## 评价

Git flow的优点是清晰可控，缺点是相对复杂，需要同时维护两个长期分支。

大多数工具都将master当作默认分支，可是开发是在develop分支进行的，这导致经常要切换分支，非常烦人。

更大问题在于，这个模式是基于"版本发布"的，目标是一段时间以后产出一个新版本。

但是，很多网站项目是"持续发布"，代码一有变动，就部署一次。这时，master分支和develop分支的差别不大，没必要维护两个长期分支。

> 参考资料：
>
> [Git flow](https://nvie.com/posts/a-successful-git-branching-model/)
