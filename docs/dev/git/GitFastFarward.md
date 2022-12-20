# GitFastFarward

默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Develop分支。

<img :src="$withBase('/image/dev/git/fastFarward.png')" alt="示例">

使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。为了保证版本演进的清晰，推荐采用这种做法。

<img :src="$withBase('/image/dev/git/fastFarwardNoFf.png')" alt="示例">
