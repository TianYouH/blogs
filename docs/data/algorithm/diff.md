# Diff

diff 算法是 vdom 中最核心、最关键的部分;  
diff 算法能在日常使用 vue react 中体现出来（如key）;

## 树 diff

时间复杂度 O(n^3)

第一遍：遍历 tree1  
第二遍：遍历 tree2  
第三遍：排序

1000个节点，要计算1亿次，算法不可用

## vdom优化后

### 时间复杂度 O(n)

对比原则：
1. 只比较同一层级，不跨级比较。
2. tag 不相同，则直接删掉重建，不再深度比较。
3. tag 和 key，两者都相同，则认为是相同节点，不再深度比较。

<img :src="$withBase('/image/data/algorithm/diff1.png')" alt="示例">

<img :src="$withBase('/image/data/algorithm/diff2.png')" alt="示例">