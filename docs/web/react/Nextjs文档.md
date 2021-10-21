# [Nextjs 文档](https://www.nextjs.cn/)

## 目录结构

- 📁.next
- 📁node_modules
- 📁pages 包含的每个文件都是页面上的一个路由
  - 📄_app.js
- 📄server.js

## [页面跳转](https://nextjs-cn.com/docs/api-reference/next/link)

- link 组件
  - 进行前端路由跳转
  - 自身不渲染任何内容，需要指定渲染内容
  - 监听传入节点 onclick 事件
  - 只接受唯一结点，不支持兄弟节点

```jsx
import Link from "next/link";

function Home() {
  return (
    <Link href="/about">
      <a>About Us</a>
    </Link>
  );
}

export default Home;
```

- Router 模块手动跳转

```jsx
import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
```

## [动态路由](https://nextjs-cn.com/docs/routing/dynamic-routes)
 
nextjs中实现路由的信息附带，只能通过query，不能使用params。

发起query请求
```jsx
// router.push('/router/dynamic-parameters?id=456')
router.push({
  pathname: '/router/dynamic-parameters',
  query: {
    id: '12345'
  }
})
```

获取动态参数
```jsx
import { withRouter } from 'next/router'
import Comp from '../components/comp'

const A = ({ router }) => <Comp>{router.query.id}</Comp>

export default withRouter(A)
```
```jsx
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

## 路由映射

单页前端映射

通过 Link 标签 上的 as 属性 映射

```jsx
import Link from 'next/link'
import { Button } from 'antd';

function ActiveLink() {
  return (
    <div>
      <Link href="/router/dynamic-parameters?id=666" as="huang" >
        <Button >
          动态映射 测试
        </Button>
      </Link>
    </div>
  )
}
export default ActiveLink
```

通过Router映射

```jsx
router.push({
    pathname: '/router/dynamic-parameters',
    query: { id: '12345' }
  }, 
  'nihao' // 动态映射测试
)
```

> 提示: 上述路由映射方式 会导致在映射页面刷新导致404 错误;

后端映射

```js
// server.js
const router = new Router();

// 匹配映射路由
router.get('/huang/:id',async (ctx) => {
  const id = ctx.params.id
  await handle(ctx.req, ctx.res, {
    pathname: '/router/dynamic-parameters', // 映射目标页面
    query: { id }
  })
  ctx.respond = false;
})

server.use(router.routes());
```
对应路由页面需要配置 getInitialProps 保证后端映射 query 数据同步(不然会丢失)
```jsx
DynamicParameters.getInitialProps = async (res) => {
  const id = res.query.id
  return { id }
};
```

## 路由变化的钩子 router.events

- routeChangeStart(url, { shallow })
  - 当路由开始改变时触发
- routeChangeComplete(url, { shallow })
  - 当路由完全改变时触发
- routeChangeError(err, url, { shallow })
  - 当更改路由时出现错误或路由加载被取消时触发
- beforeHistoryChange(url, { shallow })
  - 在更改浏览器历史记录之前触发

- hashChangeStart(url, { shallow })
  - 当哈希值改变而页面不变时触发
- hashChangeComplete(url, { shallow })
  - 当哈希已经改变，但页面没有改变时

[使用示例-1](https://www.nextjs.cn/docs/api-reference/next/router#routerevents)
[使用示例-2](https://github.com/TianYouH/react-nextjs/blob/master/pages/_app.js)

## [getInitialProps](https://www.nextjs.cn/docs/api-reference/data-fetching/getInitialProps)

获取服务端预加载数据，同步当前页面刷新后query数据

推荐使用
- getStaticProps
- getServerSideProps
    - 这些新的获取数据的方法使你可以在静态生成（static generation）和服务器端渲染（server-side rendering）之间进行精细控制。更多信息请参考 页面（Pages） 和 数据获取 文档

## [自定义App](https://www.nextjs.cn/docs/advanced-features/custom-app)

- 固定Layout
- 保持一些公用的状态
- 给页面传入一些自定义数据
- 自定义错误处理

```js
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('beforeHistoryChange', handleRouteChange)
    router.events.on('hashChangeStart', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('beforeHistoryChange', handleRouteChange)
      router.events.off('hashChangeStart', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
```
