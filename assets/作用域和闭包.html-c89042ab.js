import{_ as i,M as e,p as l,q as u,R as n,t as s,N as a,V as r,a1 as o}from"./framework-8fa3e4ce.js";const d={},k=o(`<h1 id="作用域和闭包" tabindex="-1"><a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a> 作用域和闭包</h1><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>全局作用域<br> 函数作用域<br> 块级作用域(ES6 新增)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//ES6 块级作用域</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this取什么值，是在函数执行时确定的，不是在函数定义时确定的；

this的不同应用场景，如何取值：

当做普通函数被调用      window
使用call apply bind   传什么绑定什么
作为对象方法调用        对象本身
在class方法中调用      实例本身
箭头函数              取值是取上级作用域的this.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h3><p>当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。</p>`,8),v=["src"],m=n("ul",null,[n("li",null,"AO：Activive Object，即函数的活动对象。"),n("li",null,"VO：Variable Object，即变量对象。")],-1),b=n("p",null,"AO 和 VO 的关系：",-1),h=n("p",null,"AO 可以理解为 VO 的一个实例，也就是 VO 是一个构造函数，然后 VO(Context) === AO，所以 VO 提供的是一个函数中所有变量数据的模板。",-1),y=["src"],g=o(`<details class="custom-container details"><summary>函数执行上下文中作用域链和变量对象的创建过程</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]]</span>
checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    globalContext<span class="token punctuation">.</span><span class="token constant">VO</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 2.执行 checkscope 函数，创建 checkscope 函数执行上下文，</span>
<span class="token comment">//   checkscope 函数执行上下文被压入执行上下文栈</span>
ECStack <span class="token operator">=</span> <span class="token punctuation">[</span>
    checkscopeContext<span class="token punctuation">,</span>
    globalContext
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 3.checkscope 函数并不立刻执行，开始做准备工作，</span>
<span class="token comment">//   第一步：复制函数[[scope]]属性创建作用域链</span>
checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4.第二步：用 arguments 创建活动对象，</span>
<span class="token comment">//   随后初始化活动对象，加入形参、函数声明、变量声明</span>
checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scope2</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>，
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 5.第三步：将活动对象压入 checkscope 作用域链顶端</span>
checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scope2</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值</span>
checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scope2</span><span class="token operator">:</span> <span class="token string">&#39;local scope&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出</span>
ECStack <span class="token operator">=</span> <span class="token punctuation">[</span>
    globalContext
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><p>闭包是指那些能够访问自由变量的函数。</p><p>闭包 = 函数 + 函数能够访问的自由变量</p><p>闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找 不是在执行的地方!!!</p><p>作用域应用的特殊情况，有两种表现：</p><ol><li>函数作为参数被传递</li><li>函数作为返回值被返回</li></ol><p>ECMAScript中，闭包指的是：</p><ul><li>从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。</li><li>从实践角度：以下函数才算是闭包： 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回） 在代码中引用了自由变量</li></ul><details class="custom-container details"><summary>示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 答案是都是 3，让我们分析一下原因：</span>

<span class="token comment">// 当执行到 data[0] 函数之前，此时全局上下文的 VO 为：</span>
globalContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">VO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当执行 data[0] 函数的时候，data[0] 函数的作用域链为：</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>Context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> globalContext<span class="token punctuation">.</span><span class="token constant">VO</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 data[0]Context 的 AO 并没有 i 值，所以会从 globalContext.VO 中查找，i 为 3，
 所以打印的结果就是 3。

 data[1] 和 data[2] 是一样的道理。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以让我们改成闭包看看：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当执行到 data[0] 函数之前，此时全局上下文的 VO 为：</span>
globalContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">VO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 跟没改之前一模一样。</span>

<span class="token comment">// 当执行 data[0] 函数的时候，data[0] 函数的作用域链发生了改变：</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>Context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> 匿名函数Context<span class="token punctuation">.</span><span class="token constant">AO</span> globalContext<span class="token punctuation">.</span><span class="token constant">VO</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 匿名函数执行上下文的AO为：</span>
匿名函数Context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token number">0</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
 data[0]Context 的 AO 并没有 i 值，所以会沿着作用域链从匿名函数 Context.AO 中查找，
 这时候就会找 i 为 0，找到了就不会往 globalContext.VO 中查找了，
 即使 globalContext.VO 也有 i 的值(值为3)，所以打印的结果就是0。

 data[1] 和 data[2] 是一样的道理。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="自由变量" tabindex="-1"><a class="header-anchor" href="#自由变量" aria-hidden="true">#</a> 自由变量</h3><p>自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。</p><p>一个变量在当前作用域没有定义，但被使用了,向上级作用域，一层一层依次寻找，直至找到为止<br> 如果到全局作用域都没找到，则报错 xx is not defined</p><h3 id="实际开发中闭包的应用" tabindex="-1"><a class="header-anchor" href="#实际开发中闭包的应用" aria-hidden="true">#</a> 实际开发中闭包的应用</h3><p>闭包隐藏数据,只提供 API</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 闭包中的数据，被隐藏，不被外界访问</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),f={href:"https://github.com/mqyqingfeng/Blog/issues/6",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zhuanlan.zhihu.com/p/200910488",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/Ancecis/article/details/104382441",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/mqyqingfeng/Blog/issues/9",target:"_blank",rel:"noopener noreferrer"};function w(p,C){const c=e("RouterLink"),t=e("ExternalLinkIcon");return l(),u("div",null,[k,n("img",{src:p.$withBase("/image/web/javascript/作用域.jpg"),alt:"图片"},null,8,v),m,b,h,n("img",{src:p.$withBase("/image/web/javascript/作用域2.png"),alt:"图片"},null,8,y),g,n("p",null,[s("手写 bind 函数 "),a(c,{to:"/web/knowledge/%E5%B8%B8%E7%94%A8%E6%89%8B%E5%86%99%E5%87%BD%E6%95%B0.html#bind-%E6%89%8B%E5%86%99"},{default:r(()=>[s("链接")]),_:1})]),n("p",null,[s("参考文章："),n("a",f,[s("JavaScript 深入之作用域链"),a(t)]),s(),n("a",x,[s("图解 Javascript 中的 VO，AO，作用域"),a(t)]),s(),n("a",_,[s("浅谈 js 执行的 AO/VO"),a(t)]),s(),n("a",O,[s("JavaScript深入之闭包"),a(t)])])])}const V=i(d,[["render",w],["__file","作用域和闭包.html.vue"]]);export{V as default};
