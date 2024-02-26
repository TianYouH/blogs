import{_ as l,M as c,p as o,q as p,R as n,t as s,N as e,a1 as t}from"./framework-8fa3e4ce.js";const u={},d=n("h1",{id:"同步github和gitee",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#同步github和gitee","aria-hidden":"true"},"#"),s(" 同步GitHub和Gitee")],-1),r=n("p",null,"目的",-1),v=n("p",null,"当 博客 发生发布更新时 将 Github 代码自动同步到 Gitee 仓库",-1),m=n("h2",{id:"手动同步",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#手动同步","aria-hidden":"true"},"#"),s(" 手动同步")],-1),b=n("p",null,"在 Gitee 的项目主页，提供了同步的按钮，只用点一下，即可与 Github 同步更新。",-1),k=n("blockquote",null,[n("p",null,"这里的同步功能默认是强制同步")],-1),h=["src"],g=n("blockquote",null,[n("p",null,"该项目需要是通过导入进来的项目")],-1),_=["src"],y=t(`<p>有点麻烦的是，我们需要在推送到 Github 后，再到 Gitee 项目主页手动点击一下。</p><h2 id="推送两个仓库" tabindex="-1"><a class="header-anchor" href="#推送两个仓库" aria-hidden="true">#</a> 推送两个仓库</h2><p>除此之外，我们也可以在 sh 脚本文件里，直接推送到两个仓库地址上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:TianYouH/blogs.git master:gh-pages
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@gitee.com:tianyouh/blogs.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们执行 sh deploy.sh 的时候，就会自动往两个仓库里推送。</p><h2 id="github-actions-自动同步" tabindex="-1"><a class="header-anchor" href="#github-actions-自动同步" aria-hidden="true">#</a> Github Actions 自动同步</h2><p>利用 Github Actions，写一个工作流，在发现 Github 博客仓库的 gh-pages 分支代码更新后，自动同步当前代码到 Gitee 上。</p>`,7),G={href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/Yikun/hub-mirror-action",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">steps</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Mirror the Github organization repos to Gitee.
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> Yikun/hub<span class="token punctuation">-</span>mirror<span class="token punctuation">-</span>action@master
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> github/kunpengcompute
    <span class="token key atrule">dst</span><span class="token punctuation">:</span> gitee/kunpengcompute
    <span class="token key atrule">dst_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">dst_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">account_type</span><span class="token punctuation">:</span> org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中有四个必填项：</p><ul><li><p>src 表示需要被同步的源端账户名，即我们 Github 的账户名，因为我的 Github ID 是 mqyqingfeng，所以这里我应该改成 github/TianYouH。</p></li><li><p>dst 表示需要同步到的目的端账户名，即我们 Gitee 的账户名，因为我的 Gitee ID 也是 mqyqingfeng，所以这里我应该改成 gitee/tianyouh。</p></li><li><p>dst_key 表示用于在目的端上传代码的私钥，然后将其保存在 Secrets 中。 具体的操作步骤如下：</p></li></ul>`,3),A={class:"custom-container details"},q=t(`<summary>私钥示例</summary><p>获取私钥：</p><p><code>cat ~/.ssh/id_rsa</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-----BEGIN OPENSSH PRIVATE KEY-----
...
SwnotWv2kZvdzcH/aivu1MHS2ryEGZE6qZtQVsYOh8TyhFNJ98WrElC0on2HdHm1AuaAAi
U+saYGGNQVFuUGZQBhyciqmVWMO25JbAk+NCWIxmp+4Sv0eg89v8utT3WrYSiEI5ccWs5G
...
RORX58LHJ/U8KQK4TzE1lVz5O1jJcDaYmdjFdG5JAAAFkMhRdLLIUXSyAAAAB3NzaC1yc2
EAAAGBALp39yORSIsUhCB/ixuillrLSXUpn/AugC0QU8K6H7luPTFtVisy0xAfocKpsBzb
Gr0/zBpdCIi+OIi+0dGEpmZYlyP5xqexJoTF2iOFmUy1xdKEgdu/ryydvxo0xu4qzeVas/
...
-----END OPENSSH PRIVATE KEY-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制私钥内容，选择 &quot;要同步的 Github 仓库&quot; -&gt; &quot;Setting&quot; -&gt; &quot;Secrets&quot; -&gt; &quot;New repository secret&quot;</p>`,5),T=["src"],x=n("p",null,'填入 Secret 内容，Name 命名为 "GITEE_PRIVATE_KEY"，Value 为复制的内容',-1),I=n("p",null,"然后点击 Add secret 即可。",-1),H={href:"https://gitee.com/profile/personal_access_tokens",target:"_blank",rel:"noopener noreferrer"},S=t(`<p>生成并复制 Token，然后同样的步骤，保存在 Github 的 Secrets 中，Name 为 &quot;GITEE_TOKEN&quot;</p><blockquote><p>注意：检查gitee SSH公钥是否包含 对应公钥。否则，可能会引起 没有权限访问仓库问题。</p></blockquote><p>那么我们就可以在仓库建立的根目录下，建立目录 .github/workflows ，然后创建一个名为syncToGitee.yml 的文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> syncToGitee
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> gh<span class="token punctuation">-</span>pages
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">repo-sync</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Mirror the Github organization repos to Gitee.
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> Yikun/hub<span class="token punctuation">-</span>mirror<span class="token punctuation">-</span>action@master
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">src</span><span class="token punctuation">:</span> <span class="token string">&#39;github/TianYouH&#39;</span>
        <span class="token key atrule">dst</span><span class="token punctuation">:</span> <span class="token string">&#39;gitee/tianyouh&#39;</span>
        <span class="token key atrule">dst_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">dst_token</span><span class="token punctuation">:</span>  $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">static_list</span><span class="token punctuation">:</span> <span class="token string">&quot;blogs&quot;</span>
        <span class="token key atrule">force_update</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>static_list</code> 表示单一仓库同步，<code>force_update</code> 为 <code>true</code> 表示启用 <code>git push -f</code> 强制同步。</p><p>当我们把这样的文件提交到 Github，Github 会自动检测并运行该脚本。但是现在还有几个问题要注意：</p><ol><li><p>检查项目是否启用Actions, &quot;Github 仓库&quot; -&gt; &quot;Setting&quot; -&gt; &quot;Actions&quot; -&gt; &quot;General&quot;</p></li><li><p>因为我们是提交到 Github 的 gh-pages 分支上，这个文件和目录需要写在 gh-pages 分支 观察我们的脚本代码，我们就会发现，每次我们 sh deploy.sh 的时候，都是编译代码到 dist 目录，然后重新 git init ，最后强制提交。所以我们在项目的根目录建立 .github/woorkflows/syncToGitee.yml 并没有什么用，一来提交的是 dist 目录里的代码，二是每次还都会清空重新编译生成代码提交。 为此，我们可以在<strong>脚本里添加代码</strong>，每次编译完后，再拷贝外层的 .github/woorkflows/syncToGitee.yml 到 dist 目录里，再提交到 Github 上。</p></li></ol><p>我们依然在项目根目录添加目录和文件</p><p>此时的文件结构如下：</p><details class="custom-container details"><summary>文件结构</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ .github
│  └─ workflows
│			└─ syncToGitee.yml
└─ package.json
└─ deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>脚本文件代码如下：</p><details class="custom-container details"><summary>脚本代码</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 拷贝目录和文件 不拷贝gh-pages将无法执行自动化</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/<span class="token punctuation">..</span>/.github ./

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:TianYouH/blogs.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>此时我们再运行 sh deploy.sh 代码提交到 Github，就可以在仓库的 Actions 中看到运行记录：</p><p>执行时间大概一分钟左右，Gitee 的代码就会自动同步。</p><p>至此，我们实现了 Github 与 Gitee 代码仓库的同步。</p><p>参阅博客及文档：</p>`,16),N={href:"https://github.com/mqyqingfeng/Blog/issues/236",target:"_blank",rel:"noopener noreferrer"};function w(i,Y){const a=c("ExternalLinkIcon");return o(),p("div",null,[d,r,v,m,b,k,n("img",{src:i.$withBase("/image/dev/github/同步GitHub和Gitee1.png"),alt:"示例"},null,8,h),g,n("img",{src:i.$withBase("/image/dev/github/同步GitHub和Gitee2.png"),alt:"示例"},null,8,_),y,n("p",null,[s("关于 Github Actions 的介绍，可以参考阮一峰老师的 "),n("a",G,[s("《GitHub Actions 入门教程》"),e(a)]),s("。")]),n("p",null,[s("为了实现 Gitee 和 Github 的同步，我们需要借助一个 action，还好业界已经有现成的实现了，这里我采用的是 "),n("a",f,[s("Hub Mirror Action"),e(a)]),s("，我们可以看到使用的示例代码：")]),E,n("details",A,[q,n("img",{src:i.$withBase("/image/dev/github/同步GitHub和Gitee3.png"),alt:"示例"},null,8,T),x,I]),n("ul",null,[n("li",null,[s('dst_token 创建仓库的API tokens， 用于自动创建不存在的仓库。这里我们从 Gitee 上获取， 选择 "头像" -> "设置" -> "'),n("a",H,[s("私人令牌"),e(a)]),s('" -> "生成新令牌"')])]),S,n("p",null,[n("a",N,[s("冴羽：一篇教你代码同步 Github 和 Gitee"),e(a)])])])}const B=l(u,[["render",w],["__file","同步GitHub和Gitee.html.vue"]]);export{B as default};
