# VueRouter

vue-router 是 vue 全家桶的标配之一，稍微复杂一点的 SPA(单页应用) ，都需要使用路由。

示例参考 来自 v4.x 版本文档

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

相关API:

[window.onhashchange](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowEventHandlers/onhashchange)

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

相关API:

[History.pushState()](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)

[window.onpopstate](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowEventHandlers/onpopstate)

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

## 导航守卫

1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫(2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 全局守卫

```js
const router = createRouter({ ... })

/**
 * 全局前置守卫
 * @param {object} to 即将要进入的目标
 * @param {object} from 即将要进入的目标
 * @param {function} next 可选 可以接收一个指定路由，或者调用下一个导航守卫
 * @returns {*} 可选 默认 则导航是有效的，并调用下一个导航守卫； 1.false 取消当前的导航； 2.路由地址（{name: 'home'}） 跳转到指定地址；
 */
router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  return false
})

// 全局解析守卫
// router.beforeResolve 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。
router.beforeResolve(async to => {
  if (to.meta.requiresCamera) {
    try {
      await askForCameraPermission()
    } catch (error) {
      if (error instanceof NotAllowedError) {
        // ... 处理错误，然后取消导航
        return false
      } else {
        // 意料之外的错误，取消导航并把错误传给全局处理器
        throw error
      }
    }
  }
})

/**
 * 全局后置钩子
 * @abstract 该钩子不会接受 next 函数也不会改变导航本身
 * @param {object} to 即将要进入的目标
 * @param {object} from 即将要进入的目标
 * @param {*} failure aborted：在导航守卫中返回 false 中断了本次导航。cancelled： 在当前导航还没有完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 router.push。duplicated：导航被阻止，因为我们已经在目标位置了。
 */
router.afterEach((to, from, failure) => {
  if (!failure) sendToAnalytics(to.fullPath)
})
```

### 路由守卫

beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。

```js
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
```

### 组件内守卫

```js
const UserDetails = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  },
}
```