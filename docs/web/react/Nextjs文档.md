# Nextjs 文档

官网：https://www.nextjs.cn/

## 目录结构

- 📁.next
- 📁node_modules
- 📁pages 包含的每个文件都是页面上的一个路由
  - 📄_app.js
- 📄server.js

## 页面跳转

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