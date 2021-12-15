# [vue-cli](https://cli.vuejs.org/zh/)

## 自定义 环境变量

版本:@vue/cli 4.5.15

1. 在 package.json 中建立自定义环境 启动脚本

`"serve": "vue-cli-service serve --mode mock",`

2. 在根目录下 创建 环境 文件

.env.mock
```
NODE_ENV='development'
VUE_APP_DATA='mock'
```

3. 测试

通过 `npm run serve` 启动项目。通过`console.log(process.env)`打印变量
```js
{
    "NODE_ENV": "development",
    "VUE_APP_DATA": "mock",
    "BASE_URL": "/"
}
```

> [参考文档](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F%E5%92%8C%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
