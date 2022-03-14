# SoftwareArchitecturePatterns (软件架构模式)

## Web 1.0 时代

在 web1.0 时代，并没有前端的概念。开发一个web应用多数采用ASP.NET/Java/PHP编写，项目通常由多个aspx/jsp/php文件构成，每个文件中同时包含了HTML、CSS、JavaScript、C#/Java/PHP代码，系统整体架构可能是这样子的:

<img :src="$withBase('/image/web/software-architecture-patterns/softwareArchitecturePatterns1.png')" alt="示例">

这种架构的好处是简单快捷，但是，缺点也非常明显：JSP代码难以维护。

为了让开发更加便捷，代码更易维护，前后端职责更清晰。便衍生出MVC开发模式和框架，前端展示以模板的形式出现。典型的框架就是Spring、Structs、Hibernate。整体框架如图所示:

<img :src="$withBase('/image/web/software-architecture-patterns/softwareArchitecturePatterns2.png')" alt="示例">

使用这种分层架构，职责清晰，代码易维护。但这里的MVC仅限于后端，前后端形成了一定的分离，前端只完成了后端开发中的view层。

但是，同样的这种模式存在着一些:

1. 前端页面开发效率不高
2. 前后端职责不清

## Web 2.0 时代

自从Gmail的出现,ajax技术开始风靡全球。有了ajax之后，前后端的职责就更加清晰了。因为前端可以通过Ajax与后端进行数据交互，因此，整体的架构图也变化成了下面这幅图:

<img :src="$withBase('/image/web/software-architecture-patterns/softwareArchitecturePatterns3.png')" alt="示例">

通过ajax与后台服务器进行数据交换，前端开发人员，只需要开发页面这部分内容，数据可由后台进行提供。而且ajax可以使得页面实现部分刷新，减少了服务端负载和流量消耗，用户体验也更佳。这时，才开始有专职的前端工程师。同时前端的类库也慢慢的开始发展，最著名的就是jQuery了。

当然，此架构也存在问题: 缺乏可行的开发模式承载更复杂的业务需求，页面内容都杂糅在一起，一旦应用规模增大，就会导致难以维护了。因此，前端的MVC也随之而来。

## 总结

- 这三者都是框架模式，它们设计的目标都是为了解决Model和View的耦合问题。
- MVC模式出现较早主要应用在后端，如Spring MVC、ASP.NET MVC等，在前端领域的早期也有应用，如Backbone.js。它的优点是分层清晰，缺点是数据流混乱，灵活性带来的维护性问题。
- MVP模式在是MC的进化形式,Presenter作为中间层负责MV通信，解决了两者耦合问题，但P层过于臃肿会导致维护问题。
- MWVM模式在前端领域有广泛应用，它不仅解决MNV耦合问题，还同时解决了维护两者映射关系的大量繁杂代码和DOM操作代码，在提高开发效率、可读性同时还保持了优越的性能表现。

> ref:  
> [https://www.bilibili.com/video/BV137411N7aB](https://www.bilibili.com/video/BV137411N7aB)