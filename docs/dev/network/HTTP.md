# HTTP

HTTP (Hypertext transfer protocol) 超文本传输协议

由欧洲核子研究委员会CERN的英国工程师 Tim Berners-Lee v发明的，同时，他也是WWW的发明人，最初的主要是用于传递通过HTML封装过的数据。

- HTTP0.9
  - 发布时间：1991年
  - 相关描述：协议简单到极点，请求时，不支持请求头，只支持 GET 方法，没了。
- HTTP1.0
  - 发布时间：1996年
  - 重大变化：
    - 在请求中加入了HTTP版本号，如：GET /coolshell/index.html HTTP/1.0
    - HTTP 开始有 header了，不管是request还是response 都有header了。
    - 增加了HTTP Status Code 标识相关的状态码。
    - 还有 Content-Type 可以传输其它的文件了。
  - 缺陷：每请求一个资源都要新建一个TCP链接，而且是串行请求（所以，就算网络变快了，打开网页的速度也还是很慢。所以，HTTP 1.0 应该是一个必需要淘汰的协议了）。
- HTTP1.1（至今传输最广泛的版本）
  - 发布时间：1997年
  - 更新记录：初始RFC 2068 在1997年发布， 然后在1999年被 RFC 2616 取代，再在2014年被 RFC 7230 /7231/7232/7233/7234/7235取代
  - 重大变化：解决了HTTP 1.0的网络性能的问题 
  - 其它变化:
    - 可以设置 keepalive 来让HTTP重用TCP链接，重用TCP链接可以省了每次请求都要在广域网上进行的TCP的三次握手的巨大开销。这是所谓的“HTTP 长链接” 或是 “请求响应式的HTTP 持久链接”。英文叫 HTTP Persistent connection.
    - 然后支持pipeline网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。（注：非幂等的POST 方法或是有依赖的请求是不能被pipeline化的）
    - 支持 Chunked Responses ，也就是说，在Response的时候，不必说明 Content-Length 这样，客户端就不能断连接，直到收到服务端的EOF标识。这种技术又叫 “服务端Push模型”，或是 “服务端Push式的HTTP 持久链接”
    - 还增加了 cache control 机制。
    - 协议头注增加了 Language, Encoding, Type 等等头，让客户端可以跟服务器端进行更多的协商。
    - 还正式加入了一个很重要的头—— HOST这样的话，服务器就知道你要请求哪个网站了。因为可以有多个域名解析到同一个IP上，要区分用户是请求的哪个域名，就需要在HTTP的协议中加入域名的信息，而不是被DNS转换过的IP信息。
    - 正式加入了 OPTIONS 方法，其主要用于 CORS – Cross Origin Resource Sharing 应用。
- HTTP2
  - 发布时间：2015年
  - 重大变化：极大的优化了HTTP/1.1的性能和安全性
  - 其他变化：
    - HTTP/2是一个二进制协议，增加了数据传输的效率。
    - HTTP/2是可以在一个TCP链接中并发请求多个HTTP请求，移除了HTTP/1.1中的串行请求。
    - HTTP/2会压缩头，如果你同时发出多个请求，他们的头是一样的或是相似的，那么，协议会帮你消除重复的部分。这就是所谓的HPACK算法（参看RFC 7541 附录A）
    - HTTP/2允许服务端在客户端放cache，又叫服务端push，也就是说，你没有请求的东西，我服务端可以先送给你放在你的本地缓存中。比如，你请求X，我服务端知道X依赖于Y，虽然你没有的请求Y，但我把把Y跟着X的请求一起返回客户端。
  缺陷：若干个HTTP的请求在复用一个TCP的连接，底层的TCP协议是不知道上层有多少个HTTP的请求的，所以，一旦发生丢包，造成的问题就是所有的HTTP请求都必需等待这个丢了的包被重传回来，哪怕丢的那个包不是我这个HTTP请求的。因为TCP底层是没有这个知识了。
- HTTP3
  - 发布时间：2018年
  - 重大变化：继续优化HTTP/2，激进地使用UDP取代TCP协议

## http methods

1. 传统的methods

```text
get 获取服务器的数据
post像服务器提交数据
简单的网页功能，就这两个操作
```

2. 现在的methods

```text
get 获取数据
post 新建数据
patch/put更新数据
delete删除数据
```

3. Restful API

```text
一种新的API设计方法(早已推广使用)
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

```

## http常见的header有哪些?

1. 常见的Request Headers：
```
Accept  浏览器可接收的数据格式
Accept-Encoding 浏览器可接收的压缩算法，如gzip
Accept-Languange 浏览器可接收的语言，如zh-CN
Connection: keep-alive 一次TCP连接重复使用
cookie
Host
User-Agent(简称UA) 浏览器信息
Content-type 发送数据的格式，如application/json
```

2. 常见的Response Headers：
```
Content-type返回数据的格式，如application/json
Content-length返回数据的大小，多少字节
Content-Encoding返回数据的压缩算法，如gzip
Set-Cookie
```

## http缓存机制(重要)

1. http 缓存策略（强制缓存＋协商缓存)：

```
强制缓存

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
```


2. 资源标识：Last-Modified 和 Etag

```
会优先使用Etag
Last-Modified只能精确到秒级
如果资源被重复生成，而内容不变，则Etag 更精确

在Response Headers 中，有两种
Last-Modified资源的最后修改时间
Etag资源的唯─标识(一个字符串，类似人类的指纹)
Request headers 对应字段
If-Modified-Since
If-None-Match
```

刷新操作方式，对缓存的影响：

## 刷新操作

```
正常操作: 地址栏输入url ，跳转链接，前进后退等
正常操作: 强制缓存有效，协商缓存有效

手动刷新: F5，点击刷新按钮，右击菜单刷新
手动刷新:强制缓存失效，协商缓存有效

强制刷新: ctrl + F5
强制刷新:强制缓存失效，协商缓存失效
```

> ref：  
> [HTTP的前世今生](https://coolshell.cn/articles/19840.html#_HTTP11)
