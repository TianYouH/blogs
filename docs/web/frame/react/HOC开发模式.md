# HOC开发模式

用于将一些通用功能，代码复用

接收组件作为参数并返回新的组件

react-redux 库里的 connect 函数就是一个HOC模式的函数

::: details 示例
1. 定义 test-hoc.js 文件
```js
export default (Comp) => {
  function TestHocComp({ Component, pageProps, ...rest }) {
    console.log("testHoc: ", Component, pageProps);

    if (pageProps) {
      pageProps.test = "123";
    }

    return <Comp Component={Component} pageProps={pageProps} {...rest}></Comp>;
  }
  // TestHocComp.getInitialProps = Comp.getInitialProps;
  return TestHocComp;
};
```
2. 使用
```js
// _app.js
import TestHocComp from '../lib/test-hoc'

// **************************************

export default TestHocComp(MyApp);

```

:::