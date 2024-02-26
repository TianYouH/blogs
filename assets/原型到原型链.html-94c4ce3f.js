import{_ as l,M as a,p as o,q as r,R as n,t as e,N as i,Q as d,V as p,a1 as u}from"./framework-8fa3e4ce.js";const m={},v=n("h1",{id:"原型到原型链",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原型到原型链","aria-hidden":"true"},"#"),e(" 原型到原型链")],-1),b={href:"https://tianyouh.github.io/summarize/javascript/1/",target:"_blank",rel:"noopener noreferrer"},h=u(`<h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>constructor
属性
方法

继承：
extends
super
扩展或重写方法

class是ES6语法规范，由ECMA委员会发布
ECMA只规定语法规则，即我们代码的书写规范，不规定如何实现
主要实现方式都是V8引擎的实现方式，也是主流的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型判断-instanceof" tabindex="-1"><a class="header-anchor" href="#类型判断-instanceof" aria-hidden="true">#</a> 类型判断 instanceof</h2><p>顺着隐式原型向上找对应到的显式原型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xialuo <span class="token keyword">instanceof</span> <span class="token class-name">Student</span> <span class="token comment">// true</span>
xialuo <span class="token keyword">instanceof</span> <span class="token class-name">People</span> <span class="token comment">// true</span>
xialuo <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>每个class都有显示原型prototype
每个实例都有隐式原型_proto_
实例的_proto_指向对应class的prototype

基于原型的执行规则：
获取属性xialuo.name 或执行方法xialuo.sayhi() 时
先在自身属性和方法寻找
如果找不到则自动去__proto__中查找
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),_=["src"],k=["src"];function g(s,x){const t=a("ExternalLinkIcon"),c=a("RouterLink");return o(),r("div",null,[v,n("p",null,[n("a",b,[e("测试地址"),i(t)])]),h,d(" ![图例](/blogs/image/web/javascript/原型链.jpg) "),n("img",{src:s.$withBase("/image/web/javascript/原型链.jpg"),alt:"图片"},null,8,_),n("img",{src:s.$withBase("/image/web/javascript/原型链2.png"),alt:"图片"},null,8,k),n("p",null,[e("手写简易 jQuery 考虑插件和扩展性 "),i(c,{to:"/web/knowledge/%E5%B8%B8%E7%94%A8%E6%89%8B%E5%86%99%E5%87%BD%E6%95%B0.html#jquery%E8%80%83%E8%99%91%E6%8F%92%E4%BB%B6%E5%92%8C%E6%89%A9%E5%B1%95%E6%80%A7"},{default:p(()=>[e("链接")]),_:1})])])}const E=l(m,[["render",g],["__file","原型到原型链.html.vue"]]);export{E as default};
