# Javascript

JavaScript是一种专为与网页交互而设计的脚本语言，由下列三个不同的部分组成：
- ECAMScript，由ECAM-262定义，提供核心语言功能；
- 文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
- 浏览器对象模型（BOM），提供与浏览器交互的方法和接口；

## 变量类型和计算

1. 值类型

```js
let a = 100;
let b = a;
a = 200;
console.log(b); // 100

// 常见的值类型
let a; // undefined
const s = "abc";
const n = 100;
const b = true;
const s = Symbol("s");
```

2. 引用类型

```js
let a = { age: 20 };
let b = a;
b.age = 21;
console.log(a.age); // 21

// 常见引用类型
const obj = { x: 100 };
const arr = ["a", "b", "c "];
const n = null; // 特殊引用类型，指针指向为空地址

// 特殊引用类型，但不用于存储数据，所以没有“拷贝、复制函数"这一说，也可做为第三种函数类型
function fn() {}
```

3. typeof 运算符

```text
识别所有值类型
识别函数
判断是否是引用类型（不可再细分)
```

4. 字符串拼接

```js
const a = 100 + 10; //110
const b = 140 + "10"; //' 10010'
const c = true + "10"; // 'true10'
```

5. ==运算符

```js
100 == "100"; // true
0 == ""; // true
0 == false; // true
false = ""; // true
null == undefined; // true

// 除了== null之外，其他都一律用===，例如:
const obj = { x: 100 };
if (obj.a == null) {
}
//相当于:
// if (obj.a === null || obj.a === undefined) { }
```

6. if 语句和逻辑运算

```text
truly变量: !!a === true的变量
falsely变量: !!a === false的变量
```

```js
console.log(10 && 0); // 0
console.log("" || "abc"); // 'abc'
console.log(!window.abc); // true
```

## 异步和单线程

```text
基于JS是单线程语言;
异步不会阻塞代码执行;
同步会阻塞代码执行;

场景：
网络请求，如ajax图片加载
定时任务，如setTimeout
```

1. promise 加载图片

```js
function (src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => {
      resolve(imf)
    }
    img.onerror = () => {
      regect(new Error(`图片加载失败 ${src}`))
    }
    img.src = src;
  })
}
```

## JS 异步

1. event loop (事件循环/事件轮询)

```text
同步代码，一行一行放在Call Stack 执行
遇到异步，会先“记录”下Web Apis，等待时机（定时、网络请求等)
时机到了，就移动到Callback Queue
如Call Stack为空
(即同步代码执行完) 执行当前的微任务、尝试DOM渲染、
Event Loop开始工作
轮询查找Callback Queue ，如有则移动到Call Stack 执行
然后继续轮询查找(永动机一样)
```

2. 微任务/宏任务

```text
宏任务: setTimeout , setInterval , Ajax , DOM事件
微任务: Promise async/await
微任务执行时机比宏任务要早(先记住)

宏任务:DOM渲染后触发，如setTimeout
微任务:DOM渲染前触发，如Promise

```

3. promise 进阶

```text
三种状态：
pending resolved rejected

状态的表现和变化：
pending —> resolved 或 pending —> rejected
 状态不可逆

then和catch对状态的影响：
then正常返回resolved ，里面有报错则返回rejected
catch正常返回resolved ，里面有报错则返回rejected
```

4. async/await

```text
async/await 和Promise的关系：
执行async函数，返回的是Promise对象
await相当于Promise的then
try...catch可捕获异常，代替了Promise的catch
```

5. for...of

```text
for ... in ( 以及forEach for )是常规的同步遍历
for ... of 常用于异步的遍历
```

