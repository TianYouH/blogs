import{_ as a,M as t,p as i,q as p,R as n,t as s,N as l,a1 as c}from"./framework-8fa3e4ce.js";const d={},o=c(`<h1 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h1><h2 id="单位" tabindex="-1"><a class="header-anchor" href="#单位" aria-hidden="true">#</a> 单位</h2><p>px(Pixel): 相对长度单位，最常用（浏览器的默认字体高度16px）。<br> em: 相对长度单位，相对于父元素，不常用。<br> rem: 相对长度单位，相对于根元素，常用于响应式布局。 pt(Point): 绝对长度单位，物理像素单位。<br> vh: 相对于视口的高度单位。 vw: 相对于视口的宽度单位。</p><h3 id="换算" tabindex="-1"><a class="header-anchor" href="#换算" aria-hidden="true">#</a> 换算</h3><p>任意浏览器的默认字体高度16px（16像素）。</p><p>所有未经调整的浏览器都符合: 16px=1em。<br> 12px=0.75em, 10px=0.625em。</p><p>1pt = 1/72(inch),inch及英寸，而1英寸等于2.54厘米。<br> pt 和 px 的转换规则，转换公式：pt=px*3/4。比如 1024px*3/4=768pt 大小。</p><p>为了简化font-size的换算，可以在body选择器中声明font-size=62.5%，<br> 这就使rem值变为 16px*62.5%=10px，这样12px=1.2rem, 10px=1rem，<br> 也就是说只需要将你的原来的px数值除以10，然后换上rem作为单位就行了。</p><p>window.innerHeight === 100vh window.innerWidth === 100vw</p><p>1vh = 网页视口高度的1/100。<br> 1vw = 网页视口宽度的1/100。<br> vmin：当前vw和vh中较小的一个值。<br> vmax：当前vw和vh中较大的一个值。<br> vmin、vmax的作用：在做移动端页面开发时，会使得文字大小在横竖屏下保持一致。</p><h2 id="响应式布局的常用方案-rem" tabindex="-1"><a class="header-anchor" href="#响应式布局的常用方案-rem" aria-hidden="true">#</a> 响应式布局的常用方案 rem</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>屏幕密度比：

将高密度屏幕的多个设备像素当作1个像素使用

自适应：

由于各大厂商的分辨率多种多样，为了统一体验效果，使用rem/vw/vh等自适应单位。

media-query，根据不同的屏幕宽度设置根元素font-size

弊端：

&quot;阶梯&quot;性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 374px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* iphone5或者更小的尺寸，以 iphone5的宽度(320px)比例设置
font-size */</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 86px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 413px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/*iphone6/7/8和iphone x*/</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* iphone6p或者更大的尺寸，以 iphone6p 的宽度(414px)比例设置 font-size */</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 110px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css像素和物理像素" tabindex="-1"><a class="header-anchor" href="#css像素和物理像素" aria-hidden="true">#</a> CSS像素和物理像素</h2><ol><li>css像素 （逻辑像素dip）</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>CSS像素又称为逻辑像素，虚拟像素，也称为直觉像素。
CSS像素所使用的单位是px。是一个相对单位。

屏幕显示是由一个一个不连续的点组成，最小组成单位为物理像素。而在现实生活中，人肉眼看到的是一系列连续的图形，因此采用CSS像素来进行衡量。

它也被称为设备的独立像素，是web前端开发者构造的，他不是实际存在的，
在css和javascript中使用的一个抽象的层，
每一个css声明和几乎所有的javascript属性都使用css像素，

CSS像素是个相对单位，1px等于几个物理像素。
包含的越多屏幕上看的越清晰。
</code></pre></div><ol start="2"><li>物理像素</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>他也被称为设备像素，他是屏幕的物理单位，他是现实中实际存在的，
任何带有屏幕的设备都是有像素组成的，他的像素是在出厂的时候是已经设置好的。

在iOS设备上，\`screen.width\`的值为dip
在安卓以及Windows Phone设备上，\`screen.width\`的值为物理像素
</code></pre></div><p>设备像素比（DPR）</p><div class="language-text" data-ext="text"><pre class="language-text"><code>设备像素比 dpr ，全名device pixel ratio ，即物理像素与逻辑的像素的比

window.devicePixelRatio指的是设备物理像与逻辑的像素的比

DPR = 物理像素(设备像素) / 逻辑像素(CSS像素)
</code></pre></div><p>像素密度（屏幕密度PPI）</p><div class="language-text" data-ext="text"><pre class="language-text"><code>每单位英寸上像素的数量，PPI的值越高，表示一定尺寸的屏幕上像素数量越多，也即同一尺寸下，  
PPI增加了N倍，物理像素会增加n2倍，同时每个物理像素的大小会缩小1/n2倍。

PPI = 根号下 (x2+y2)/ 屏幕尺寸 其中x*y为屏幕分辨率
</code></pre></div><p>单位为inch（英寸），是一个长度单位，且1 inch = 2.54cm</p><table><thead><tr><th>设备</th><th>逻辑像素(px)</th><th>设备物理像素</th><th style="text-align:center;">设备像素比(DPR)</th><th style="text-align:center;">屏幕尺寸(英寸)</th><th style="text-align:center;">屏幕密度(PPI)</th></tr></thead><tbody><tr><td>iphone 4</td><td>320*480</td><td>640*960</td><td style="text-align:center;">2</td><td style="text-align:center;">3.5</td><td style="text-align:center;">326</td></tr><tr><td>iphone 6</td><td>375*667</td><td>750*1334</td><td style="text-align:center;">2</td><td style="text-align:center;">4.7</td><td style="text-align:center;">326</td></tr></tbody></table>`,24),r=n("br",null,null,-1),u={href:"https://blog.csdn.net/aiolos1111/article/details/51880223",target:"_blank",rel:"noopener noreferrer"};function v(h,m){const e=t("ExternalLinkIcon");return i(),p("div",null,[o,n("blockquote",null,[n("p",null,[s("ref："),r,n("a",u,[s("移动端web页面知识小结之像素、物理像素、逻辑像素"),l(e)])])])])}const k=a(d,[["render",v],["__file","响应式.html.vue"]]);export{k as default};
