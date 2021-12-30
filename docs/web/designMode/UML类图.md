# UML 类图

Unified Modeling Language统一建模语言

类图，UML包含很多种图，和本课相关的是类图


| 类名 |
| - |
| +public属性名A：类型 |
| #protected属性名B：类型 |
| -private属性名C：类型 |
| +public方法名A(参数1,参数2):返回值类型 |
| #protected方法名B(参数1，参数2):返回值类型 |
| -private方法名C(参数1):返回值类型 |

示例-1

```js
class People {
  constructor(name, age){
    this.name = name;
    this.age = age
  }
  eat() {
    alert('吃饭饭')
  }
  speak() {
    alert("说话话")
  }
}
```

<!-- ![示例-1](/blogs/image/web/designMode/示例-1.png) -->
<img :src="$withBase('/image/web/designMode/示例-1.png')" alt="示例-1">

## 关系

- 泛化，表示继承
- 关联，表示引用

示例-2

```js
class People {
  constructor(name, honse) {
    this.name = name
    this.honse = honse
  }
  saySomething(){
  }
}

class A extends People {
  constructor(name, honse) {
    super(name, honse)
  }
  saySomething(){
    alert('I am A')
  }
}

class B extends People {
  constructor(name, honse){
    super(name, honse)
  }
  saySomething(){
    alert('I am B')
  }
}

class Honse {
  constructor(city) {
    this.city = city
  }
  showCity() {
    alert(`家在 ${this.city}`)
  }
}

// 测试
let aHouse = new House('北京')
let a = new A('aaa' , aHouse)
console.log(a) // a 有房子
let b = new B('bbb')
console.log(b) // b无房子
```

<!-- ![示例-2](/blogs/image/web/designMode/示例-2.png) -->
<img :src="$withBase('/image/web/designMode/示例-2.png')" alt="示例-2">
