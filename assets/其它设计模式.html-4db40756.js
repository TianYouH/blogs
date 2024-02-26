import{_ as n,p as s,q as a,a1 as t}from"./framework-8fa3e4ce.js";const p={},e=t(`<h1 id="其它设计模式" tabindex="-1"><a class="header-anchor" href="#其它设计模式" aria-hidden="true">#</a> 其它设计模式</h1><h2 id="优先级划分依据" tabindex="-1"><a class="header-anchor" href="#优先级划分依据" aria-hidden="true">#</a> 优先级划分依据</h2><ul><li>不常用</li><li>对应不到经典的应用场景</li></ul><h2 id="创建型" tabindex="-1"><a class="header-anchor" href="#创建型" aria-hidden="true">#</a> 创建型</h2><h3 id="原型模式" tabindex="-1"><a class="header-anchor" href="#原型模式" aria-hidden="true">#</a> 原型模式</h3><p>概念</p><ul><li>clone自己，生成一个新对象;</li><li>java默认有clone接口，不用自己实现;</li></ul><p>示例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一个原型 对象</span>
<span class="token keyword">const</span> prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>first <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>last
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 基于原型创建x</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span>last <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 基于原型创建y</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
y<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">;</span>
y<span class="token punctuation">.</span>last <span class="token operator">=</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
y<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比JS中的原型prototype</p><ul><li>prototype可以理解为ES6 class的一种底层原理;</li><li>而class是实现面向对象的基础，并不是服务于某个模式;</li><li>若干年后ES6全面普及，可能会忽略掉prototype;</li><li>Object.create却会长久存在;</li></ul><h2 id="结构型" tabindex="-1"><a class="header-anchor" href="#结构型" aria-hidden="true">#</a> 结构型</h2><h3 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式" aria-hidden="true">#</a> 桥接模式</h3><p>概念</p><ul><li>用于把抽象化与实现化解耦</li><li>使得二者可以独立变化</li></ul><h3 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h3><p>概念</p><ul><li>生成树形结构，表示“整体-部分”关系;</li><li>让整体和部分都具有一致的操作方式;</li></ul><h3 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式" aria-hidden="true">#</a> 享元模式</h3><p>概念</p><ul><li>共享内存（主要考虑内存，而非效率）;</li><li>相同的数据，共享使用;</li></ul><h2 id="行为型" tabindex="-1"><a class="header-anchor" href="#行为型" aria-hidden="true">#</a> 行为型</h2><h3 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h3><p>概念</p><ul><li>不同策略分开处理;</li><li>避免出现大量if...else 或者 switch...case</li></ul><h3 id="模板方法模式" tabindex="-1"><a class="header-anchor" href="#模板方法模式" aria-hidden="true">#</a> 模板方法模式</h3><ul><li>...</li></ul><h3 id="职责链模式" tabindex="-1"><a class="header-anchor" href="#职责链模式" aria-hidden="true">#</a> 职责链模式</h3><p>概念</p><ul><li>一步操作可能分为多个职责角色来完成;</li><li>把这些角色都分开，然后用一个链串起来;</li><li>将发起者和各个处理者进行隔离;</li></ul><p>示例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 请假审批，需要组长审批、经理审批、最后总监审批</span>
<span class="token keyword">class</span> <span class="token class-name">Action</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>nextAction <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">setNextAction</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nextAction <span class="token operator">=</span> action
  <span class="token punctuation">}</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    corfsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">审批</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextAction <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextAction<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token string">&#39;组长&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token string">&#39;经理&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> a3 <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token string">&#39;总监&#39;</span><span class="token punctuation">)</span>
a1<span class="token punctuation">.</span><span class="token function">setNextAction</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span>
a2<span class="token punctuation">.</span><span class="token function">setNextAction</span><span class="token punctuation">(</span>a3<span class="token punctuation">)</span>
a1<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS中的链式操作</p><ul><li>职责链模式和业务结合较多，JS中能联想到链式操作;</li><li>jQuery的链式操作 Promise.then 的链式操作;</li></ul><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h3><p>概念</p><ul><li>执行命令时，发布者和执行者分开</li><li>中间加入命令对象，作为中转站</li></ul><p>示例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Receiver</span> <span class="token punctuation">{</span>
  <span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">receiver</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token operator">=</span> receiver<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">cmd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发命令&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Invoker</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">command</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> command
  <span class="token punctuation">}</span>
  <span class="token function">ivoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开始&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>command<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 士兵</span>
<span class="token keyword">let</span> soldier <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Receiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 小号手</span>
<span class="token keyword">let</span> trumpeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span>soldier<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将军</span>
<span class="token keyword">let</span> general <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Invoker</span><span class="token punctuation">(</span>trumpeter<span class="token punctuation">)</span><span class="token punctuation">;</span>
general<span class="token punctuation">.</span><span class="token function">ivoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS中的应用</p><ul><li>网页富文本编辑器操作，浏览器封装了一个命令对象;</li><li>document.execCommand(&#39;bold&#39;);</li><li>document.execCommand(&#39;undo&#39;);</li></ul><h3 id="备忘录模式" tabindex="-1"><a class="header-anchor" href="#备忘录模式" aria-hidden="true">#</a> 备忘录模式</h3><p>概念</p><ul><li>随时记录一个对象的状态变化</li><li>随时可以恢复之前的某个状态（如撤销功能)</li></ul><h3 id="中介者模式" tabindex="-1"><a class="header-anchor" href="#中介者模式" aria-hidden="true">#</a> 中介者模式</h3><ul><li>...</li></ul><h3 id="访问者模式" tabindex="-1"><a class="header-anchor" href="#访问者模式" aria-hidden="true">#</a> 访问者模式</h3><p>概念</p><ul><li>将数据操作和数据结构进行分离</li></ul><h3 id="解释器模式" tabindex="-1"><a class="header-anchor" href="#解释器模式" aria-hidden="true">#</a> 解释器模式</h3><p>概念</p><ul><li>描述语言语法如何定义，如何解释和编译</li></ul>`,52),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","其它设计模式.html.vue"]]);export{r as default};
