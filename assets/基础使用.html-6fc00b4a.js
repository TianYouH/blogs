import{_ as e,p as s,q as n,a1 as a}from"./framework-8fa3e4ce.js";const i={},d=a(`<h1 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h1><p>内存数据结构存储（缓存）</p><p>可持久存储</p><p>支持多种数据结构</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>连接数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ redis-cli
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>数据操作：https://redis.io/commands</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> a <span class="token string">&quot;123&quot;</span>
OK
get a
<span class="token string">&quot;aaa&quot;</span>

<span class="token comment"># 设置过期时间 命令+key+时间(s)+value</span>
setex c <span class="token number">10</span> <span class="token number">1</span>

<span class="token comment"># 获取已有所有key</span>
keys *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手动启动新服务并设置账号密码（windows）</p><ul><li>打开redis安装目录下<code>redis.windows.conf</code>文件</li><li>修改 <code>prot 6379</code>端口，调整成非6379端口即可,重新启动个redis服务 <ul><li>改端口是为了防止和redis默认启动服务<code>redis.windows-service.conf</code>端口6379冲突</li></ul></li><li>找到 文件中 <code>requirepass foobared</code> 文字并解除注释。 <ul><li><code>foobared</code> 就是密码，修改成期望值就好</li></ul></li><li>进入安装目录，手动启动新配置服务 <ul><li><code>$ ./redis-server.exe ./redis.windows.conf </code></li></ul></li><li>通过命令进入新服务 <code>redis-cli -p 6378</code></li></ul><p>密码认证登录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>auth 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),l=[d];function c(r,o){return s(),n("div",null,l)}const u=e(i,[["render",c],["__file","基础使用.html.vue"]]);export{u as default};
