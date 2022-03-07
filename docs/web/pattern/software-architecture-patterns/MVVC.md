# MVVC

## 什么是MVVM？  

<img :src="$withBase('/image/web/software-architecture-patterns/MVVM1.jpg')" alt="示例">

`MVVM（Model–View–Viewmodel）`

## MVVM涉及到的概念？  

- M(odel)层：模型，定义数据结构。  
- C(ontroller)层：实现业务逻辑，数据的增删改查。在MVVM模式中一般把C层算在M层中，（只有在理想的双向绑定模式下，Controller 才会完全的消失。这种理想状态一般不存在）  
- ViewModel层：顾名思义是视图View的模型、映射和显示逻辑（如if for等，非业务逻辑），另外绑定器也在此层。  ViewModel是基于视图开发的一套模型，如果你的应用是给盲人用的，那么也可以开发一套基于Audio的模型AudioModel。  
- V(iew)层：将ViewModel通过特定的GUI展示出来，并在GUI控件上绑定视图交互事件，V(iew)一般由MVVM框架自动生成在浏览器中。

## MVVM中M-V-V-M之间的关系?  

在MVVM架构下，View 和 Model 之间其实并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，ViewModel里面包含DOM Listeners和Data Bindings，DOM Listeners和Data Bindings是实现双向绑定的关键。DOM Listeners监听页面所有View层DOM元素的变化，当发生变化，Model层的数据随之变化；Data Bindings监听Model层的数据，当数据发生变化，View层的DOM元素随之变化。

## MVVM模式的优缺点

MVVM模式原先的MVP模式至少省下30%编码量，甚至能省下70%DOM操作，因为用MVP模式的话主要是在进行DOM操作。

### 优点

低耦合。View可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。  
可重用性。可以把一些视图的逻辑放在ViewModel里面，让很多View重用这段视图逻辑。  
独立开发。开发人员可以专注与业务逻辑和数据的开发(ViewModel)。设计人员可以专注于界面(View)的设计。  
可测试性。可以针对ViewModel来对界面(View)进行测试

### 缺点

学习成本高。
DEBUG困难

## MVVM应用场景

针对具有复杂交互逻辑的前端应用
提供基础的架构抽象
通过Ajax数据持久化，保证前端用户体验

## 常见的MVVM框架

Vue.js，AngularJs，ReactJs


> ref：  
> [前端技术之MVVM软件架构模式](https://zhuanlan.zhihu.com/p/79899786)
