# Javascript

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

## 原型和原型链

[测试地址](https://tianyouh.github.io/summarize/Javascript/1/)

1. class

```text
constructor
属性
方法

继承：
extends
super
扩展或重写方法

class是ES6语法规范，由ECMA委员会发布
ECMA只规定语法规则，即我们代码的书写规范，不规定如何实现
主要实现方式都是V8引擎的实现方式，也是主流的
```

2. 类型判断-instanceof

顺着隐式原型向上找对应到的显式原型

```js
xialuo instanceof Student // true
xialuo instanceof People // true
xialuo instanceof Object // true
[] instanceof Array // true
[] instanceof Object // true
{} instanceof Object // true
```

3. 原型关系

```text
每个class都有显示原型prototype
每个实例都有隐式原型_proto_
实例的_proto_指向对应class的prototype

基于原型的执行规则：
获取属性xialuo.name 或执行方法xialuo.sayhi() 时
先在自身属性和方法寻找
如果找不到则自动去__proto__中查找
```

<!-- ![图例](/blogs/image/web/javascript/原型链.jpg) -->
<img :src="$withBase('/image/web/javascript/原型链.jpg')" alt="图例">

4. 手写简易 jQuery 考虑插件和扩展性 [链接](/web/knowledge/常用手写函数.html#bind-手写)

## 作用域和闭包

1. 作用域

```text
全局作用域
函数作用域
块级作用域(ES6新增)
```

```js
//ES6 块级作用域
if (true) {
  let x = 100;
}
console.log(x); // 会报错
```

2. 自由变量

```text
一个变量在当前作用域没有定义，但被使用了
向上级作用域，一层一层依次寻找，直至找到为止
如果到全局作用域都没找到，则报错 xx is not defined
```

3. 闭包

```text
作用域应用的特殊情况，有两种表现：
函数作为参数被传递
函数作为返回值被返回

闭包: 自由变量的查找，是在函数定义的地方，向上级作用域查找
不是在执行的地方!!!|
```

4. this

```text
this取什么值，是在函数执行时确定的，不是在函数定义时确定的；

this的不同应用场景，如何取值：

当做普通函数被调用      window
使用call apply bind   传什么绑定什么
作为对象方法调用        对象本身
在class方法中调用      实例本身
箭头函数              取值是取上级作用域的this.
```

5. 手写 bind 函数 [链接](/web/knowledge/常用手写函数.html#bind-手写)

6. 实际开发中闭包的应用

```text
隐藏数据
```

```js
// 闭包隐藏数据,只提供 API
function createCache() {
  const data = {}; // 闭包中的数据，被隐藏，不被外界访问
  return {
    set: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key];
    },
  };
}

const c = createCache();
c.set("a", 100);
console.log(c.get("a"));
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

