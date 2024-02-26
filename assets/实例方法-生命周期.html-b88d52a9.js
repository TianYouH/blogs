import{_ as n,p as s,q as a,a1 as e}from"./framework-8fa3e4ce.js";const t={},c=e(`<h1 id="实例方法-生命周期" tabindex="-1"><a class="header-anchor" href="#实例方法-生命周期" aria-hidden="true">#</a> 实例方法-生命周期</h1><h2 id="vm-mount" tabindex="-1"><a class="header-anchor" href="#vm-mount" aria-hidden="true">#</a> vm.$mount</h2><h2 id="vm-forceupdate" tabindex="-1"><a class="header-anchor" href="#vm-forceupdate" aria-hidden="true">#</a> vm.$forceUpdate</h2><h2 id="vm-nexttick" tabindex="-1"><a class="header-anchor" href="#vm-nexttick" aria-hidden="true">#</a> vm.$nextTick</h2><p>参数：<code>{Function} [callback]</code></p><p>用法：将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。</p><blockquote><p>注意：2.1.0 起新增：如果没有提供回调且在支持 Promise 的环境中，则返回一个 Promise。</p></blockquote><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Vue 是异步渲染</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token function-variable function">example</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 修改数据</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;changed&#39;</span>
      <span class="token comment">// data 改变之后，DOM 还没有更新（异步渲染）</span>
      <span class="token comment">// 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次</span>
      <span class="token comment">// $nextTick 待 DOM 渲染完再回调，以获取最新DOM节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// DOM 现在更新了</span>
        <span class="token comment">// \`this\` 绑定到当前实例</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doSomethingElse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vm-destroy" tabindex="-1"><a class="header-anchor" href="#vm-destroy" aria-hidden="true">#</a> vm.$destroy</h2>`,10),i=[c];function o(p,l){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","实例方法-生命周期.html.vue"]]);export{u as default};
