import{_ as p,M as o,p as l,q as i,R as n,t as s,N as e,a1 as t}from"./framework-8fa3e4ce.js";const c={},r=n("h1",{id:"loader",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#loader","aria-hidden":"true"},"#"),s(" Loader")],-1),u=n("p",null,'loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！',-1),d=n("p",null,"loader 执行顺序 从下到上，从右到左；",-1),k=n("h2",{id:"常用-loader",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用-loader","aria-hidden":"true"},"#"),s(" 常用 Loader")],-1),v={id:"file-loader",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#file-loader","aria-hidden":"true"},"#",-1),b={href:"https://webpack.docschina.org/loaders/file-loader/",target:"_blank",rel:"noopener noreferrer"},g=t(`<blockquote><p>将文件保存至输出文件夹中并返回（相对）URL</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;file-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// options: {</span>
        <span class="token comment">//   name: &#39;[path][name].[ext]&#39;,</span>
        <span class="token comment">// },</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={id:"url-loader",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#url-loader","aria-hidden":"true"},"#",-1),y={href:"https://webpack.docschina.org/loaders/url-loader/",target:"_blank",rel:"noopener noreferrer"},x=t(`<blockquote><p>与 file-loader 类似，但是如果文件大写小于一个设置的值，则会返回 data URL</p></blockquote><p>这样做的好处：图片直接放到 JS 文件中，省去了获取图片的请求;</p><p>坏处：图片大，JS 文件也会大，执行 JS 的时间就会长，所以在很长一段时间里页面上显示不出东西;</p><p>处理方法：设置图片大小限制，limit，单位为字节，如果图片大小超过了 limit，会像 file-loader 一样打包图片到 images 目录下；如果小于 2048 字节，也就是小于 2KB 的时候，会变成一个 base64 字符串，放到 bundle.js 里面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// options: {</span>
            <span class="token comment">//   limit: 8192,</span>
            <span class="token comment">// },</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),f={id:"css-loader",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#css-loader","aria-hidden":"true"},"#",-1),S={href:"https://webpack.docschina.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"},j=n("blockquote",null,[n("p",null,"分析出 css 文件之间的关系，将他们合并为一个文件。")],-1),w={id:"style-loader",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#style-loader","aria-hidden":"true"},"#",-1),J={href:"https://webpack.docschina.org/loaders/style-loader/",target:"_blank",rel:"noopener noreferrer"},L=t(`<blockquote><p>把 CSS 插入到 DOM 中。推荐将 style-loader 与 css-loader 一起使用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E={id:"sass-loader",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#sass-loader","aria-hidden":"true"},"#",-1),A={href:"https://webpack.docschina.org/loaders/sass-loader/",target:"_blank",rel:"noopener noreferrer"},B=t(`<blockquote><p>加载 Sass/SCSS 文件并将他们编译为 CSS</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 将 JS 字符串生成为 style 节点</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// 将 CSS 转化成 CommonJS 模块</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// 将 Sass 编译成 CSS</span>
          <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$={id:"postcss-loader",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#postcss-loader","aria-hidden":"true"},"#",-1),P={href:"https://webpack.docschina.org/loaders/postcss-loader/",target:"_blank",rel:"noopener noreferrer"},M=t(`<blockquote><p>使用 PostCSS 处理 CSS 的 loader</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),R={id:"babel-loader",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#babel-loader","aria-hidden":"true"},"#",-1),U={href:"https://www.babeljs.cn/docs/",target:"_blank",rel:"noopener noreferrer"},V=n("blockquote",null,[n("p",null,"打通 webpack 和 babel，并不会进行 ES6 语法的翻译；")],-1),D=n("p",null,"相关依赖：",-1),K=n("li",null,"@babel/core：核心库，让 babel 识别 JS 代码的内容，然后转化成 AST，然后将 AST 编译转化出一些新的东西来；",-1),O=n("li",null,"@babel/preset-env：负责转换新的 JavaScript 句法（syntax）而不转换新的 API, 包含所有 ES6 转 ES5 的规则；",-1),z=n("li",null,"@babel/polyfill：为当前环境提供一个垫片，转换新的 API，设置 useBuiltIns 为'usage'如下可以按需加载，这样可以避免转换后文件过大；",-1),F={href:"https://www.babeljs.cn/docs/babel-plugin-transform-runtime",target:"_blank",rel:"noopener noreferrer"},G=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.m?js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除对第三方代码处理</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// options: {</span>
            <span class="token comment">// presets: [[&#39;@babel/preset-env&#39;, {</span>
            <span class="token comment">//   useBuiltIns: &#39;usage&#39;,</span>
            <span class="token comment">//   targets: { // 项目最低运行环境</span>
            <span class="token comment">//     chrome: &quot;67&quot;</span>
            <span class="token comment">//   }</span>
            <span class="token comment">// }]]</span>
            <span class="token comment">// plugins: [</span>
            <span class="token comment">//   [</span>
            <span class="token comment">//     &quot;@babel/plugin-transform-runtime&quot;,</span>
            <span class="token comment">//     {</span>
            <span class="token comment">//       // 可以将option中的内容放在babelrc</span>
            <span class="token comment">//       corejs: 2, // 指定一个数字将重写需要polyfillable apl的助手，以引用来自该(主要)的助手。请注意，coreis: 2只支持全局变量(如Promise)和静态属性(如Array.from)，而corejs: 3也支持实例属性(如[].includes)。根据值需要安装相关依赖@babel/runtime-corejs2。</span>
            <span class="token comment">//       helpers: true,</span>
            <span class="token comment">//       regenerator: true,</span>
            <span class="token comment">//       useESModules: false,</span>
            <span class="token comment">//     },</span>
            <span class="token comment">//   ],</span>
            <span class="token comment">// ],</span>
          <span class="token comment">// },</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.babelrc</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 可以将option中的内容放在babelrc</span>
        corejs<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 指定一个数字将重写需要polyfillable apl的助手，以引用来自该(主要)的助手。请注意，coreis: 2只支持全局变量(如Promise)和静态属性(如Array.from)，而corejs: 3也支持实例属性(如[].includes)。根据值需要安装相关依赖@babel/runtime-corejs2。</span>
        helpers<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        regenerator<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        useESModules<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function H(Q,W){const a=o("ExternalLinkIcon");return l(),i("div",null,[r,u,d,k,n("h3",v,[m,s(),n("a",b,[s("file-loader"),e(a)])]),g,n("h3",h,[_,s(),n("a",y,[s("url-loader"),e(a)])]),x,n("h3",f,[q,s(),n("a",S,[s("css-loader"),e(a)])]),j,n("h3",w,[C,s(),n("a",J,[s("style-loader"),e(a)])]),L,n("h3",E,[I,s(),n("a",A,[s("sass-loader"),e(a)])]),B,n("h3",$,[N,s(),n("a",P,[s("postcss-loader"),e(a)])]),M,n("h3",R,[T,s(),n("a",U,[s("babel-loader"),e(a)])]),V,D,n("ul",null,[K,O,z,n("li",null,[n("a",F,[s("@babel/plugin-transform-runtime"),e(a)]),s("： 除了在业务代码中引用 babel-polyfill 以外（常用业务项目使用这种方式），还可以使用@babel/plugin-transform-runtime 插件（推荐UI库，类库，公共库使用这种），这样可以不用污染全局环境；两种方式任选其一；")])]),G])}const Y=p(c,[["render",H],["__file","Loader.html.vue"]]);export{Y as default};
