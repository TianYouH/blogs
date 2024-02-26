import{_ as l,M as s,p as d,q as a,R as e,t as i,N as t,a1 as r}from"./framework-8fa3e4ce.js";const v={},c=r(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><p>HTTP (Hypertext transfer protocol) 超文本传输协议</p><p>由欧洲核子研究委员会CERN的英国工程师 Tim Berners-Lee v发明的，同时，他也是WWW的发明人，最初的主要是用于传递通过HTML封装过的数据。</p><h2 id="发展史" tabindex="-1"><a class="header-anchor" href="#发展史" aria-hidden="true">#</a> 发展史</h2><ul><li>HTTP0.9 <ul><li>发布时间：1991年</li><li>相关描述：协议简单到极点，请求时，不支持请求头，只支持 GET 方法，没了。</li></ul></li><li>HTTP1.0 <ul><li>发布时间：1996年</li><li>重大变化： <ul><li>在请求中加入了HTTP版本号，如：GET /coolshell/index.html HTTP/1.0</li><li>HTTP 开始有 header了，不管是request还是response 都有header了。</li><li>增加了HTTP Status Code 标识相关的状态码。</li><li>还有 Content-Type 可以传输其它的文件了。</li></ul></li><li>缺陷：每请求一个资源都要新建一个TCP链接，而且是串行请求（所以，就算网络变快了，打开网页的速度也还是很慢。所以，HTTP 1.0 应该是一个必需要淘汰的协议了）。</li></ul></li><li>HTTP1.1（至今传输最广泛的版本） <ul><li>发布时间：1997年</li><li>更新记录：初始RFC 2068 在1997年发布， 然后在1999年被 RFC 2616 取代，再在2014年被 RFC 7230 /7231/7232/7233/7234/7235取代</li><li>重大变化：解决了HTTP 1.0的网络性能的问题</li><li>其它变化: <ul><li>可以设置 keepalive 来让HTTP重用TCP链接，重用TCP链接可以省了每次请求都要在广域网上进行的TCP的三次握手的巨大开销。这是所谓的“HTTP 长链接” 或是 “请求响应式的HTTP 持久链接”。英文叫 HTTP Persistent connection.</li><li>然后支持pipeline网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。（注：非幂等的POST 方法或是有依赖的请求是不能被pipeline化的）</li><li>支持 Chunked Responses ，也就是说，在Response的时候，不必说明 Content-Length 这样，客户端就不能断连接，直到收到服务端的EOF标识。这种技术又叫 “服务端Push模型”，或是 “服务端Push式的HTTP 持久链接”</li><li>还增加了 cache control 机制。</li><li>协议头注增加了 Language, Encoding, Type 等等头，让客户端可以跟服务器端进行更多的协商。</li><li>还正式加入了一个很重要的头—— HOST这样的话，服务器就知道你要请求哪个网站了。因为可以有多个域名解析到同一个IP上，要区分用户是请求的哪个域名，就需要在HTTP的协议中加入域名的信息，而不是被DNS转换过的IP信息。</li><li>正式加入了 OPTIONS 方法，其主要用于 CORS – Cross Origin Resource Sharing 应用。</li></ul></li></ul></li><li>HTTP2 <ul><li>发布时间：2015年</li><li>重大变化：极大的优化了HTTP/1.1的性能和安全性</li><li>其他变化： <ul><li>HTTP/2是一个二进制协议，增加了数据传输的效率。</li><li>HTTP/2是可以在一个TCP链接中并发请求多个HTTP请求，移除了HTTP/1.1中的串行请求。</li><li>HTTP/2会压缩头，如果你同时发出多个请求，他们的头是一样的或是相似的，那么，协议会帮你消除重复的部分。这就是所谓的HPACK算法（参看RFC 7541 附录A）</li><li>HTTP/2允许服务端在客户端放cache，又叫服务端push，也就是说，你没有请求的东西，我服务端可以先送给你放在你的本地缓存中。比如，你请求X，我服务端知道X依赖于Y，虽然你没有的请求Y，但我把把Y跟着X的请求一起返回客户端。 缺陷：若干个HTTP的请求在复用一个TCP的连接，底层的TCP协议是不知道上层有多少个HTTP的请求的，所以，一旦发生丢包，造成的问题就是所有的HTTP请求都必需等待这个丢了的包被重传回来，哪怕丢的那个包不是我这个HTTP请求的。因为TCP底层是没有这个知识了。</li></ul></li></ul></li><li>HTTP3 <ul><li>发布时间：2018年</li><li>重大变化：继续优化HTTP/2，激进地使用UDP取代TCP协议</li></ul></li></ul><h2 id="http-methods" tabindex="-1"><a class="header-anchor" href="#http-methods" aria-hidden="true">#</a> http methods</h2><ol><li>传统的methods</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>get 获取服务器的数据
post像服务器提交数据
简单的网页功能，就这两个操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>现在的methods</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>get 获取数据
post 新建数据
patch/put更新数据
delete删除数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Restful API</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一种新的API设计方法(早已推广使用)
 传统 API设计:把每个url当做一个功能
Restful API设计:把每个url当做一个唯一的资源

如何设计成一个资源?
尽量不用url参数
method表示操作类型

不使用url参数
传统API 设计:/api/list?pageIndex=2
Restful API设计:/api/list/2

用method表示操作类型
（传统API设计)
post请求 /api/create-blog
post请求 /api/update-blog?id=100
get请求 /api/get-blog?id=100
(Restful API设计)
post请求 /api/blog
patch请求 /api/blog/100
get请求 /api/blog/100

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http常见的header有哪些" tabindex="-1"><a class="header-anchor" href="#http常见的header有哪些" aria-hidden="true">#</a> http常见的header有哪些?</h2><ol><li>常见的Request Headers：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept  浏览器可接收的数据格式
Accept-Encoding 浏览器可接收的压缩算法，如gzip
Accept-Languange 浏览器可接收的语言，如zh-CN
Connection: keep-alive 一次TCP连接重复使用
cookie
Host
User-Agent(简称UA) 浏览器信息
Content-type 发送数据的格式，如application/json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>常见的Response Headers：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Content-type返回数据的格式，如application/json
Content-length返回数据的大小，多少字节
Content-Encoding返回数据的压缩算法，如gzip
Set-Cookie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http缓存机制-重要" tabindex="-1"><a class="header-anchor" href="#http缓存机制-重要" aria-hidden="true">#</a> http缓存机制(重要)</h2><ol><li>http 缓存策略（强制缓存＋协商缓存)：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>强制缓存

