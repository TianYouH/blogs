import{_ as r,M as e,p as k,q as d,R as n,N as a,V as t,t as s,a1 as l}from"./framework-8fa3e4ce.js";const m={},v=n("h1",{id:"框架",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#框架","aria-hidden":"true"},"#"),s(" 框架")],-1),b=n("h2",{id:"vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),s(" Vue")],-1),y=l('<details class="custom-container details"><summary>v-show 和 v-if 的区别？</summary><p>v-show 所有节点都会被渲染，条件不成立的节点会被添加 内联 <code>style=&quot;display: none&quot;</code> 样式隐藏。</p><p>v-if 组件真正的渲染和销毁，而不是显示或隐藏</p><p>更新不频繁选择 v-if, 频繁变化就选择 v-show</p></details><details class="custom-container details"><summary>为何 v-for 中要使用 key？</summary><p>好处：减少渲染次数，提升渲染性能。<br> 概述： 为了给 vnode 的 diff 算法一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素。</p><p>diff算法中通过 tag 和 key 来判断，是否是 sameNode。</p><p>建议尽可能在使用 v-for 时提供 key（业务唯一ID），而不是 index 或 random， 除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。</p><p>key 的特殊主要用在 Vue 的 vdom 的 diff 算法上，在新旧 nodes 对比时辨识 VNodes。<br> 如果不使用 key，它默认使用“就地更新”的策略，如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。<br> 而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。</p><blockquote><p>注：有相同父元素的子元素必须有独特的 key，重复的 key 会造成渲染错误。</p></blockquote></details>',2),g={class:"custom-container details"},h=n("summary",null,"Vue 组件如何通讯？",-1),f=n("li",null,"父子组件 props this.$emit;",-1),_=["src"],w=n("li",null,"vuex;",-1),E=l(`<details class="custom-container details"><summary>Vue 数据响应式 核心API（Vue 2.0）</summary><p>Vue 3.0 不在使用该API 改为使用 Proxy</p><p>核心 API Object.defineProperty<br> 缺点：<br> 深度监听，需要递归到底，一次性计算量大<br> 无法监听 新增属性/删除属性（Vue.set Vue.delete）<br> 无法原生监听数组，需要特殊处理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 模拟 触发更新视图
 */</span>
<span class="token keyword">function</span> <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视图更新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重新定义数组原型 [场景三]</span>
<span class="token keyword">const</span> oldArrayProperty <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型</span>
<span class="token keyword">const</span> arrProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>oldArrayProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">&quot;push&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pop&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;shift&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;unshift&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;splice&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">methodName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  arrProto<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 触发试图更新</span>
    oldArrayProperty<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 重新定义属性，监听起来
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">target</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">key</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 增加深度监听 递归 [场景一]</span>
  <span class="token function">observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token comment">// 核心 API</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 增加深度监听 递归 [场景二]</span>
        <span class="token function">observer</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>

        <span class="token comment">// 设置新值</span>
        <span class="token comment">// 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值</span>
        value <span class="token operator">=</span> newValue

        <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 监听对象属性
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">target</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不是对象或数组</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>

  <span class="token comment">// 拦截数组 将其隐式原型指向 自定义数组原型类 [场景三]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> arrProto
  <span class="token punctuation">}</span>

  <span class="token comment">// 重新定义各个属性（for in 也可以遍历数组）</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 准备数据</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tianyou&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;河南&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 监听数据</span>
<span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// 测试</span>
<span class="token comment">// data.name = &quot;huang&quot; // 视图更新</span>
<span class="token comment">// data.age = 66 // 视图更新</span>
<span class="token comment">// data.info.address = &quot;上海&quot; // [场景一]：深度监听</span>
<span class="token comment">// data.age = { num: 99 } // [场景二]：赋值对象</span>
<span class="token comment">// data.nums.push(4) // [场景三]：监听数组变化</span>

<span class="token comment">// 特殊场景</span>
data<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">666</span> <span class="token comment">// 新增属性，监听不到--所有有 Vue.set</span>
<span class="token keyword">delete</span> data<span class="token punctuation">.</span>x <span class="token comment">// 删除属性，监听不到--所有有 Vue.delete</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>双向数据绑定 v-model 的实现原理？</summary><p><code>&lt;input type=&quot;text&quot; :value=&quot;name&quot; @input=&quot;(event) =&gt; { name = event.target.value }&quot; /&gt;</code></p><ol><li>input 元素的 value 指向 this.name;</li><li>绑定 input 事件 this.name = $event.target.value;</li><li>data 更新触发 re-render;</li></ol></details><p>Vue 2.x 模板中的指令是如何解析实现的？</p><p>简要说明 Vue 2.x 的全链路运作机制？</p><p>简单介绍一下 Element UI 的框架设计？</p><p>如何理解 Vue 是一个渐进式框架？</p><p>Vue 里实现跨组件通信的方式有哪些？</p><p>Vue 中响应式数据是如何做到对某个对象的深层次属性的监听的？</p><p>基于 Vue 设计一个购物车</p><h2 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h2><p>React 组件如何通讯？</p><p>JSX 本质是什么？</p><p>context 是什么，有什么用途？</p><p>shouldComponentUpdate 的用途？</p><p>描述 redux 单项数据流。</p><p>setState 是同步还是异步？</p><p>React Class 组件有哪些周期函数？分别有什么作用？</p><p>React Class 组件中请求可以在 componentWillMount 中发起吗？为什么？</p><p>React Class 组件和 React Hook 的区别有哪些？</p><p>React 中高阶函数和自定义 Hook 的优缺点？</p><p>简要说明 React Hook 中 useState 和 useEffect 的运行原理？</p><p>React 如何发现重渲染、什么原因容易造成重渲染、如何避免重渲染？</p><p>React Hook 中 useEffect 有哪些参数，如何检测数组依赖项的变化？</p><p>React 的 useEffect 是如何监听数组依赖项的变化的？</p><p>React Hook 和闭包有什么关联关系？</p><p>React 中 useState 是如何做数据初始化的？</p><p>列举你常用的 React 性能优化技巧？</p><p>基于 React 设计一个 todolist</p><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2>`,29),V={class:"custom-container details"},q=n("summary",null,"用 JS 模拟DOM结构",-1),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("div1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("vdom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("a"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-json","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"tag"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"div"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"className"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"container"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"div1"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"children"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"tag"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"p"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"children"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vdom"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"tag"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ul"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"style"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"font-size: 20px"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"children"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"tag"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"li"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"children"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"a"'),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// ...."),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),A=n("br",null,null,-1),R={href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"},C=n("br",null,null,-1),P={href:"https://github.com/coconilu/Blog/issues/152",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,"MVVM、MVC 和 MVP 的区别是什么？各自有什么应用场景？、",-1),j=n("p",null,"谈谈 Electron、Nw.js、CEF、Flutter 和原生开发的理解？",-1),M=n("p",null,"谈谈桌面端应用中 HotFix 的理解？",-1),I=n("p",null,"你觉得什么样的场景需要使用微前端框架？",-1);function D(i,F){const p=e("RouterLink"),o=e("CodeGroupItem"),u=e("CodeGroup"),c=e("ExternalLinkIcon");return k(),d("div",null,[v,b,n("p",null,[a(p,{to:"/web/frame/vue/%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.html#%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E8%B0%83%E7%94%A8%E9%A1%BA%E5%BA%8F"},{default:t(()=>[s("描述 Vue 组件声明周期（有父子组件的情况）？")]),_:1})]),n("p",null,[a(p,{to:"/web/frame/vue/%E6%B8%B2%E6%9F%93%E5%92%8C%E6%9B%B4%E6%96%B0.html"},{default:t(()=>[s("描述组件渲染和更新的过程？")]),_:1})]),y,n("details",g,[h,n("ol",null,[f,n("li",null,[s("EventBus event.$on event.$off event.$emit; "),n("img",{src:i.$withBase("/image/web/issue/eventbus.png"),alt:"eventbus"},null,8,_)]),w])]),E,n("details",V,[q,a(u,null,{default:t(()=>[a(o,{title:"HTML"},{default:t(()=>[x]),_:1}),a(o,{title:"JS",active:""},{default:t(()=>[B]),_:1})]),_:1}),n("blockquote",null,[n("p",null,[s("ref："),A,n("a",R,[s("snabbdom 虚拟DOM库"),a(c)]),C,n("a",P,[s("snabbdom 中文文档"),a(c)])])])]),N,j,M,I])}const O=r(m,[["render",D],["__file","框架.html.vue"]]);export{O as default};
