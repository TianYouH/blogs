import{_ as c,M as i,p,q as u,N as a,V as e,a1 as l,R as n,t as s}from"./framework-8fa3e4ce.js";const r={},d=l('<h1 id="模板编译" tabindex="-1"><a class="header-anchor" href="#模板编译" aria-hidden="true">#</a> 模板编译</h1><p>模板不是 html , 有指令、插值、JS表达式，能实现判断循环，html 是标签语言，只有 JS 才能实现判断、循环（图灵完备的），因此，模板一定是转换为某种 JS 代码，既<strong>模板编译</strong>。</p><p>使用 webpack vue-loader ,会在开发环境下编译模板。</p><h2 id="模板编译前置知识点-with" tabindex="-1"><a class="header-anchor" href="#模板编译前置知识点-with" aria-hidden="true">#</a> 模板编译前置知识点-with</h2><ul><li>改变 {} 内自由变量的查找规则，当做 obj 属性来查找。</li><li>如果找不到匹配的 obj 属性，就会报错。</li><li>with 要慎用，它打破了作用域规则，易读性变差。</li></ul>',5),m=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"with"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 会报错 ！"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"a"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"b"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),s(),n("span",{class:"token punctuation"},"}"),s(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},"."),s("a"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},"."),s("b"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},"."),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// undefined"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=l(`<h2 id="模板转换为js" tabindex="-1"><a class="header-anchor" href="#模板转换为js" aria-hidden="true">#</a> 模板转换为JS</h2><p>模板编译为 render 函数，执行 render 函数返回 vnode, 基于vnode再执行patch和diff。</p><p>依赖库：vue-template-compiler@2.6.14（vue 2.0）</p><details class="custom-container details"><summary>测试</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-template-compiler&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 插值</span>
<span class="token comment">// const template = \`&lt;p&gt;{{ message }}&lt;/p&gt;\`;</span>
<span class="token comment">// with(this){return _c(&#39;p&#39;,[_v(_s(message))])}</span>

<span class="token comment">// 表达式</span>
<span class="token comment">// const template = \`&lt;p&gt;{{ flag ? message : &#39;no message found&#39; }}&lt;/p&gt;\`;</span>
<span class="token comment">// with(this){return _c(&#39;p&#39;,[_v(_s(flag ? message : &#39;no message found&#39;))])}</span>

<span class="token comment">// 属性和动态属性</span>
<span class="token comment">// const template = \`</span>
<span class="token comment">//   &lt;div id=&quot;div1&quot; class=&quot;container&quot; &gt;</span>
<span class="token comment">//     &lt;img :src=&quot;imgUrl&quot; /&gt;</span>
<span class="token comment">//   &lt;/div&gt;</span>
<span class="token comment">// \`;</span>
<span class="token comment">// with(this){return _c(&#39;div&#39;,{staticClass:&quot;container&quot;,attrs:{&quot;id&quot;:&quot;div1&quot;}},[_c(&#39;img&#39;,{attrs:{&quot;src&quot;:imgUrl}})])}</span>

<span class="token comment">// 条件</span>
<span class="token comment">// const template = \`</span>
<span class="token comment">//   &lt;div&gt;</span>
<span class="token comment">//     &lt;p v-if=&quot;flag === &#39;a&#39;&quot; &gt;A&lt;/p&gt;</span>
<span class="token comment">//     &lt;p v-else &gt;B&lt;/p&gt;</span>
<span class="token comment">//   &lt;/div&gt;</span>
<span class="token comment">// \`;</span>
<span class="token comment">// with(this){return _c(&#39;div&#39;,[(flag === &#39;a&#39;)?_c(&#39;p&#39;,[_v(&quot;A&quot;)]):_c(&#39;p&#39;,[_v(&quot;B&quot;)])])}</span>

<span class="token comment">// 循环</span>
<span class="token comment">// const template = \`</span>
<span class="token comment">//   &lt;ul&gt;</span>
<span class="token comment">//     &lt;li v-for=&quot;item in list&quot; :key=&quot;item.id&quot; &gt;{{ item.title }}&lt;/li&gt;</span>
<span class="token comment">//   &lt;/ul&gt;</span>
<span class="token comment">// \`;</span>
<span class="token comment">// with(this){return _c(&#39;ul&#39;,_l((list),function(item){return _c(&#39;li&#39;,{key:item.id},[_v(_s(item.title))])}),0)}</span>

<span class="token comment">// 事件</span>
<span class="token comment">// const template = \`&lt;button @click=&quot;clickHandler&quot; &gt;submit&lt;/button&gt;\`;</span>
<span class="token comment">// with(this){return _c(&#39;button&#39;,{on:{&quot;click&quot;:clickHandler}},[_v(&quot;submit&quot;)])}</span>

<span class="token comment">// v-model</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;input type=&quot;text&quot; v-model=&quot;name&quot; &gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// 主要看 input 事件</span>
<span class="token comment">// with(this){return _c(&#39;input&#39;,{directives:[{name:&quot;model&quot;,rawName:&quot;v-model&quot;,value:(name),expression:&quot;name&quot;}],attrs:{&quot;type&quot;:&quot;text&quot;},domProps:{&quot;value&quot;:(name)},on:{&quot;input&quot;:function($event){if($event.target.composing)return;name=$event.target.value}}})}</span>

<span class="token comment">// 编译</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> compiler<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * vue 源码中找到缩写函数含义 渲染辅助函数（installRenderHelpers）
 * 
 target._o = markOnce  一次性渲染节点  
 target._n = toNumber   转换数值  
 target._s = toString   转换为字符串类型  
 target._l = renderList    渲染v-for指令  
 target._t = renderSlot   处理slot  
 target._q = looseEqual   判断两个变量是否相等  
 target._i = looseIndexOf   判断数组是否存在某值，并返回索引  
 target._m = renderStatic   渲染静态节点树  
 target._f = resolveFilter   处理filters过滤器  
 target._k = checkKeyCodes   检查config的keyCodes  
 target._b = bindObjectProps   处理v-bind指令  
 target._v = createTextVNode   创建文本vnode  
 target._e = createEmptyVNode   创建空vnode  
 target._u = resolveScopedSlots   处理slot  
 target._g = bindObjectListeners   处理v-on指令  
 target._d = bindDynamicKeys   绑定event、props  
 target._p = prependModifier 处理绑定事件修饰符  

 _c = createElement
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="vue-组件中使用-render-代替-template" tabindex="-1"><a class="header-anchor" href="#vue-组件中使用-render-代替-template" aria-hidden="true">#</a> vue 组件中使用 render 代替 template</h2><p>在有些复杂情况中，不能用 template , 可以考虑用 render,<br> 对比react一直都用 render(没有模板)，和下方示例一样。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;heading&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// template: \`xxx\`</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
      <span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;headerId&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;headerId&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;this is a tag&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(g,_){const t=i("CodeGroupItem"),o=i("CodeGroup");return p(),u("div",null,[d,a(o,null,{default:e(()=>[a(t,{title:"with"},{default:e(()=>[m]),_:1}),a(t,{title:"other",active:""},{default:e(()=>[v]),_:1})]),_:1}),k])}const q=c(r,[["render",b],["__file","模板编译.html.vue"]]);export{q as default};
