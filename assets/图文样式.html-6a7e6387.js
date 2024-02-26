import{_ as t,M as p,p as e,q as i,R as n,t as l,N as c,a1 as s}from"./framework-8fa3e4ce.js";const o={},u=s(`<h1 id="图文样式" tabindex="-1"><a class="header-anchor" href="#图文样式" aria-hidden="true">#</a> 图文样式</h1><h2 id="line-height如何继承" tabindex="-1"><a class="header-anchor" href="#line-height如何继承" aria-hidden="true">#</a> line-height如何继承</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>写具体数值，如30px，则继承该值（比较好理解)
写比例，1.5 ，则继承该比例（比较好理解)(实际值 = 16px * 1.5)
写百分比，如200%，则继承计算出来的值（考点)(继承值 = 16px * 200%)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本溢出省略" tabindex="-1"><a class="header-anchor" href="#文本溢出省略" aria-hidden="true">#</a> 文本溢出省略</h2>`,4),r={href:"https://tianyouh.github.io/summarize/css/8/",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>单行省略</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div.elli</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/*超出部分隐藏*/</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span> <span class="token comment">/*强制在一行显示*/</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> <span class="token comment">/*超出部分已省略展示*/</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>多行省略</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mutil-line-ellipsis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>CSS - 纯css实现多行文本溢出省略（兼容所有浏览器）CSS - 纯css实现多行文本溢出省略（兼容所有浏览器）CSS - 纯css实现多行文本溢出省略（兼容所有浏览器）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token comment">/* 多行 省略 测试 */</span>
    <span class="token selector">.mutil-line-ellipsis</span> <span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dfdfdf<span class="token punctuation">;</span>
      <span class="token comment">/* 增加行高调整高度 一 */</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> 
      <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.mutil-line-ellipsis:before</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token comment">/*缩小宽度为5px，其余属性不变*/</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token comment">/* 增加行高调整高度 二 */</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.mutil-line-ellipsis&gt; :first-child</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
      <span class="token comment">/*让main元素左移5px，这样main元素在宽度上就完全占满了父元素；*/</span>
      <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>

      <span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.mutil-line-ellipsis:after</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
      <span class="token comment">/*等于高度的负值，就是文字的行高*/</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token comment">/*设置margin-left。padding-right。则是为了让realend元素的盒模型的最终宽度计算为5px。*/</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -11px<span class="token punctuation">;</span>
      <span class="token property">padding-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token comment">/* W3C */</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>思路：浮动 + 定位 + 盒模型宽度 + 伪元素</p>`,4);function k(v,m){const a=p("ExternalLinkIcon");return e(),i("div",null,[u,n("p",null,[n("a",r,[l("文本溢出-示例"),c(a)])]),d])}const h=t(o,[["render",k],["__file","图文样式.html.vue"]]);export{h as default};
