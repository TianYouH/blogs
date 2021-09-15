# HTTP

## http 常见的状态码有哪些?

1. 状态码分类

```text
1xx服务器收到请求
2xx请求成功，如200
3xx重定向，如302
4xx客户端错误，如404
5xx服务端错误，如500
```

2. 常见状态码

```text
200 成功
301 永久重定向（配合location，浏览器自动处理)
302 临时重定向（配合location，浏览器自动处理)
304 资源未被修改
404 资源未找到
403 没有权限
500 服务器错误
504 网关超时
```

3. 关于协议和规范

```text
就是一个约定
要求大家都跟着执行
不要违反规范，例如IE浏览器
```

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
