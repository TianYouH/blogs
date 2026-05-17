import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./app-DAdNbjbm.js";var l=JSON.parse(`{"path":"/web/frame/vue/%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91.html","title":"模板编译","lang":"en-US","frontmatter":{},"git":{"updatedTime":1647263903000,"contributors":[{"name":"DESKTOP-ER5718D\\\\zt","username":"","email":"huangjinliang@zto.com","commits":1}],"changelog":[{"hash":"fec9e834a5a6d468ae189b6ae0b66ce904bd69b9","time":1647263903000,"email":"huangjinliang@zto.com","author":"DESKTOP-ER5718D\\\\zt","message":"feat: 更新 vue 模板编译知识点"}]},"filePathRelative":"web/frame/vue/模板编译.md"}`),u={name:`模板编译.md`};function d(c,l,u,d,f,p){let m=t(`CodeGroupItem`),h=t(`CodeGroup`);return s(),o(`div`,null,[l[2]||=n(`<h1 id="模板编译" tabindex="-1"><a class="header-anchor" href="#模板编译"><span>模板编译</span></a></h1><p>模板不是 html , 有指令、插值、JS表达式，能实现判断循环，html 是标签语言，只有 JS 才能实现判断、循环（图灵完备的），因此，模板一定是转换为某种 JS 代码，既<strong>模板编译</strong>。</p><p>使用 webpack vue-loader ,会在开发环境下编译模板。</p><h2 id="模板编译前置知识点-with" tabindex="-1"><a class="header-anchor" href="#模板编译前置知识点-with"><span>模板编译前置知识点-with</span></a></h2><ul><li>改变 {} 内自由变量的查找规则，当做 obj 属性来查找。</li><li>如果找不到匹配的 obj 属性，就会报错。</li><li>with 要慎用，它打破了作用域规则，易读性变差。</li></ul>`,5),a(h,null,{default:r(()=>[a(m,{title:`with`},{default:r(()=>[...l[0]||=[i(`div`,{class:`language-javascript line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`js`},[i(`pre`,null,[i(`code`,{class:`language-javascript`},[i(`span`,{class:`line`},[i(`span`,{class:`token keyword`},`with`),e(),i(`span`,{class:`token punctuation`},`(`),e(`obj`),i(`span`,{class:`token punctuation`},`)`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  console`),i(`span`,{class:`token punctuation`},`.`),i(`span`,{class:`token function`},`log`),i(`span`,{class:`token punctuation`},`(`),e(`a`),i(`span`,{class:`token punctuation`},`)`)]),e(`
`),i(`span`,{class:`line`},[e(`  console`),i(`span`,{class:`token punctuation`},`.`),i(`span`,{class:`token function`},`log`),i(`span`,{class:`token punctuation`},`(`),e(`b`),i(`span`,{class:`token punctuation`},`)`)]),e(`
`),i(`span`,{class:`line`},[e(`  console`),i(`span`,{class:`token punctuation`},`.`),i(`span`,{class:`token function`},`log`),i(`span`,{class:`token punctuation`},`(`),e(`c`),i(`span`,{class:`token punctuation`},`)`),e(),i(`span`,{class:`token comment`},`// 会报错 ！`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),_:1}),a(m,{title:`other`,active:``},{default:r(()=>[...l[1]||=[i(`div`,{class:`language-javascript line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`js`},[i(`pre`,null,[i(`code`,{class:`language-javascript`},[i(`span`,{class:`line`},[i(`span`,{class:`token keyword`},`const`),e(` obj `),i(`span`,{class:`token operator`},`=`),e(),i(`span`,{class:`token punctuation`},`{`),e(),i(`span`,{class:`token literal-property property`},`a`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`100`),i(`span`,{class:`token punctuation`},`,`),e(),i(`span`,{class:`token literal-property property`},`b`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`200`),e(),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`}),e(`
`),i(`span`,{class:`line`},[e(`console`),i(`span`,{class:`token punctuation`},`.`),i(`span`,{class:`token function`},`log`),i(`span`,{class:`token punctuation`},`(`),e(`obj`),i(`span`,{class:`token punctuation`},`.`),e(`a`),i(`span`,{class:`token punctuation`},`)`)]),e(`
`),i(`span`,{class:`line`},[e(`console`),i(`span`,{class:`token punctuation`},`.`),i(`span`,{class:`token function`},`log`),i(`span`,{class:`token punctuation`},`(`),e(`obj`),i(`span`,{class:`token punctuation`},`.`),e(`b`),i(`span`,{class:`token punctuation`},`)`)]),e(`
`),i(`span`,{class:`line`},[e(`console`),i(`span`,{class:`token punctuation`},`.`),i(`span`,{class:`token function`},`log`),i(`span`,{class:`token punctuation`},`(`),e(`obj`),i(`span`,{class:`token punctuation`},`.`),e(`c`),i(`span`,{class:`token punctuation`},`)`),e(),i(`span`,{class:`token comment`},`// undefined`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),_:1})]),_:1}),l[3]||=n(`<h2 id="模板转换为js" tabindex="-1"><a class="header-anchor" href="#模板转换为js"><span>模板转换为JS</span></a></h2><p>模板编译为 render 函数，执行 render 函数返回 vnode, 基于vnode再执行patch和diff。</p><p>依赖库：vue-template-compiler@2.6.14（vue 2.0）</p><details class="hint-container details"><summary>测试</summary><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-template-compiler&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 插值</span></span>
<span class="line"><span class="token comment">// const template = \`&lt;p&gt;{{ message }}&lt;/p&gt;\`;</span></span>
<span class="line"><span class="token comment">// with(this){return _c(&#39;p&#39;,[_v(_s(message))])}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 表达式</span></span>
<span class="line"><span class="token comment">// const template = \`&lt;p&gt;{{ flag ? message : &#39;no message found&#39; }}&lt;/p&gt;\`;</span></span>
<span class="line"><span class="token comment">// with(this){return _c(&#39;p&#39;,[_v(_s(flag ? message : &#39;no message found&#39;))])}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 属性和动态属性</span></span>
<span class="line"><span class="token comment">// const template = \`</span></span>
<span class="line"><span class="token comment">//   &lt;div id=&quot;div1&quot; class=&quot;container&quot; &gt;</span></span>
<span class="line"><span class="token comment">//     &lt;img :src=&quot;imgUrl&quot; /&gt;</span></span>
<span class="line"><span class="token comment">//   &lt;/div&gt;</span></span>
<span class="line"><span class="token comment">// \`;</span></span>
<span class="line"><span class="token comment">// with(this){return _c(&#39;div&#39;,{staticClass:&quot;container&quot;,attrs:{&quot;id&quot;:&quot;div1&quot;}},[_c(&#39;img&#39;,{attrs:{&quot;src&quot;:imgUrl}})])}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 条件</span></span>
<span class="line"><span class="token comment">// const template = \`</span></span>
<span class="line"><span class="token comment">//   &lt;div&gt;</span></span>
<span class="line"><span class="token comment">//     &lt;p v-if=&quot;flag === &#39;a&#39;&quot; &gt;A&lt;/p&gt;</span></span>
<span class="line"><span class="token comment">//     &lt;p v-else &gt;B&lt;/p&gt;</span></span>
<span class="line"><span class="token comment">//   &lt;/div&gt;</span></span>
<span class="line"><span class="token comment">// \`;</span></span>
<span class="line"><span class="token comment">// with(this){return _c(&#39;div&#39;,[(flag === &#39;a&#39;)?_c(&#39;p&#39;,[_v(&quot;A&quot;)]):_c(&#39;p&#39;,[_v(&quot;B&quot;)])])}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 循环</span></span>
<span class="line"><span class="token comment">// const template = \`</span></span>
<span class="line"><span class="token comment">//   &lt;ul&gt;</span></span>
<span class="line"><span class="token comment">//     &lt;li v-for=&quot;item in list&quot; :key=&quot;item.id&quot; &gt;{{ item.title }}&lt;/li&gt;</span></span>
<span class="line"><span class="token comment">//   &lt;/ul&gt;</span></span>
<span class="line"><span class="token comment">// \`;</span></span>
<span class="line"><span class="token comment">// with(this){return _c(&#39;ul&#39;,_l((list),function(item){return _c(&#39;li&#39;,{key:item.id},[_v(_s(item.title))])}),0)}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 事件</span></span>
<span class="line"><span class="token comment">// const template = \`&lt;button @click=&quot;clickHandler&quot; &gt;submit&lt;/button&gt;\`;</span></span>
<span class="line"><span class="token comment">// with(this){return _c(&#39;button&#39;,{on:{&quot;click&quot;:clickHandler}},[_v(&quot;submit&quot;)])}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// v-model</span></span>
<span class="line"><span class="token keyword">const</span> template <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;input type=&quot;text&quot; v-model=&quot;name&quot; &gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 主要看 input 事件</span></span>
<span class="line"><span class="token comment">// with(this){return _c(&#39;input&#39;,{directives:[{name:&quot;model&quot;,rawName:&quot;v-model&quot;,value:(name),expression:&quot;name&quot;}],attrs:{&quot;type&quot;:&quot;text&quot;},domProps:{&quot;value&quot;:(name)},on:{&quot;input&quot;:function($event){if($event.target.composing)return;name=$event.target.value}}})}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 编译</span></span>
<span class="line"><span class="token keyword">const</span> res <span class="token operator">=</span> compiler<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * vue 源码中找到缩写函数含义 渲染辅助函数（installRenderHelpers）</span>
<span class="line"> * </span>
<span class="line"> target._o = markOnce  一次性渲染节点  </span>
<span class="line"> target._n = toNumber   转换数值  </span>
<span class="line"> target._s = toString   转换为字符串类型  </span>
<span class="line"> target._l = renderList    渲染v-for指令  </span>
<span class="line"> target._t = renderSlot   处理slot  </span>
<span class="line"> target._q = looseEqual   判断两个变量是否相等  </span>
<span class="line"> target._i = looseIndexOf   判断数组是否存在某值，并返回索引  </span>
<span class="line"> target._m = renderStatic   渲染静态节点树  </span>
<span class="line"> target._f = resolveFilter   处理filters过滤器  </span>
<span class="line"> target._k = checkKeyCodes   检查config的keyCodes  </span>
<span class="line"> target._b = bindObjectProps   处理v-bind指令  </span>
<span class="line"> target._v = createTextVNode   创建文本vnode  </span>
<span class="line"> target._e = createEmptyVNode   创建空vnode  </span>
<span class="line"> target._u = resolveScopedSlots   处理slot  </span>
<span class="line"> target._g = bindObjectListeners   处理v-on指令  </span>
<span class="line"> target._d = bindDynamicKeys   绑定event、props  </span>
<span class="line"> target._p = prependModifier 处理绑定事件修饰符  </span>
<span class="line"></span>
<span class="line"> _c = createElement</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="vue-组件中使用-render-代替-template" tabindex="-1"><a class="header-anchor" href="#vue-组件中使用-render-代替-template"><span>vue 组件中使用 render 代替 template</span></a></h2><p>在有些复杂情况中，不能用 template , 可以考虑用 render,<br> 对比react一直都用 render(没有模板)，和下方示例一样。</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code class="language-vue"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;heading&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// template: \`xxx\`</span></span>
<span class="line">  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span></span>
<span class="line">        <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;headerId&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;headerId&#39;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;this is a tag&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};