import{_ as a,p as e,q as t,Q as p,R as c,a1 as n}from"./framework-8fa3e4ce.js";const o={},i=n('<h1 id="外观模式-网关" tabindex="-1"><a class="header-anchor" href="#外观模式-网关" aria-hidden="true">#</a> 外观模式（网关？）</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>为子系统中的一组接口提供了一个高层接口</li><li>使用者使用找个高层接口</li></ul><p>设计原则验证</p><ul><li>不符合单一职责原则和开放封闭原则，因此谨慎使用，不可滥用</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><ul><li>去医院看病，接待员去挂号、门诊、划价、取药</li></ul>',7),l=["src"],u=n(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fn <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fn <span class="token operator">=</span> selector<span class="token punctuation">;</span>
    selector <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//调用</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>elem<span class="token punctuation">,</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#div1&quot;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>elem<span class="token punctuation">,</span> <span class="token string">&quot;click &quot;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(s,d){return e(),t("div",null,[i,p(" ![示例-9](/blogs/image/web/design-mode/示例-9.png) "),c("img",{src:s.$withBase("/image/web/design-mode/示例-9.png"),alt:"示例-9"},null,8,l),u])}const m=a(o,[["render",r],["__file","外观模式.html.vue"]]);export{m as default};
