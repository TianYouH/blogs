import{_ as r,M as a,p as t,q as v,Q as u,R as n,t as l,N as e,a1 as d}from"./framework-8fa3e4ce.js";const c={},m=d('<h1 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm" aria-hidden="true">#</a> Algorithm</h1><h2 id="面对算法问题思路" tabindex="-1"><a class="header-anchor" href="#面对算法问题思路" aria-hidden="true">#</a> 面对算法问题思路</h2><ul><li>你会如何对一组数据进行排序？</li></ul><p>第一想法：快速排序算法 O(nlogn)</p><ul><li>深入思考：这组数据有什么样的特征？ <ul><li>有没有可能包含有大量重复的元素？ <ul><li>如果有这种可能的话，三路快排是更好的选择。</li></ul></li><li>是否大部分数据距离它正确的位置很近？是否近乎有序？（如：时间记录，发生早但记录晚，导致顺序问题） <ul><li>如果是这样的话，插入排序是更好的选择。</li></ul></li><li>是否数据的取值范围非常有限？（如：学生成绩排序，分数的取值0~100左右） <ul><li>如果是这样的话，计数排序是更好的选择。</li></ul></li><li>额外要求：是都需要稳定排序？ <ul><li>如果是的话，归并排序是更好的选择。</li></ul></li><li>数据的存储状况是怎么样的：是否是使用链表存储的？ <ul><li>如果是的话，归并排序是更好的选择。</li></ul></li><li>数据的存储状况是怎么样的：数据的大小是否可以装载在内存里？ <ul><li>数据量很大，或者内存很小，不足以装载在内存里，需要使用外排序算法。</li></ul></li></ul></li></ul><p>优化算法思路：</p><ul><li>空间和时间的交换（哈希表）</li><li>预处理信息（排序）</li><li>在瓶颈出寻找答案：O(nlogn)+O(n^2); O(n^3)</li></ul><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2><ul><li><p>n 表示数据规模</p></li><li><p>O(f(n))表示运行算法所需要执行的指令数，和f(n)成正比</p></li><li><p>举例：(a、b、c、d 皆是常数)</p></li><li><p>二分查找法 O(logn) 所需执行指令数：a*logn</p></li><li><p>寻找数组中的最大/最小值 O(n) 所需执行指令数：b*n</p></li><li><p>归并排序算法 O(nlogn) 所需执行数：c*nlogn</p></li><li><p>选择排序法 O(n^2) 所需指令数：d*n^2</p></li></ul><p>算法A: O(n) 所需执行指令数：10000*n</p><p>算法B: O(n^2) 所需执行指令数：10*n^2</p><table><thead><tr><th>n</th><th>A指令数 10000n</th><th>B指令数 10n^2</th><th>倍数</th></tr></thead><tbody><tr><td>10</td><td>10^5</td><td>10^3</td><td>100</td></tr><tr><td>100</td><td>10^6</td><td>10^5</td><td>10</td></tr><tr><td>1000</td><td>10^7</td><td>10^7</td><td>1</td></tr><tr><td>10000</td><td>10^8</td><td>10^9</td><td>0.1</td></tr><tr><td>10^5</td><td>10^9</td><td>10^11</td><td>0.01</td></tr><tr><td>10^6</td><td>10^10</td><td>10^13</td><td>0.001</td></tr></tbody></table><p>对应不同复杂度的函数，随着输入数据n规模的增大，操作增长数是不同的；</p>',13),b=["src"],o={href:"https://blog.csdn.net/ted_cs/article/details/82881831",target:"_blank",rel:"noopener noreferrer"},h={href:"https://csdnnews.blog.csdn.net/article/details/82077572?spm=1001.2101.3001.6650.18&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-18.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-18.no_search_link",target:"_blank",rel:"noopener noreferrer"},p=d(`<h3 id="示例-一个时间复杂度的问题" tabindex="-1"><a class="header-anchor" href="#示例-一个时间复杂度的问题" aria-hidden="true">#</a> 示例：一个时间复杂度的问题</h3><p>有一个字符串数组，将数组中的每一个字符串按照字母序排序；之后再将整个字符串数组按照字典序排序。整个操作的时间复杂度？</p><p>思路：</p><ul><li>假设最长的字符串长度为s; 数组中有n个字符串;</li><li>对每个字符串排序：O(slogs);</li><li>将数组中的每一个字符串按照字母序排序：O(n*slog(s));</li><li>将整个字符串数组按照字典序排序：O(s*nlog(n));</li></ul><p>结果：</p><p>O(n*slog(s)) + O(s*nlog(n)) = O(n*s*logs + s*n*logn) = O(n*s*(logs+logn))</p><h2 id="算法复杂度在有些情况和用例相关" tabindex="-1"><a class="header-anchor" href="#算法复杂度在有些情况和用例相关" aria-hidden="true">#</a> 算法复杂度在有些情况和用例相关</h2><table><thead><tr><th>插入排序算法 O(n^2)</th><th>快速排序算法 O(nlogn)</th></tr></thead><tbody><tr><td>最差情况：O(n^2)</td><td>最差情况：O(n^2)</td></tr><tr><td>最好情况：O(n)</td><td>最好情况：O(nlogn)</td></tr><tr><td>平均情况：O(n^2)</td><td>平均情况：O(nlogn)</td></tr></tbody></table><h3 id="对数据规模的概念" tabindex="-1"><a class="header-anchor" href="#对数据规模的概念" aria-hidden="true">#</a> 对数据规模的概念</h3><p>如果要想在1s之内解决问题：</p><ul><li>O(n^2)的算法可以处理大约10^4级别数据;</li><li>O(n)的算法可以处理大约10^8级别数据;</li><li>O(nlogn)的算法可以处理大约10^7级别数据;</li></ul><h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h3><ul><li>多开一个辅助数组：O(n)</li><li>多开一个辅助的二维数组：O(n^2)</li><li>多开常数空间：O(1)</li></ul><p>递归的调用是有空间代价的</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例：</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/**
 * O(1)时间复杂度 常数级算法
 * @param {*} a 
 * @param {*} b 
 */
void swap( int &amp;a, int &amp;b) {
  int temp = a;
  a = b;
  b = temp;
}

/**
 * O(n)时间复杂度 
 * @param {*} n 
 * @returns 
 */
int sum(int n) {
  int ret = 0;
  for (int i = 0; i &lt;= n; i++)
    ret += i;
  return ret;
}
/**
 * O(n)时间复杂度 1/2*n次swap操作：O(n)
 */
void reverse(string &amp;s) {
  int n = s.size();
  for (int i = 0; i &lt; n/2; i++)
    swap(s[i], s[n - 1 - i]);
}

/**
 * O(n^2)
 * (n-1)+(n-2)+(nn-3)+...+0
 * =(0+n-1)*n/2
 * =(1/2)n*(n-1)
 * =1/2n^2-1/2*n
 * =O(n^2)
 */
void selectionSort(int arr[], int n) {
  for (int i = 0; i &lt; n; i++) {
    int minIndex = i
    for (int j = i + 1; j &lt; n; j++)
      if (arr[j] &lt; arr[minIndex])
        minIndex = j;
    
    swap(arr[i], arr[minIndex]);
  }
}

/**
 * O(n^2)?
 * 30n次基本操作 O(n)
 */
void printInformation(int n) {
  for (int i = 0; i &lt; n; i++) {
    for (int j = 1; j &lt;= 30; j++)
      cout&lt;&lt;&quot;Class&quot;&lt;&lt;i&lt;&lt;&quot;-&quot;&lt;&lt;&quot;No.&quot;&lt;&lt;j&lt;&lt;endl;
  return;
}

/**
 * O(logn)
 * logaN  logbN
 * logaN = logab * logbN
 *         (常数)
 * O(logn)
 */

/**
 * O(logn)
 * 二分查找法的时间复杂度是O(logn)的
 * 在n个元素中寻找    |
 * 在n/2个元素中寻找  |
 * 在n/4个元素中寻找  |
 * .....             |
 * 在1个元素中寻找    ﹀
 * n经过几次“除以2”操作后，等于1？
 * 对数函数的定义 log2n = O(logn)
 */
int binarySearch(int arr[], int n, int target) {

  int l = 0, r = n-1;
  while(l &lt;= r) {
    int mid = l + (r - l)/2;
    if(arr[mid] == target)return mid;
    if(arr[mid] &gt; target) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}

/**
 * O(logn)
 * 整形转成字符串
 * n经过几次“除以10”操作后，等于0？
 * log10n = O(logn)
 */
string intToString(int num) {

  string s = &quot;&quot;;

  while(num) {
    s += &quot;0&quot; + num%10;
    num /= 10;
  }
  reverse(s);
  return s;
}

/**
 * O(sqrt(n))
 */
bool isPrime(int n) {
  for (int x = 2; x*x &lt;= n; x++)
    if( n%x == 0 )
      return false;
  return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂度试验" tabindex="-1"><a class="header-anchor" href="#复杂度试验" aria-hidden="true">#</a> 复杂度试验</h3><ul><li><p>如果要想在1s之内解决问题：</p><ul><li>O(n^2)的算法可以处理大约10^4级别的数据;</li><li>O(n)的算法可以处理大约10^8级别的数据;</li><li>O(nlogn)的算法可以处理大约10^7级别的数据;</li></ul></li><li><p>实验，观察趋势</p><ul><li>每次将数据规模提高两倍，看时间变化</li></ul></li></ul><h4 id="递归算法的复杂度分析" tabindex="-1"><a class="header-anchor" href="#递归算法的复杂度分析" aria-hidden="true">#</a> 递归算法的复杂度分析</h4><ul><li>不是有递归的函数就一定是O(nlogn)！（概念：主定理） <ul><li>如果递归函数中，只进行一次递归调用，递归深度为depth; <ul><li>在每个递归函数中，时间复杂度为T;</li><li>则总体的时间复杂度为O(T*depth);</li></ul></li><li>递归中进行多次递归调用 <ul><li>计算的调用次数(=递归深度)</li></ul></li></ul></li></ul><h4 id="均摊复杂度分析" tabindex="-1"><a class="header-anchor" href="#均摊复杂度分析" aria-hidden="true">#</a> 均摊复杂度分析</h4>`,21);function g(s,O){const i=a("ExternalLinkIcon");return t(),v("div",null,[m,u(" ![时间复杂度](/blogs/image/data/algorithm/1.png) "),n("img",{src:s.$withBase("/image/data/algorithm/1.png"),alt:"时间复杂度"},null,8,b),n("p",null,[n("a",o,[l("O(1), O(n), O(logn), O(nlogn) 的区别"),e(i)])]),n("p",null,[n("a",h,[l("漫画：什么是时间复杂度？"),e(i)])]),p])}const _=r(c,[["render",g],["__file","index.html.vue"]]);export{_ as default};
