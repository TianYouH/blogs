# Ajax

### XMLHttpRequest

1. 请求

```js
// get请求
const xhr = new XMLHttpRequest();
xhr.open("GET", " /api", true);
xhr.onreadystatechange = function () {
  //这里的函数异步执行，可参考之前JS 基础中的异步模块
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      alert(xhr.responseText);
    }
  }
};
xhr.send(null);
```

2. xhr.readyState

| 状态码 | 说明 |
| :-: | - |
| 0 | (未初始化)还没有调用send(方法 |
| 1 | (载入)已调用send()方法，正在发送请求 |
| 2 | (载入完成) send()方法执行完成，已经接收到全部响应内容 |
| 3 | (交互）正在解析响应内容 |
| 4 | (完成）响应内容解析完成，可以在客户端调用 |

2. xhr.status

| 状态码 | 说明 |
| :-: | - |
| 2xx | 表示成功处理请求，如200 |
| 3xx | 需要重定向，浏览器直接跳转，如301 302 304 |
| 4xx | 客户端请求错误，如404 403 |
| 5xx | 服务器端错误 |

### Fetch Api

Fetch API 提供了一个获取资源的接口（包括跨域请求）。  
任何使用过 XMLHttpRequest 的人都能轻松上手，而且新的 API 提供了更强大和灵活的功能集。

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

[使用 Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

### 第三方 axios $.ajax

[axios](https://axios-http.com/)

[jquery](https://api.jquery.com/category/ajax/)

### 跨域:同源策略，跨域解决方案

1. 同源策略

```text
ajax请求时，浏览器要求当前网页和server 必须同源（安全)
同源: 协议、域名、端口，三者必须一致
前端: http://a.com:8080/; server:https://b.com/api/xxx;

加载图片css js 可无视同源策略
<img src=跨域的图片地址/>
<link href=跨域的css地址/>
<script src=跨域的js地址></script>

<img />可用于统计打点，可使用第三方统计服务
<link /> <script>可使用CDN ，CDN一般都是外域
<script>可实现JSONP
```

2. 跨域

```text
所有的跨域，都必须经过server端允许和配合
未经server端允许就实现跨域，说明浏览器有漏洞危险信号
```

3. JSONP

```text
访问https://imooc.com/，服务端一定返回一个html文件吗?
服务器可以任意动态拼接数据返回，只要符合html格式要求
同理于<script src= "https://imooc.com/getData.js"></script>
<script>可绕过跨域限制
服务器可以任意动态拼接数据返回
所以，<script>就可以获得跨域的数据，只要服务端愿意返回
```

3. CORS(服务端支持)

```js
//第二个参数填写允许跨域的域名称,不建议直接写“*"
response.setHeader("Access-Control-Allow-Origin", "http://localhost:8011");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-with");
response.setHeader(
  "Access-Control-Allow-Methods",
  "PUT,POST,GET,DELETE,OPTIONS"
);
//接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");
```
