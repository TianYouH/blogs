# WebApi

## DOM

1. DOM 本质

```text
树形结构(DOM树)
特定的XML数据结构
```

2. DOM 节点操作

```js
const div1 = document.getElementById("div1"); //元素

const divList = document.getElementsByTagName("div");
console.log(divList.length);
console.log(divList[0]);
//集合
const containerList = document.getElementsByClassName(".container");
//集合
const pList = document.querySelectorAll("p"); //集合
```

3. DOM 结构操作

```js
const div1 = document.getElementById("div1");
// 添加新节点
const p1 = document.createElement("p");
p1.innerHTML = "this is p1";
// 添加新创建的元素
div1.appendChild(p1);
// 移动已有节点。注意是移动!!!
const p2 = document.getElementById("p2");
div1.appendChild(p2);
```

4. DOM 性能

```text
DOM操作非常“昂贵”，避免频繁的DOM操作
对DOM查询做缓存
将频繁操作改为一次性操作
```

```js
// 对DOM查询做缓存

// 不缓存DOM查询结果
for (let = 0; i < document.getElementsByTagName("p").length; i++) {
  //每次循环，都会计算length ，频繁进行DOM查询
}
//缓存DOM查询结果
const pList = document.getElementsByTagName("p");
const length = pList.length;
for (let i = 0; i < length; i++) {
  //缓存length ,只进行一次DOM查询
}

// 将频繁操作改为一次性操作
const listNode = document.getElementById("list");
//创建一个文档片段，此时还没有插入到DOM树中
const frag = document.createDocumentFragment();
//执行插入
for (let x = 0; x < i0; x++) {
  const li = document.createElement("li");
  li.innerHTML = "List item " + x;
  frag.appendChild(li);
}
//都完成之后，再插入到DOM树中
listNode.appendChild(frag);
```

5. attr 和 property 的区别

```js
// property: 修改对象属性，不会体现到html结构中 推荐
// attribute: 修改html属性，会改变html结构
// 两者都有可能引起DOM重新渲染

// property
p1.style.width = "100px";
p1.className = "red ";

// attribute
p1.setAttribute("data-name", "imooc");
console.log(p1.getAttribute("data-name "));
```

8. 一次性插入多个 DOM 节点，考虑性能

## BOM

## 事件绑定

## ajax

## 存储
