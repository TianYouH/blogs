import{_ as i,M as a,p as d,q as r,R as e,t as s,N as l,a1 as t}from"./framework-8fa3e4ce.js";const o={},c=t('<h1 id="定位-position" tabindex="-1"><a class="header-anchor" href="#定位-position" aria-hidden="true">#</a> 定位 Position</h1><h2 id="定位类型" tabindex="-1"><a class="header-anchor" href="#定位类型" aria-hidden="true">#</a> 定位类型</h2><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>relative</td><td>相对定位 元素的定位是相对其正常位置。</td></tr><tr><td>absolute</td><td>绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<code>&lt;html&gt;</code>。</td></tr><tr><td>fixed</td><td>元素的位置相对于浏览器窗口是固定位置(即使窗口是滚动的它也不会移动)。</td></tr><tr><td>sticky</td><td>粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。</td></tr><tr><td>static</td><td>HTML 元素的默认值，即没有定位，遵循正常的文档流对象(静态定位的元素不会受到 top, bottom, left, right影响)。</td></tr></tbody></table><h2 id="居中对齐的实现方式" tabindex="-1"><a class="header-anchor" href="#居中对齐的实现方式" aria-hidden="true">#</a> 居中对齐的实现方式</h2>',4),h={href:"https://tianyouh.github.io/summarize/css/21/",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>水平居中：
inline元素:text-align: center；
block元素:margin: auto；
absolute元素:left: 50% + margin-left负值；

垂直居中：
inline元素: line-height的值等于height值；
absolute元素: top: 50% + margin-top负值；

水平垂直居中：
flex父元素：justify-content: center; + align-items: center;
absolute元素: top, left = 50% + translate(-50%, -50%);
absolute元素: top, left, bottom, right = 0 + margin: auto;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,b){const n=a("ExternalLinkIcon");return d(),r("div",null,[c,e("p",null,[e("a",h,[s("水平垂直-示例"),l(n)])]),u])}const f=i(o,[["render",v],["__file","定位.html.vue"]]);export{f as default};
