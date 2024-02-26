import{_ as p,M as i,p as c,q as o,R as n,t as a,N as e,a1 as t}from"./framework-8fa3e4ce.js";const l={},r=t(`<h1 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h1><h2 id="盒模型宽度计算" tabindex="-1"><a class="header-anchor" href="#盒模型宽度计算" aria-hidden="true">#</a> 盒模型宽度计算</h2><details class="custom-container details"><summary>盒模型宽度计算</summary><p>offsetWidth = (内容宽度＋内边距＋边框)，无外边距；</p></details><h2 id="margin-纵向重叠问题" tabindex="-1"><a class="header-anchor" href="#margin-纵向重叠问题" aria-hidden="true">#</a> margin 纵向重叠问题</h2><details class="custom-container details"><summary>margin 纵向重叠问题</summary><p>相邻元素的 margin-top 和 margin-bottom 会发生重叠，已最大值优先；<br> 空白内容的<code>&lt;p&gt;&lt;/p&gt;</code>也会重叠；</p></details><h2 id="margin-负值问题" tabindex="-1"><a class="header-anchor" href="#margin-负值问题" aria-hidden="true">#</a> margin 负值问题</h2><details class="custom-container details"><summary>margin 负值问题</summary><p>margin-top 和 margin-left 负值，元素向上、向左移动；<br> margin-right 负值，右侧元素左移，自身不受影响；<br> margin-bottom 负值，下方元素上移，自身不受影响；</p></details><h2 id="bfc理解与应用" tabindex="-1"><a class="header-anchor" href="#bfc理解与应用" aria-hidden="true">#</a> BFC理解与应用</h2><details class="custom-container details"><summary>BFC理解与应用</summary><p>理解</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Block format context，块级格式化上下文；
一块独立渲染区域，内部元素的渲染不会影响边界以外的元素；
</code></pre></div><p>应用</p><div class="language-text" data-ext="text"><pre class="language-text"><code>清除浮动；
</code></pre></div></details><h2 id="重排和重绘" tabindex="-1"><a class="header-anchor" href="#重排和重绘" aria-hidden="true">#</a> 重排和重绘</h2><details class="custom-container details"><summary>重排和重绘</summary><p>重排（Reflow）</p><div class="language-text" data-ext="text"><pre class="language-text"><code>当涉及到DOM节点的布局属性发生变化时，就会重新计算该属性，浏览器会重新描绘相应的元素，
此过程叫 回流（Reflow）。
</code></pre></div><p>重绘（Repaint）</p><div class="language-text" data-ext="text"><pre class="language-text"><code>当影响DOM元素可见性的属性发生变化 (如 color) 时, 浏览器会重新描绘相应的元素, 
此过程称为 重绘（Repaint)。因此重排必然会引起重绘。
</code></pre></div><p>引起Repaint和Reflow的一些操作</p><div class="language-text" data-ext="text"><pre class="language-text"><code>1. 调整窗口大小
2. 字体大小
3. 样式表变动
4. 元素内容变化，尤其是输入控件
5. CSS伪类激活，在用户交互过程中发生
6. DOM操作，DOM元素增删、修改
7. width, clientWidth, scrollTop等布局宽高的计算
</code></pre></div><p>这些引起回流的操作中，6和7是和JavaScript相关的，所以开发人员应该注意2点：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>避免大量的DOM操作  
避免过多DOM布局属性的计算  
</code></pre></div><blockquote><p>注：display:none 会触发 reflow，而 visibility:hidden 只会触发 repaint，因为没有发生位置变化。</p></blockquote><p>如何避免过多的Repaint和Reflow？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> s <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">;</span> 
s<span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token string">&quot;2px&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 回流+重绘</span>
s<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&quot;1px solid red&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 再一次 回流+重绘</span>
s<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 再一次重绘</span>
s<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&quot;#ccc&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 再一次 重绘</span>
s<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">&quot;14px&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 再一次 回流+重绘</span>
<span class="token comment">// 添加node，再一次 回流+重绘</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&#39;abc!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Repaint和Reflow是不可避免的，只能说对性能的影响减到最小，给出下面几条建议：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 避免逐条更改样式。建议集中修改样式，例如操作className。
2. 避免频繁操作DOM。创建一个documentFragment或div，在它上面应用所有DOM操作，最后添加到文档里。设置display:none的元素上操作，最后显示出来。
3. 避免频繁读取元素几何属性（例如scrollTop）。
4. 绝对定位具有复杂动画的元素。绝对定位使它脱离文档流，避免引起父元素及后续元素大量的回流
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="如何实现圣杯布局和双飞翼布局" tabindex="-1"><a class="header-anchor" href="#如何实现圣杯布局和双飞翼布局" aria-hidden="true">#</a> 如何实现圣杯布局和双飞翼布局</h3>`,13),u={href:"https://tianyouh.github.io/summarize/css/19/%E5%8F%8C%E9%A3%9E%E7%BF%BC%E5%B8%83%E5%B1%80.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://tianyouh.github.io/summarize/css/19/%E5%9C%A3%E6%9D%AF%E5%B8%83%E5%B1%80.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-text" data-ext="text"><pre class="language-text"><code>目的：
三栏布局，中间一栏最先加载和渲染（内容最重要)；
两侧内容固定，中间内容随着宽度自适应；
一般用于PC网页；
技术总结：
使用float布局；
两侧使用margin负值，以便和中间内容横向重叠；
防止中间内容被两侧覆盖，一个用padding一个用margin；
</code></pre></div><h3 id="手写clearfix" tabindex="-1"><a class="header-anchor" href="#手写clearfix" aria-hidden="true">#</a> 手写clearfix</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* 兼容 IE 低版本 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-实现一个三点的色子" tabindex="-1"><a class="header-anchor" href="#flex-实现一个三点的色子" aria-hidden="true">#</a> flex 实现一个三点的色子</h3>`,4),v={href:"https://tianyouh.github.io/summarize/css/20/",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* flex 画三个点的骰子 */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 背景色，大小，边框 */</span>
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 第二项居中对齐 */</span>
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(3)</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span> <span class="token comment">/* 第三项尾对齐 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现水平垂直居中" tabindex="-1"><a class="header-anchor" href="#实现水平垂直居中" aria-hidden="true">#</a> 实现水平垂直居中</h3>`,2),h={href:"https://tianyouh.github.io/summarize/css/21/",target:"_blank",rel:"noopener noreferrer"},b=t(`<ol><li>absolute元素: top, left, bottom, right = 0 + margin: auto;</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.child1</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>absolute元素: top, left = 50% + translate(-50%, -50%);</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.child2</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>flex父元素: justify-content: center; + align-items: center;</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box3</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(x,f){const s=i("ExternalLinkIcon");return c(),o("div",null,[r,n("p",null,[n("a",u,[a("双飞翼-示例"),e(s)]),n("a",d,[a("圣杯-示例"),e(s)])]),m,n("p",null,[n("a",v,[a("三色筛子-示例"),e(s)])]),k,n("p",null,[n("a",h,[a("水平垂直-示例"),e(s)])]),b])}const _=p(l,[["render",g],["__file","布局.html.vue"]]);export{_ as default};
