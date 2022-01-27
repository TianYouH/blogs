# OAuth授权

OAuth是一种行业标准的授权方式

最广泛运用的第三方认证体系

Oauth的安全性如何保证

常见Oauth提供商

- QQ、微博、微信

版本
- 1.x 老版本
- 2.x 推荐

## OAuth的实现流程

<!-- ![示例-1](/blogs/image/web/knowledge/示例-1.png) -->
<img :src="$withBase('/image/web/knowledge/示例-1.png')" alt="示例">

## 多种授权方式

### Authorization Code 常用

<img :src="$withBase('/image/web/knowledge/authorization-code.png')" alt="示例">

### Refresh Token 常用于刷新token

<img :src="$withBase('/image/web/knowledge/refresh-token.png')" alt="示例">

### Password  很少提供该方式，安全隐患大

<img :src="$withBase('/image/web/knowledge/password1.png')" alt="示例">
<img :src="$withBase('/image/web/knowledge/password2.png')" alt="示例">

### Device Code 用于TV OS认证

### Implicit  很少用了
### Client Credentials  用于客户端相关权限获取

## OAuth 申请

### github

2022年1月27日

::: details 示例
1. 点击 github首页 右上角头像 打开下拉 选项 进入Settings配置页
<img :src="$withBase('/image/web/knowledge/githubOauth申请1.png')" alt="示例">

2. 点击左侧侧边栏进入 Developer settings页
<img :src="$withBase('/image/web/knowledge/githubOauth申请2.png')" alt="示例">

3. 选中左侧 OAuth Apps栏，点击注册一个新的应用
<img :src="$withBase('/image/web/knowledge/githubOauth申请3.png')" alt="示例">

4. 

:::