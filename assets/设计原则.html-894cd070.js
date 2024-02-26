import{_ as l,p as i,q as a,a1 as e}from"./framework-8fa3e4ce.js";const r={},u=e('<h1 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h1><h2 id="如何设计" tabindex="-1"><a class="header-anchor" href="#如何设计" aria-hidden="true">#</a> 如何设计？</h2><p>描述</p><ul><li>即按照哪一种思路或者标准来实现功能;</li><li>功能相同，可以有不同设计方案来实现;</li><li>伴随着需求增加，设计的作用才能体现出来;</li></ul><p>《UNIX/LINUX设计哲学》</p><ul><li><p>准则</p><ol><li>小即时美;</li><li>让每个程序只做好一件事;</li><li>快速建立原型;</li><li>舍弃高效率而取可移植性;</li><li>采用纯文本来存储数据;</li><li>充分利用软件的杠杆效应（软件复用）;</li><li>使用shell脚本来提高杠杆效应和可移植性;</li><li>避免强制性的用户界面;</li><li>让每个程序都称为过滤器;</li></ol></li><li><p>小准则</p><ul><li>允许用户定制环境;</li><li>尽量使操作系统内核小而轻量化;</li><li>使用小写字母并尽量简短;</li><li>沉默是金;</li><li>各部分之和大于整体;</li><li>寻求90%的解决方案;</li></ul></li></ul><h2 id="solid五大设计原则" tabindex="-1"><a class="header-anchor" href="#solid五大设计原则" aria-hidden="true">#</a> SOLID五大设计原则</h2><ul><li>S-单一职责原则; <ul><li>一个程序只做好一件事;</li><li>如果功能过于复杂就拆分开，每个部分保持独立;</li></ul></li><li>O-开放封闭原则; <ul><li>对扩展开放，对修改封闭;</li><li>增加需求时，扩展新代码，而非修改已有代码;</li><li>这是软件设计的终极目标;</li></ul></li><li>L-李氏置换原则; <ul><li>子类能覆盖父类;</li><li>父类能出现的地方子类就能出现;</li><li>S中使用较少（弱类型&amp;继承使用较少);</li></ul></li><li>I-接口独立原则; <ul><li>保持接口的单一独立，避免出现“胖接口”;</li><li>JS中是没有接口（typescript除外），使用较少;</li><li>类似于单一职责原则，这里更关注接口;</li></ul></li><li>D–依赖导致原则; <ul><li>面向接口编程，依赖于抽象而不依赖于具体;</li><li>使用方只关注接口而不关注具体类的实现;</li><li>JS中使用较少(没有接口&amp;弱类型);</li></ul></li></ul><h2 id="从设计到模式" tabindex="-1"><a class="header-anchor" href="#从设计到模式" aria-hidden="true">#</a> 从设计到模式</h2><ul><li>设计;</li><li>模式;</li><li>分开;</li></ul><h2 id="_23种设计模式" tabindex="-1"><a class="header-anchor" href="#_23种设计模式" aria-hidden="true">#</a> 23种设计模式</h2><ul><li>创建型; <ul><li>工厂模式(工厂方法模式，抽象工厂模式，建造者模式);</li><li>单例模式;</li><li>原型模式;</li></ul></li><li>结构型（组合型）; <ul><li>适配器模式;</li><li>装饰器模式;</li><li>代理模式;</li><li>外观模式;</li><li>桥接模式;</li><li>组合模式;</li><li>享元模式;</li></ul></li><li>行为型; <ul><li>策略模式;</li><li>模板方法模式;</li><li>观察者模式;</li><li>迭代器模式;</li><li>职责连模式;</li><li>命令模式;</li><li>备忘录模式;</li><li>状态模式;</li><li>访问者模式;</li><li>中介者模式;</li><li>解释器模式;</li></ul></li></ul>',12),h=[u];function d(t,n){return i(),a("div",null,h)}const c=l(r,[["render",d],["__file","设计原则.html.vue"]]);export{c as default};
