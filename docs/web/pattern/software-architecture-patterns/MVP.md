# MVP

## 什么是MVP?

`MVP（Model-View-Presenter）`是MVC的改良模式，由IBM的子公司Taligent提出。和MVC的相同之处在于：Controller/Presenter负责业务逻辑，Model管理数据，View负责显示只不过是将 Controller 改名为 Presenter，同时改变了通信方向。

MVP与MVC很接近，P指的是Presenter，presenter可以理解为一个中间人，它负责着View和Model之间的数据流动，防止View和Model之间直接交流。我们可以看一下图示:

<img :src="$withBase('/image/web/software-architecture-patterns/MVP1.jpg')" alt="示例">

M、V、P之间双向通信。  
View 与 Model 不通信，都通过 Presenter 传递。Presenter完全把Model和View进行了分离，主要的程序逻辑在Presenter里实现。  
View 非常薄，不部署任何业务逻辑，称为”被动视图”（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。  
Presenter与具体的View是没有直接关联的，而是通过定义好的接口进行交互，从而使得在变更View时候可以保持Presenter的不变，这样就可以重用。不仅如此，还可以编写测试用的View，模拟用户的各种操作，从而实现对Presenter的测试–从而不需要使用自动化的测试工具。  

## MVP的优缺点

### 优点

模型与视图完全分离，我们可以修改视图而不影响模型；  
可以更高效地使用模型，因为所有的交互都发生在一个地方——Presenter内部；  
我们可以将一个Presenter用于多个视图，而不需要改变Presenter的逻辑。这个特性非常的有用，因为视图的变化总是比模型的变化频繁；  
如果我们把逻辑放在Presenter中，那么我们就可以脱离用户接口来测试这些逻辑（单元测试）。  

## 缺点

视图和Presenter的交互会过于频繁，使得他们的联系过于紧密。也就是说，一旦视图变更了，presenter也要变更。
