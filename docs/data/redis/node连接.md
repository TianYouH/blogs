# node 连接

## 使用 ioredis 模块

1. 安装 `yarn add ioredis`
2. 测试 

```js
const Redis = require('ioredis'); 

const redis = new Redis(); // 这里使用redis默认配置

async function test() {
  await redis.set("b", 666)
  const keys = await redis.keys('*');
  console.log('获取到的key：', keys);
}

test();
```
```bash
node .\test\test-redis.js
```