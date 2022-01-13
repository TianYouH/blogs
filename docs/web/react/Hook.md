# Hook

Hook 是 React 16.8 的新增特性。  
它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性（让函数组件具有类组件得能力）。

<CodeGroup>
  <CodeGroupItem title="class">

```jsx
import React from "react";

class MyCount extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return <span>{this.state.count}</span>;
  }
}

export default MyCount;
```

  </CodeGroupItem>

  <CodeGroupItem title="function" active>

```jsx
import { useState, useEffect } from "react";

function MyCountFunc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <span>{count}</span>;
}

export default MyCountFunc;
```

  </CodeGroupItem>
</CodeGroup>

## State-Hooks

### useState

返回一个 state，以及更新 state 的函数。

```jsx
import { useState } from "react";

// 在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同。
const [state, setState] = useState(initialState);

// setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。
setState(newState);
```

#### 函数式更新

```jsx
// 如果新的 state 需要通过使用先前的 state 计算得出，
//  那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值。
setCount((c) => c + 1);
```

#### 惰性初始 state

```jsx
// initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。
// 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，
//  在函数中计算并返回初始的 state，此函数只在初始渲染时被调用。
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

### useReducer

useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

```jsx
const [state, dispatch] = useReducer(reducer, initialCount, init);
```

::: details 示例

```jsx
import { useReducer, useEffect } from "react";

function countReducer(state, action) {
  switch (action) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyCountReducer() {
  const [count, dispatchCount] = useReducer(countReducer, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatchCount("minus");
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <span>{count}</span>;
}

export default MyCountReducer;
```

:::

#### 惰性初始化

你可以选择惰性地创建初始 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。

```jsx
function init(initialCount) {
  return { count: initialCount };
}
// ****************************
const [state, dispatch] = useReducer(reducer, initialCount, init);
```

## Effect

### useEffect

与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。

useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。React 将在组件更新前刷新上一轮渲染的 effect。

```jsx
// useEffect(didUpdate);
useEffect(() => {
  console.log("useEffect start");
  return () => console.log("useEffect end");
}, [props.source]);
// 参数二 如果不传，每次state更新都会导致effect执行一遍

// 条件执行，依赖于第二个参数得传值。

// 如果传递一个空数组[]，这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，
// 所以它永远都不需要重复执行 并且 effect 内部的 props 和 state 就会一直持有其初始值。

// 如果传参[count]，将会在count值发生改变时执行一边。
```

### useLayoutEffect

其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。

但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。

> 尽可能使用标准的 useEffect 以避免阻塞视觉更新。

## useContext

`const value = useContext(MyContext);`

接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 value prop 决定。

当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

::: details 示例

1. 根目录下创建 lib 目录，在 lib 目录下创建 my-context.js 文件

```js
// my-context.js
import React from "react";

export default React.createContext("");
```

2. 在需要使用得组件的父组件添加 MyContext 组件, 并绑定关联值

```js
// _app.js
import { useState } from "react";
import { Button } from "antd";
import MyContext from "../lib/my-context";
import Layout from "../components/Layout.jsx";

function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState(0);

  return (
    <Layout>
      <Button onClick={() => setContext((o) => o + 1)}>
        更新 context 测试
      </Button>
      <MyContext.Provider value={context}>
        <Component {...pageProps} />
      </MyContext.Provider>
    </Layout>
  );
}

export default MyApp;
```

3. 在相关子组件中使用

```js
import { useContext } from "react";
import MyContext from "../../../lib/my-context";

function MyCountContext() {
  const context = useContext(MyContext);

  return <span>{context}</span>;
}

export default MyCountContext;
```

:::

## useRef

`const refContainer = useRef(initialValue);`

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

::: details 示例

```jsx
function MyCountRef() {
  const refButton = useRef();
  useEffect(() => {
    console.log("useEffect start");
    console.log("useRef refButton:", refButton);
    return () => console.log("useEffect end");
  }, []);
  return <Button ref={refButton}></Button>;
}
```

:::

## Memo

用于重复绘制性能优化 包含 memo useMemo useCallback

```jsx
import { useState, useReducer, memo, useMemo, useCallback } from "react";

function countReducer(state, action) {
  switch (action) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyCountMemo() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState("huang");

  // 使用 useMemo 声明config, 解决重新声明后内存指向不一样;
  // 参数二 是 config 是否重新声明取决于count值是否变化;
  // 结果：只要count不变，每次返回得值将是地址相同得对象;
  const config = useMemo(
    () => ({
      text: `count is ${count}`,
      color: count > 3 ? "red" : "blue",
    }),
    [count]
  );

  // 使用 useCallback 声明 handleButtonClick，
  // 保证 每次MyCountMemo重绘后返回地址一致得函数对象，
  const handleButtonClick = useCallback(() => dispatchCount("add"), []);

  // useMemo 也能完成 useCallback 功能
  // const handleButtonClick = useMemo(
  //   () => () => dispatchCount('add'),
  //   [],
  // )

  return (
    <div>
      {/* name 值得变化会引起 MyCountMemo 重新渲染， 
          MyCountMemo 的重新渲染会导致 config 重新被声明，
          config 重新被声明，也会导致Child重绘*/}
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <Child config={config} onButtonClick={handleButtonClick}></Child>
    </div>
  );
}

// memo 用于监听 Child props 是否发生变化（变化就更新），返回Boolean
// 如果不使用 memo 函数式组件将会因父组件更新而更新
const Child = memo(function Child({ onButtonClick, config }) {
  console.log("child render");
  return (
    <button onClick={onButtonClick} style={{ color: config.color }}>
      {config.text}
    </button>
  );
});

export default MyCountMemo;
```
