# Javascript

JavaScript是一种专为与网页交互而设计的脚本语言，由下列三个不同的部分组成：
- ECAMScript，由ECAM-262定义，提供核心语言功能；
- 文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
- 浏览器对象模型（BOM），提供与浏览器交互的方法和接口；

## 七种基本类型

- 布尔值（`Boolean`），有 2 个值分别是：true 和 false.
- 数字（`Number`），整数或浮点数，例如： 42 或者 3.14159。
- 任意精度的整数 (`BigInt`) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
- 字符串（`String`），字符串是一串表示文本值的字符序列，例如："Howdy" 。
- 代表（`Symbol`）( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
- 对象（`Object`、`Array`）。
- null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
- undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。

## 变量类型和计算

1. typeof 运算符

```js
/*
 *识别所有值类型
 *识别函数
 *判断是否是引用类型（不可再细分)
*/
typeof "Bill"              // 返回 "string"
typeof 3.14                // 返回 "number"
typeof true                // 返回 "boolean"
typeof false               // 返回 "boolean"
typeof x                   // 返回 "undefined" (假如 x 没有值)

typeof {name:'Bill', age:62} // 返回 "object"
typeof null                  // 返回 "object"
typeof [1,2,3,4]
// 返回 "object" typeof 运算符把数组返回为 "object"，因为在 JavaScript 中数组即对象。

typeof function myFunc(){}   // 返回 "function"
```

2. 字符串拼接

```js
const a = 100 + 10; //110
const b = 140 + "10"; // '14010'
const b = "10" + 140; // '10140'
const c = true + "10"; // 'true10'
```

3. == 运算符

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

4. if 语句和逻辑运算

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
JS是单线程语言;
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

Event Loop是一个程序结构，用于等待和发送消息和事件

简单说，就是在程序中设置两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可以译为"消息线程"）。

```text
同步代码，一行一行放在Call Stack（调用栈） 执行

当遇到异步代码，会先“记录”下Web Apis，（等待时机定时、网络请求等)
时机到了，就移动到Callback Queue

当Call Stack为空(即同步代码执行完)
执行当前的微任务->尝试DOM渲染->Event Loop开始工作

Event Loop 轮询查找Callback Queue ，如有则移动到Call Stack 执行
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

> ref:   
> [什么是 Event Loop？](http://www.ruanyifeng.com/blog/2013/10/event_loop.html)