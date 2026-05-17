import{i as e,r as t,s as n,t as r}from"./app-DAdNbjbm.js";var i=JSON.parse(`{"path":"/web/base/css/%E5%93%8D%E5%BA%94%E5%BC%8F.html","title":"响应式","lang":"en-US","frontmatter":{},"git":{"updatedTime":1648388297000,"contributors":[{"name":"DESKTOP-ER5718D\\\\zt","username":"","email":"huangjinliang@zto.com","commits":2}],"changelog":[{"hash":"80715422272f4e22c5630e05e32455312ce6501a","time":1648388297000,"email":"huangjinliang@zto.com","author":"DESKTOP-ER5718D\\\\zt","message":"feat: 更新 响应式文档"},{"hash":"4e2f64e81706a3b89a114b558a63b922f24b2f88","time":1648387976000,"email":"huangjinliang@zto.com","author":"DESKTOP-ER5718D\\\\zt","message":"feat: 更新 响应式文档"}]},"filePathRelative":"web/base/css/响应式.md"}`),a={name:`响应式.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式"><span>响应式</span></a></h1><h2 id="单位" tabindex="-1"><a class="header-anchor" href="#单位"><span>单位</span></a></h2><p>px(Pixel): 相对长度单位，最常用（浏览器的默认字体高度16px）。<br> em: 相对长度单位，相对于父元素，不常用。<br> rem: 相对长度单位，相对于根元素，常用于响应式布局。 pt(Point): 绝对长度单位，物理像素单位。<br> vh: 相对于视口的高度单位。 vw: 相对于视口的宽度单位。</p><h3 id="换算" tabindex="-1"><a class="header-anchor" href="#换算"><span>换算</span></a></h3><p>任意浏览器的默认字体高度16px（16像素）。</p><p>所有未经调整的浏览器都符合: 16px=1em。<br> 12px=0.75em, 10px=0.625em。</p><p>1pt = 1/72(inch),inch及英寸，而1英寸等于2.54厘米。<br> pt 和 px 的转换规则，转换公式：pt=px*3/4。比如 1024px*3/4=768pt 大小。</p><p>为了简化font-size的换算，可以在body选择器中声明font-size=62.5%，<br> 这就使rem值变为 16px*62.5%=10px，这样12px=1.2rem, 10px=1rem，<br> 也就是说只需要将你的原来的px数值除以10，然后换上rem作为单位就行了。</p><p>window.innerHeight === 100vh window.innerWidth === 100vw</p><p>1vh = 网页视口高度的1/100。<br> 1vw = 网页视口宽度的1/100。<br> vmin：当前vw和vh中较小的一个值。<br> vmax：当前vw和vh中较大的一个值。<br> vmin、vmax的作用：在做移动端页面开发时，会使得文字大小在横竖屏下保持一致。</p><h2 id="响应式布局的常用方案-rem" tabindex="-1"><a class="header-anchor" href="#响应式布局的常用方案-rem"><span>响应式布局的常用方案 rem</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">屏幕密度比：</span>
<span class="line"></span>
<span class="line">将高密度屏幕的多个设备像素当作1个像素使用</span>
<span class="line"></span>
<span class="line">自适应：</span>
<span class="line"></span>
<span class="line">由于各大厂商的分辨率多种多样，为了统一体验效果，使用rem/vw/vh等自适应单位。</span>
<span class="line"></span>
<span class="line">media-query，根据不同的屏幕宽度设置根元素font-size</span>
<span class="line"></span>
<span class="line">弊端：</span>
<span class="line"></span>
<span class="line">&quot;阶梯&quot;性</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 374px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* iphone5或者更小的尺寸，以 iphone5的宽度(320px)比例设置</span>
<span class="line">font-size */</span></span>
<span class="line">  <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 86px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 413px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/*iphone6/7/8和iphone x*/</span></span>
<span class="line">  <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* iphone6p或者更大的尺寸，以 iphone6p 的宽度(414px)比例设置 font-size */</span></span>
<span class="line">  <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 110px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css像素和物理像素" tabindex="-1"><a class="header-anchor" href="#css像素和物理像素"><span>CSS像素和物理像素</span></a></h2><ol><li>css像素 （逻辑像素dip）</li></ol><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">CSS像素又称为逻辑像素，虚拟像素，也称为直觉像素。</span>
<span class="line">CSS像素所使用的单位是px。是一个相对单位。</span>
<span class="line"></span>
<span class="line">屏幕显示是由一个一个不连续的点组成，最小组成单位为物理像素。而在现实生活中，人肉眼看到的是一系列连续的图形，因此采用CSS像素来进行衡量。</span>
<span class="line"></span>
<span class="line">它也被称为设备的独立像素，是web前端开发者构造的，他不是实际存在的，</span>
<span class="line">在css和javascript中使用的一个抽象的层，</span>
<span class="line">每一个css声明和几乎所有的javascript属性都使用css像素，</span>
<span class="line"></span>
<span class="line">CSS像素是个相对单位，1px等于几个物理像素。</span>
<span class="line">包含的越多屏幕上看的越清晰。</span>
<span class="line"></span></code></pre></div><ol start="2"><li>物理像素</li></ol><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">他也被称为设备像素，他是屏幕的物理单位，他是现实中实际存在的，</span>
<span class="line">任何带有屏幕的设备都是有像素组成的，他的像素是在出厂的时候是已经设置好的。</span>
<span class="line"></span>
<span class="line">在iOS设备上，\`screen.width\`的值为dip</span>
<span class="line">在安卓以及Windows Phone设备上，\`screen.width\`的值为物理像素</span>
<span class="line"></span></code></pre></div><p>设备像素比（DPR）</p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">设备像素比 dpr ，全名device pixel ratio ，即物理像素与逻辑的像素的比</span>
<span class="line"></span>
<span class="line">window.devicePixelRatio指的是设备物理像与逻辑的像素的比</span>
<span class="line"></span>
<span class="line">DPR = 物理像素(设备像素) / 逻辑像素(CSS像素)</span>
<span class="line"></span></code></pre></div><p>像素密度（屏幕密度PPI）</p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">每单位英寸上像素的数量，PPI的值越高，表示一定尺寸的屏幕上像素数量越多，也即同一尺寸下，  </span>
<span class="line">PPI增加了N倍，物理像素会增加n2倍，同时每个物理像素的大小会缩小1/n2倍。</span>
<span class="line"></span>
<span class="line">PPI = 根号下 (x2+y2)/ 屏幕尺寸 其中x*y为屏幕分辨率</span>
<span class="line"></span></code></pre></div><p>单位为inch（英寸），是一个长度单位，且1 inch = 2.54cm</p><table><thead><tr><th>设备</th><th>逻辑像素(px)</th><th>设备物理像素</th><th style="text-align:center;">设备像素比(DPR)</th><th style="text-align:center;">屏幕尺寸(英寸)</th><th style="text-align:center;">屏幕密度(PPI)</th></tr></thead><tbody><tr><td>iphone 4</td><td>320*480</td><td>640*960</td><td style="text-align:center;">2</td><td style="text-align:center;">3.5</td><td style="text-align:center;">326</td></tr><tr><td>iphone 6</td><td>375*667</td><td>750*1334</td><td style="text-align:center;">2</td><td style="text-align:center;">4.7</td><td style="text-align:center;">326</td></tr></tbody></table><blockquote><p>ref：<br><a href="https://blog.csdn.net/aiolos1111/article/details/51880223" target="_blank" rel="noopener noreferrer">移动端web页面知识小结之像素、物理像素、逻辑像素</a></p></blockquote>`,25)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};