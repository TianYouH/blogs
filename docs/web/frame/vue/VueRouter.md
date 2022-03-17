# VueRouter

vue-router 是 vue 全家桶的标配之一，稍微复杂一点的 SPA(单页应用) ，都需要使用路由。

## 不同的历史模式

网页 url 组成部分

```js
// http://localhost:8080/web/frame/vue/渲染和更新.html#初次渲染过程

location.protocol // 'http:'
location.hostname // 'localhost'
location.host // 'localhost:8080'
location.port //'8080'
location.pathname // '/web/frame/vue/渲染和更新.html'
location.search // ''
location.hash // '#初次渲染过程'
```

### Hash 模式

通过哈希的变化触发路由的改变

特点：
- hash 变化会触发网页跳转，即浏览器的前进、后退
- hash 变化不会刷新页面，SPA 必需的特点
- hash 永远不会提交到 server 端

```js
/**
 * hash 变化，包括：
 * 1. JS 修改 url
 * 2. 手动修改 url 的 hash
 * 3. 浏览器前进、后退
 */
window.onhashchange = (event) => {
  console.log("old url：", event.oldURL);
  console.log("new url：", event.newURL);

  console.log("hash：", event.hash);
};

// 手动更新 hash
location.href = '#/vue/custom-v-model'
```

### HTML5 模式（History）

使用 url 规范的路由，但在跳转时不刷新页面

该模式需要[后端支持](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B)

```js
// 使用 pushState 更新路由，浏览器不会刷新页面
const state = { name: "page1" }
history.pushState(state, "", "page1")

// 监听浏览器前进和后退
window.onpopstate = (event) => {};
```

### 场景选择

to B 的系统推荐使用 hash，简单易用，对 url 规范不敏感。  
to C 的系统，可以考虑选择 H5 history，但需要服务端支持。  
能选择简单的，就别用复杂的，要考虑成本和收益。