Cache-Control
Response Headers中
控制强制缓存的逻辑 例如Cache-Control: max-age=31536000（单位是秒)
max-age 缓存时间
no-cache 不用本地缓存
no-store 不用本地缓存 并且 不做协议缓存(服务端缓存)
private 只允许最终用户做缓存
public  允许中间路由做缓存

关于 Expires
同在Response Headers中
同为控制缓存过期
已被Cache-Control代替
协商缓存(对比缓存)：
服务端缓存策略
服务器判断客户端资源，是否和服务端资源一样
一致则返回304，否则返回200和最新的资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>资源标识：Last-Modified 和 Etag</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>会优先使用Etag
Last-Modified只能精确到秒级
如果资源被重复生成，而内容不变，则Etag 更精确

在Response Headers 中，有两种
Last-Modified资源的最后修改时间
Etag资源的唯─标识(一个字符串，类似人类的指纹)
Request headers 对应字段
If-Modified-Since
If-None-Match
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新操作方式，对缓存的影响：</p><h2 id="刷新操作" tabindex="-1"><a class="header-anchor" href="#刷新操作" aria-hidden="true">#</a> 刷新操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>正常操作: 地址栏输入url ，跳转链接，前进后退等
正常操作: 强制缓存有效，协商缓存有效

手动刷新: F5，点击刷新按钮，右击菜单刷新
手动刷新:强制缓存失效，协商缓存有效

强制刷新: ctrl + F5
强制刷新:强制缓存失效，协商缓存失效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),u=e("br",null,null,-1),o={href:"https://coolshell.cn/articles/19840.html#_HTTP11",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const n=s("ExternalLinkIcon");return d(),a("div",null,[c,e("blockquote",null,[e("p",null,[i("ref："),u,e("a",o,[i("HTTP的前世今生"),t(n)])])])])}const T=l(v,[["render",m],["__file","HTTP.html.vue"]]);export{T as default};
