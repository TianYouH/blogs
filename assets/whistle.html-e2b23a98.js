import{_ as i,M as t,p as a,q as o,R as e,t as s,N as l,a1 as r}from"./framework-8fa3e4ce.js";const d={},c={id:"whistle",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#whistle","aria-hidden":"true"},"#",-1),h={href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"调试移动端 H5 代理工具。",-1),m=e("p",null,"可以通过代理形式，查看类似浏览器开发工具相关信息。",-1),v=e("h2",{id:"基本使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基本使用","aria-hidden":"true"},"#"),s(" 基本使用")],-1),w={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},_=r(`<p>验证是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v14.16.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装whistle</li></ol><p><code>npm install -g whistle</code></p><p>查看 whistle 帮助信息</p><p><code>w2 help</code></p><ol start="3"><li>启动whistle</li></ol><p>最新版本的whistle支持三种等价的命令whistle、w2、wproxy</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动whistle:</span>
$ w2 start
<span class="token comment"># Note: 如果要防止其他人访问配置页面，可以在启动时加上登录用户名和密码 -n yourusername -w yourpassword。</span>

<span class="token comment"># 重启whsitle:</span>
$ w2 restart

<span class="token comment"># 停止whistle:</span>
$ w2 stop
<span class="token comment"># 调试模式启动whistle(主要用于查看whistle的异常及插件开发):</span>

$ w2 run
<span class="token comment"># 启动完whistle后，最后一步需要配置代理。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>配置代理</li></ol><blockquote><p>使手机和电脑在一个局域网内，不一定非要是一个 IP 段，只要是在同一个路由器下即可。 通过命令行工具输入 ipconfig 查看本机的 IP 地址。</p></blockquote><ul><li>手机端配置</li></ul><p>打开手机端的 WIFI 代理设置，输入电脑 IP 和 whistle 的代理端口。</p><ul><li>访问配置页面</li></ul><p>启动 whistle 及配置完代理后，用Chrome 浏览器(由于 css 兼容性问题界面只支持 Chrome 浏览器)访问配置页面，如果能正常打开页面，whistle 安装启动完毕，可以开始使用。</p><p>可以通过以下两种方式来访问配置页面：</p><p>方式 1：通过 ip+端口来访问，形式如 http://whistleServerIP:whistlePort/ e.g. http://127.0.0.1:8899</p><p>方式 2：通过命令行参数 -P xxxx 自定义 webui 的端口(xxxx 表示要设置的端口号)，自定义端口支持上述方式访问，也支持 http://127.0.0.1:xxxx</p>`,18);function b(x,k){const n=t("ExternalLinkIcon");return a(),o("div",null,[e("h1",c,[p,s(),e("a",h,[s("whistle"),l(n)])]),u,m,v,e("ol",null,[e("li",null,[s("安装"),e("a",w,[s("Node"),l(n)])])]),_])}const g=i(d,[["render",b],["__file","whistle.html.vue"]]);export{g as default};
