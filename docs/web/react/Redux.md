# Redux

单项数据流状态管理工具

<img :src="$withBase('/image/web/react/redux.png')" alt="图片测试">

::: details 示例
```js
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"; // 

const initialState = {
  count: 0,
};

const userInitialState = {
  username: "huang",
};

const ADD = "ADD";

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      // 一定要返回新的对象，否则可能会导致页面更新失败
      // 直接更新属性值，会影响react去判断我们的组件是否需要更新（对比地址结果相等，导致不渲染绘制）
      // return state.count + 1;
      console.log("你号是", action.number);
      return { count: state.count + (action.number || 1) };
    default:
      return state;
  }
}

const UPDATE_USERNAME = "UPDATE_USERNAME";

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name,
      };
    default:
      return state;
  }
}

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// const store = createStore(counterReducer, initialState);
const store = createStore(
  allReducers,
  {
    counter: initialState,
    user: userInitialState,
  },
  applyMiddleware(ReduxThunk) // 使用中间件
);

// action creatore
function add(num) {
  return {
    type: ADD,
    number: num
  }
}

function addAsync(num) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add(num))
    }, 1000);
  }
}

store.dispatch(add(3)) // 3

store.subscribe(() => {
  console.log('changed', store.getState());
})

store.dispatch({ type: ADD }) // 4

store.dispatch(addAsync(7)) // 11

export default store;
```
:::

## reducer

- 纯粹的方法，不应该有任何副作用
- 有任何数据更新应该返回新的对象
- 可以通过combineReducers进行合并

## action

## 使用react-redux连接react和redux

1. 安装 react-redux
2. 注入redux
```js
// _app.js

import { Provider } from "react-redux";
import store from "../store/store";

// *********************************

<Layout>
  <Provider store={store}>
    <MyContext.Provider value={context}>
      <Component {...pageProps} />
    </MyContext.Provider>
  </Provider>
</Layout>
```
3. 组件关联并使用connect
```js
import { connect } from 'react-redux';

// *********************************

function App({ counter, username, rename, add}) {
  return (
    <>
      <div>
        <p>redux-counter：{counter}</p>
        <p>redux-username：{username}</p>
        <input value={username} onChange={e=> rename(e.target.value)} ></input>
        <Button onClick={() => add(counter)} >redux-add</Button>
      </div>
    </>
  );
}

export default connect(
function mapStateToProps(state) {
  return {
    counter: state.counter.count,
    username: state.user.username,
  }
},
function mapDispatchToProps(dispatch) {
  return {
    add: num => dispatch({type: "ADD", number: num}),
    rename: name => dispatch({type: "UPDATE_USERNAME", name})
  }
}
)(App);

```



## middleware

### redux-thunk

redux 中间件：使 action 支持异步

1. 引入 redux-thunk 库

```js
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
```

2. 使用

```js
const store = createStore(
  allReducers,
  {
    counter: initialState,
    user: userInitialState,
  },
  applyMiddleware(ReduxThunk) // 使用中间件
);
```

3. 测试

```js
function addAsync(num) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add(num))
    }, 1000);
  }
}
```

### Redux Devtools

浏览器 redux 调试工具

1. 下载对应浏览器插件

[Edge 下载](https://microsoftedge.microsoft.com/addons/search/redux%20devtools)

2. 项目安装插件依赖包

`yarn add redux-devtools-extension`

3. 项目绑定工具插件

```js
// store.js
import { composeWithDevTools } from 'redux-devtools-extension' 

// ***************************************

const store = createStore(
  allReducers,
  {
    counter: initialState,
    user: userInitialState,
  },
  composeWithDevTools(applyMiddleware(ReduxThunk)) // 使用中间件
);
```

4. 完成配置