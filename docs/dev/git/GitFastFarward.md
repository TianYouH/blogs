# GitFastFarward

Git有两种合并：一种是"直进式合并"（fast forward），不生成单独的合并节点；另一种是"非直进式合并"（none fast-forword），会生成单独节点。

前者不利于保持commit信息的清晰，也不利于以后的回滚，建议总是采用后者（即使用--no-ff参数）。只要发生合并，就要有一个单独的合并节点。

默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Develop分支。

<img :src="$withBase('/image/dev/git/fastFarward.png')" alt="示例">

使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。为了保证版本演进的清晰，推荐采用这种做法。

<img :src="$withBase('/image/dev/git/fastFarwardNoFf.png')" alt="示例">
