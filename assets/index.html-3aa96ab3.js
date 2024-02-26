import{_ as a,p as i,q as l,a1 as e}from"./framework-8fa3e4ce.js";const c={},o=e('<h1 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> MOCK</h1><h2 id="mock-js-有两大核心功能" tabindex="-1"><a class="header-anchor" href="#mock-js-有两大核心功能" aria-hidden="true">#</a> Mock.js 有两大核心功能:</h2><ul><li>生成随机数据</li><li>拦截 ajax 请求</li></ul><p>通过随机数据，模拟各种场景；不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据；支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等；支持支持扩展更多数据类型，支持自定义函数和正则。使用非常简单方便, 无侵入性, 基本覆盖常用的接口数据类型</p><h2 id="为什么要使用-mock-js" tabindex="-1"><a class="header-anchor" href="#为什么要使用-mock-js" aria-hidden="true">#</a> 为什么要使用 Mock.js</h2><p>前后端分离,让前端工程师独立于后端进行开发和自测,前端的开发和自测进度不再受制于后端的开发环境和进度</p><ul><li>使用 Mock.js 的前提条件</li></ul><p>需要提前和后端工程师约定好接口</p><h2 id="mock-js-语法规范、核心方法以及使用示例" tabindex="-1"><a class="header-anchor" href="#mock-js-语法规范、核心方法以及使用示例" aria-hidden="true">#</a> Mock.js 语法规范、核心方法以及使用示例</h2><ul><li>Mock.js 中的语法规范包括两部分,一个是数据模板定义规范,决定了最终会生成什么样的数据;一个是数据占位符定义规范,有点类似于语法糖,用于简化语法。</li><li>核心方法 Mock.mock()</li><li>常用数据模板&amp;&amp;占位符使用示例</li></ul><h2 id="前端-mock-不推荐" tabindex="-1"><a class="header-anchor" href="#前端-mock-不推荐" aria-hidden="true">#</a> 前端 Mock(不推荐)</h2><ul><li>什么是前端 Mock <ul><li>前端 mock 是指在前端代码中直接使用 Mock.js 的 ajax 拦截功能拦截对应请求并返回模拟的响应数据</li></ul></li><li>前端 Mock 的使用方式 <ul><li>前端 Mock 的使用方式比较简单,直接在 main.js 中引入即可</li></ul></li><li>前端 Mock 的缺陷 <ul><li>前端 Mock 对 ajax 的拦截本质是通过修改 xmlHttpRequest 原型对象的方法</li><li>在有其他第三方库有使用到 xmlHttpRequest 对象的情况下,可能会影响到第三方库的正常执行</li><li>由于前端 Mock 是将代码直接引入在前端代码中,所以上线打包时,需要主动去除对 Mock.js 的引用</li><li>无法在浏览器调试工具或者抓包工具中获取到请求,因为请求并没有真正的通过浏览器发出</li></ul></li></ul><h2 id="服务端-mock-强烈推荐" tabindex="-1"><a class="header-anchor" href="#服务端-mock-强烈推荐" aria-hidden="true">#</a> 服务端 Mock(强烈推荐)</h2><ul><li>什么是服务端 Mock <ul><li>服务端 Mock 是指使用真实的后端服务器来提供 Mock 数据,只使用 Mock.js 的生成随即数据功能,路由的匹配交由服务器端自己处理,和前端 Mock 相比较优势更加明显,可以在 netWork 中正常查看数据请求,并且对前端源码没有侵入。</li></ul></li></ul>',14),r=[o];function s(h,d){return i(),l("div",null,r)}const k=a(c,[["render",s],["__file","index.html.vue"]]);export{k as default};