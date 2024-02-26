import{_ as e,M as t,p as o,q as l,R as n,t as s,N as p,a1 as i}from"./framework-8fa3e4ce.js";const c={},u=i(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h1><p>JavaScript是一种专为与网页交互而设计的脚本语言，由下列三个不同的部分组成：</p><ul><li>ECAMScript，由ECAM-262定义，提供核心语言功能；</li><li>文档对象模型（DOM），提供访问和操作网页内容的方法和接口；</li><li>浏览器对象模型（BOM），提供与浏览器交互的方法和接口；</li></ul><h2 id="七种基本类型" tabindex="-1"><a class="header-anchor" href="#七种基本类型" aria-hidden="true">#</a> 七种基本类型</h2><ul><li>布尔值（<code>Boolean</code>），有 2 个值分别是：true 和 false.</li><li>数字（<code>Number</code>），整数或浮点数，例如： 42 或者 3.14159。</li><li>任意精度的整数 (<code>BigInt</code>) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。</li><li>字符串（<code>String</code>），字符串是一串表示文本值的字符序列，例如：&quot;Howdy&quot; 。</li><li>代表（<code>Symbol</code>）( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。</li><li>对象（<code>Object</code>、<code>Array</code>）。</li><li>null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。</li><li>undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。</li></ul><h2 id="变量类型和计算" tabindex="-1"><a class="header-anchor" href="#变量类型和计算" aria-hidden="true">#</a> 变量类型和计算</h2><ol><li>typeof 运算符</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 *识别所有值类型
 *识别函数
 *判断是否是引用类型（不可再细分)
*/</span>
<span class="token keyword">typeof</span> <span class="token string">&quot;Bill&quot;</span>              <span class="token comment">// 返回 &quot;string&quot;</span>
<span class="token keyword">typeof</span> <span class="token number">3.14</span>                <span class="token comment">// 返回 &quot;number&quot;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span>                <span class="token comment">// 返回 &quot;boolean&quot;</span>
<span class="token keyword">typeof</span> <span class="token boolean">false</span>               <span class="token comment">// 返回 &quot;boolean&quot;</span>
<span class="token keyword">typeof</span> x                   <span class="token comment">// 返回 &quot;undefined&quot; (假如 x 没有值)</span>

<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Bill&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">62</span><span class="token punctuation">}</span> <span class="token comment">// 返回 &quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span>                  <span class="token comment">// 返回 &quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment">// 返回 &quot;object&quot; typeof 运算符把数组返回为 &quot;object&quot;，因为在 JavaScript 中数组即对象。</span>

<span class="token keyword">typeof</span> <span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">// 返回 &quot;function&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>字符串拼接</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//110</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">140</span> <span class="token operator">+</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &#39;14010&#39;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span> <span class="token operator">+</span> <span class="token number">140</span><span class="token punctuation">;</span> <span class="token comment">// &#39;10140&#39;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &#39;true10&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>== 运算符</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">100</span> <span class="token operator">==</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token boolean">false</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 除了== null之外，其他都一律用===，例如:</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">//相当于:</span>
<span class="token comment">// if (obj.a === null || obj.a === undefined) { }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>if 语句和逻辑运算</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>truly变量: !!a === true的变量
falsely变量: !!a === false的变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;abc&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>abc<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步和单线程" tabindex="-1"><a class="header-anchor" href="#异步和单线程" aria-hidden="true">#</a> 异步和单线程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS是单线程语言;
异步不会阻塞代码执行;
同步会阻塞代码执行;

场景：
网络请求，如ajax图片加载
定时任务，如setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>promise 加载图片</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>imf<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">regect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">图片加载失败 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> src<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js-异步" tabindex="-1"><a class="header-anchor" href="#js-异步" aria-hidden="true">#</a> JS 异步</h2><ol><li>event loop (事件循环/事件轮询)</li></ol><p>Event Loop是一个程序结构，用于等待和发送消息和事件</p><p>简单说，就是在程序中设置两个线程：一个负责程序本身的运行，称为&quot;主线程&quot;；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为&quot;Event Loop线程&quot;（可以译为&quot;消息线程&quot;）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>同步代码，一行一行放在Call Stack（调用栈） 执行

当遇到异步代码，会先“记录”下Web Apis，（等待时机定时、网络请求等)
时机到了，就移动到Callback Queue

当Call Stack为空(即同步代码执行完)
执行当前的微任务-&gt;尝试DOM渲染-&gt;Event Loop开始工作

Event Loop 轮询查找Callback Queue ，如有则移动到Call Stack 执行
然后继续轮询查找(永动机一样)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>微任务/宏任务</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>宏任务: setTimeout , setInterval , Ajax , DOM事件
微任务: Promise async/await
微任务执行时机比宏任务要早(先记住)

宏任务:DOM渲染后触发，如setTimeout
微任务:DOM渲染前触发，如Promise

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>promise 进阶</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>三种状态：
pending resolved rejected

状态的表现和变化：
pending —&gt; resolved 或 pending —&gt; rejected
状态不可逆

then和catch对状态的影响：
then正常返回resolved ，里面有报错则返回rejected
catch正常返回resolved ，里面有报错则返回rejected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>async/await</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async/await 和Promise的关系：
执行async函数，返回的是Promise对象
await相当于Promise的then
try...catch可捕获异常，代替了Promise的catch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>for...of</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for ... in ( 以及forEach for )是常规的同步遍历
for ... of 常用于异步的遍历
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,32),r=n("br",null,null,-1),d={href:"http://www.ruanyifeng.com/blog/2013/10/event_loop.html",target:"_blank",rel:"noopener noreferrer"};function v(k,m){const a=t("ExternalLinkIcon");return o(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("ref:"),r,n("a",d,[s("什么是 Event Loop？"),p(a)])])])])}const g=e(c,[["render",v],["__file","index.html.vue"]]);export{g as default};
