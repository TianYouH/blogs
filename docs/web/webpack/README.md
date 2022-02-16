# Webpack

webpack 不是解释器，而是一个模块打包工具（module bundler），只能认识 import 等简单的语法。
不仅有 es(import) 这样的模块规范，还有 commonJS(require())、CMD、AMD(define和require) 这样的规范，webpack 对这些模块规范一样可以识别。

webpack 是一个模块打包工具，可以使用它来管理项目中的模块依赖，并编译输出模块所需要的静态文件。它可以很好的管理、打包模块开发中所用到的 HTML、CSS、js 和静态文件（图片、文字）等，让开发更高效。对于不同类型的依赖，webpack 有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生产优化的静态资源。

相关知识点

- [Modules](https://webpack.docschina.org/concepts/modules/)

  [API Modules](https://webpack.docschina.org/api/module-methods/)

- [Loader](https://webpack.docschina.org/concepts/loaders/)

  告诉 webpack 对于非 JS 文件如何打包

- [Plugin](https://webpack.docschina.org/plugins/)

  webpack 有一个丰富的插件接口。webpack 本身的大部分特性都使用这个插件接口。这使得 webpack 很灵活。

- [SourceMap](https://webpack.docschina.org/configuration/devtool/)

  代码映射关系

- [WebpackDevServer](https://webpack.docschina.org/configuration/dev-server/)

  webpack-dev-server 可用于快速开发应用程序。

- [HMR](https://webpack.docschina.org/guides/hot-module-replacement/)

  模块热替换(hot module replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新所有类型的模块，而无需完全刷新。

- [CodeSplitting](https://webpack.docschina.org/guides/code-splitting/) 代码分离

- [TreeShaking](https://webpack.docschina.org/guides/tree-shaking/) 用来去掉没有引用的内容，只支持 EsModule 的引入方式

  配置方式：mode 为 development 时是默认不带 tree shaking 的通过添加 optimization:{usedExports: true}的配置项来加上，同时需要在 package.json 里添加"sideEffects":false 的配置项，sideEffects 的值还可以为数组，表示不需要被 tree shaking 掉的内容，比如 css，并没有导出任何内容，可能就会被 tree shaking 掉出现问题，这时可以设置为["*.css"]

- [打包分析](https://webpack.docschina.org/guides/code-splitting/#bundle-analysis)

- [PreLoading、PreFetching](https://webpack.docschina.org/guides/code-splitting/#prefetchingpreloading-modules) 预获取/预加载模块

  preload chunk 会在父 chunk 加载时，以并行方式开始加载。prefetch chunk 会在父 chunk 加载结束后开始加载。  
  preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。  
  preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻。  
  浏览器支持程度不同。

- Caching 浏览器缓存
```text:no-line-numbers
清除浏览器的缓存：在使用webpack的时候因为线上代码修改的时候因为代码的名字没有改变导致浏览器在加载网页的时候，取缓存中的代码，导致没有及时的获取最新的代码，这时候就要清除浏览器的缓存，
output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  }
4版本的webpack
contenthash的作用是：随意一个hash值这个值，根据打包的内容是否改变值，如果两次打包的内容都没有改变，contenthash是一样的。
对于老版本的webpack需要用
optimization： {
    runtimeChunk: {
      name: 'runtime'
    },
}，
这个会把逻辑代码和所用到的关系单独出来一个runtime的js文件
但是有时候这个文件会发生没有改变源代码但是，代码的文件名发生了改变，
这时候就需要做一个格外的配置，生成的runtime文件就是逻辑代码和包的关系，这个关系单独出来。
解决源代码的文件名改变
```
- [Shimming](https://webpack.docschina.org/guides/shimming/) 预置依赖 解决重复引入第三方库 垫片

```js
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      _join: ["lodash", "join"],
    }),
  ],
};
```

- 环境变量

```js
//package.json
"build":"webpack --env.production --config ./build/webpack.prod.js"

// webpack.common.js
module.exports = (env) => {
  if(env&&env.production) {
    return merge(commonconfig,proConfig)
  } else {
    return merge(commonconfig,devConfig)
  }
}
```

- Babel

- Library

- Eslint

- PWA

- Mode

- 性能优化

- 多页应用

- 原理
