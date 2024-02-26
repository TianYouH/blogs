import{_ as p,p as e,q as c,Q as s,R as a,a1 as t}from"./framework-8fa3e4ce.js";const o={},i=t(`<h1 id="uml-类图" tabindex="-1"><a class="header-anchor" href="#uml-类图" aria-hidden="true">#</a> UML 类图</h1><p>Unified Modeling Language统一建模语言</p><p>类图，UML包含很多种图，和本课相关的是类图</p><table><thead><tr><th>类名</th></tr></thead><tbody><tr><td>+public属性名A：类型</td></tr><tr><td>#protected属性名B：类型</td></tr><tr><td>-private属性名C：类型</td></tr><tr><td>+public方法名A(参数1,参数2):返回值类型</td></tr><tr><td>#protected方法名B(参数1，参数2):返回值类型</td></tr><tr><td>-private方法名C(参数1):返回值类型</td></tr></tbody></table><p>示例-1</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;吃饭饭&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;说话话&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=["src"],u=t(`<h2 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h2><ul><li>泛化，表示继承</li><li>关联，表示引用</li></ul><p>示例-2</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> honse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>honse <span class="token operator">=</span> honse
  <span class="token punctuation">}</span>
  <span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">extends</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> honse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> honse<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;I am A&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> honse</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> honse<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;I am B&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Honse</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">city</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> city
  <span class="token punctuation">}</span>
  <span class="token function">showCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">家在 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token keyword">let</span> aHouse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">House</span><span class="token punctuation">(</span><span class="token string">&#39;北京&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span> <span class="token punctuation">,</span> aHouse<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// a 有房子</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token string">&#39;bbb&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// b无房子</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=["src"];function k(n,r){return e(),c("div",null,[i,s(" ![示例-1](/blogs/image/web/designMode/示例-1.png) "),a("img",{src:n.$withBase("/image/web/designMode/示例-1.png"),alt:"示例-1"},null,8,l),u,s(" ![示例-2](/blogs/image/web/designMode/示例-2.png) "),a("img",{src:n.$withBase("/image/web/designMode/示例-2.png"),alt:"示例-2"},null,8,d)])}const m=p(o,[["render",k],["__file","UML类图.html.vue"]]);export{m as default};
