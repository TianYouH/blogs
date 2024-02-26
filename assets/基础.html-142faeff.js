import{_ as n,p as d,q as a,Q as s,R as l,a1 as e}from"./framework-8fa3e4ce.js";const r={},v=e(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><h2 id="列举你所了解的计算机存储设备类型" tabindex="-1"><a class="header-anchor" href="#列举你所了解的计算机存储设备类型" aria-hidden="true">#</a> 列举你所了解的计算机存储设备类型？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用来存储信息的设备称为计算机的存储设备，如内存、硬盘、软盘和光盘。
内存是直接与CPU相联系的存储设备，运算速度快，价格高。
硬盘是微机主要的存储设备，它的特点是存储容量大，读写速度快可靠性高，使用方便。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一般代码存储在计算机的哪个设备中-代码在-cpu-中是如何运行的" tabindex="-1"><a class="header-anchor" href="#一般代码存储在计算机的哪个设备中-代码在-cpu-中是如何运行的" aria-hidden="true">#</a> 一般代码存储在计算机的哪个设备中？代码在 CPU 中是如何运行的？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们写的程序是放在硬盘中的，
在运行的时候才会被调入到内存中，就是说内存中的数据是从硬盘来的，
而CPU中寄存器的数据又是从内存中装载进来的，然后CPU会根据相应的指令去操作寄存器中的数据，比如四则运算什么的，来完成一个程序在计算机中的运行。
一句话总结：本身程序是在硬盘上，需要把程序加载进内存，然后由CPU去执行​​​​​​​。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="什么是指令和指令集" tabindex="-1"><a class="header-anchor" href="#什么是指令和指令集" aria-hidden="true">#</a> 什么是指令和指令集？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>计算机指令就是指挥机器工作的指示和命令，程序就是一系列按一定顺序排列的指令，执行程序的过程就是计算机的工作过程。
指令集，就是CPU中用来计算和控制计算机系统的一套指令的集合，而每一种新型的CPU在设计时就规定了一系列与其他硬件电路相配合的指令系统。而指令集的先进与否，也关系到CPU的性能发挥，它也是CPU性能体现的一个重要标志。每款CPU在设计时就规定了一系列与其硬件电路相配合的指令系统。指令的强弱也是CPU的重要指标，指令集是提高微处理器效率的最有效的工具之一。从现阶段的主流体系结构讲，指令集可分为复杂指令集和精简指令集两部分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复杂指令集和精简指令集有什么区别" tabindex="-1"><a class="header-anchor" href="#复杂指令集和精简指令集有什么区别" aria-hidden="true">#</a> 复杂指令集和精简指令集有什么区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CISC(复杂指令集计算机)和RISC(精简指令集计算机)

从硬件角度来看
CISC处理的是不等长指令集，它必须对不等长指令进行分割，因此在执行单一指令的时候需要进行较多的处理工作。
RISC执行的是等长精简指令集，CPU在执行指令的时候速度较快且性能稳定。
因此在并行处理方面RISC明显优于CISC，RISC可同时执行多条指令，它可将一条指令分割成若干个进程或线程，交由多个处理器同时执行。由于RISC执行的是精简指令集，所以它的制造工艺简单且成本低廉。

从软件角度来看
CISC运行的则是我们所熟识的DOS、Windows操作系统。而且它拥有大量的应用程序。因为全世界有65%以上的软件厂商都理为基于CISC体系结构的PC及其兼容机服务的，象赫赫有名的Microsoft就是其中的一家。
RISC在此方面却显得有些势单力薄。虽然在RISC上也可运行DOS、Windows，但是需要一个翻译过程，所以运行速度要慢许多。
目前CISC与RISC正在逐步走向融合，Pentium Pro、Nx586、K5就是一个最明显的例子，它们的内核都是基于RISC体系结构的。他们接受CISC指令后将其分解分类成RISC指令以便在遇一时间内能够执行多条指令。由此可见，下一代的CPU将融合CISC与RISC两种技术，从软件与硬件方面看二者会取长补短
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-是如何运行的-解释型语言和编译型语言的差异是什么" tabindex="-1"><a class="header-anchor" href="#javascript-是如何运行的-解释型语言和编译型语言的差异是什么" aria-hidden="true">#</a> JavaScript 是如何运行的？解释型语言和编译型语言的差异是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS引擎： 也称为javascript解释器，用来读取网页中的javascript代码，对其处理后运行，
比如chrome浏览器的V8,浏览器并不会执行javascript代码，而是通过内置的js引擎(解释器)来执行javascript代码
javascript引擎执行代码时逐行解释每一句源码(转换为机器语言)，然后由计算机去执行，所以javascript语言归为脚本语言，会逐行解释执行

JavaScript解析过程分为两个阶段，一个是编译阶段，另外一个就是执行阶段。
  编译阶段就是我们常说的JavaScript预解析（预处理）阶段，在这个阶段JavaScript解释器将完成把JavaScript脚本代码转换到字节码。
  在编译阶段JavaScript解释器借助执行环境把字节码生成机械码，并顺序执行。

编译型与解释型的差异是什么:
区别就在于“转化的方式”不一样
1.从运行效果上来看：
    编译型语言要等全部写完后通过编译器去生成一个类似*.exe的二进制文件，然后双击这个文件才可以看到效果。
    而解释型语言并没生成*.exe文件，而是直接生成效果，这就是我之前提到的的那个C语言和MATLAB的例子。

2.运行的时候是否需要编译器（或解释器）的伴随：
    编译型语言运行的是最终生成的二进制代码，所以不需要编译器伴随。
    而解释型语言则一边解释一边运行，所以运行的时候很可能还有部分代码没有解释好，所以需要解释器伴随。有人会问编译器（解释器）在哪里呢？举个例子，网页的解释器就在浏览器中，所以要看HTML的效果必须用浏览器或者有编译工具在内的其他工具打开，比如：模拟浏览器的工具。

3.执行的速度对比：
    编译型语言运行的已经是完全的二进制内容，运行起来十分干净利落，所以速度很快。
    而解释型语言运行的不一定是完全的二进制内容，因为它是一边解释成二进制一边运行。所以当它执行看出效果的时，程序后半部分还不一定解释成二进制，速度没有前者快，但是CPU的运行速度如果很快，可能看不出来，只是偶尔会看到“有点卡”的效果。原因就是它一边解释一边运行，你看到效果的后面可能还有一少半的代码没解释成二进制，所以看到的效果会是残缺的。这就是为什么有时候查看网页，先是出现一堆没有布局的文字，然后才出现那种布局好的效果。

4.可移植性对比：
    编译型语言是运行二进制内容，所以一旦CPU指令系统改变，那么之前的二进制文件可能运行不了。比如，如果到其他硬件平台上运行，就可能出现错误，就需要根据该平台重新编译出新的二进制文件。所以可移植性、平台兼容性比价差。
    而解释型语言则没有弄成什么二进制内容，而是在需要的时候才开始编译、运行。所以它自然具有可移植性，即在任何平台都可以马上运行起来。要注意的是它的解释工具如：浏览器，本身就是编译型语言解释出来的二进制代码，所以浏览器本身不具备可移植性，是需要针对不同的平台弄出对应的浏览器最终二进制文件的，这里可别混淆。

5.升级上对比：
    编译型语言弄出来的二进制文件若要升级，自然要重新下载一个新的二进制文件。所以重新下载、安装、覆盖是最大的特点。比如微信的升级，就是要重新下载、重新安装、重新覆盖，等个半天而且很耗费CPU资源，体验性就不大好。
    而解释型的语言只要重新写好源代码即可，用户想要最新的效果，只要刷新一下即可，所以体验性好。比如：某网站平台升级了，用户只要重新刷新一下。

6.应用领域：
    编译型语言应用领域通常是那些安装软件，例如桌面上的安装软件。
    解释型的语言的应用领域通常是互联网、网站等那种刷新了一下就可以看到最新效果的领域。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="描述-babel-的编译过程" tabindex="-1"><a class="header-anchor" href="#描述-babel-的编译过程" aria-hidden="true">#</a> 描述 Babel 的编译过程？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解析（Parsing）：将代码字符串解析成抽象语法树。
转换（Transformation）：对抽象语法树进行转换操作。
生成（Code Generation）: 根据变换后的抽象语法树再生成代码字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=["src"],u=e(`<h2 id="javascript-中的数组和函数在内存中是如何存储的" tabindex="-1"><a class="header-anchor" href="#javascript-中的数组和函数在内存中是如何存储的" aria-hidden="true">#</a> JavaScript 中的数组和函数在内存中是如何存储的？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数组的内存模型
Javascript的内存分为堆内存和栈内存，数组作为对象，在建立后存储在堆内存中。
任何计算机语言内存的分配都要经历三个阶段

分配内存
对内存进行读、写
释放内存（垃圾回收）
本文主要针对数组的内存分配进行解释。
Javascript中数组有几个不同于其他语言数组的特点

数组中可以存放不同的数据结构，可以存放数组、对象、Number、Undefined、Null、String、Symbol、Boolean、Function等等。
数组的index是字符串类型的，之所以你可以通过arr[1]，获得对应的数据，是因为Javascript自动将数字转化为字符串。
数组本来应该是一个连续的内存分配，但是在Javascript中不是连续分配的，而是类似哈希映射的方式存在的。
对于上述的实现方式，熟悉数据结构的同学应该知道，对于读取操作，哈希表的效率并不高，而修改删除的效率比较高。
现在浏览器为了优化其操作，对数组的创建时候的内存分配进行了优化：

对于同构的数组，也就是，数组中元素类型一致，会创建连续的内存分配
对于不同构数组，按照原来的方式创建。
如果你想插入一个异构数据，那么就会重新解构，通过哈希映射的方式创建
为了进一步优化功能的实现，Javascript中出现了ArrayBuffer，它可以创建连续的内存供编程人员使用。

ArrayBuffer是创建一块连续的内存，不能直接操作
通过视图对分配的内存进行读写操作
显而易见，如果通过ArrayBuffer创建的数组进行遍历操作，速度更快。

复杂数据类型在内存中的存储

地址（栈）--- 指向 ---堆（对象）

所以赋值操作都会指向同一个对象，当一个对象改变后，会影响到原来的对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器和-node-js-中的事件循环机制有什么区别" tabindex="-1"><a class="header-anchor" href="#浏览器和-node-js-中的事件循环机制有什么区别" aria-hidden="true">#</a> 浏览器和 Node.js 中的事件循环机制有什么区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>微任务 -&gt; DOM渲染 -&gt; 宏任务

Node 端，微任务 在事件循环的各个阶段之间执行
如果宏任务种包含微任务，则执行完所有宏任务后依次执行微任务。

浏览器端，微任务 在事件循环的 宏任务 执行完之后执行
如果宏任务种包含微任务，则执行完宏任务后依次执行微任务。

setTimeout(()=&gt;{
    console.log(&#39;timer1&#39;)
    Promise.resolve().then(function() {
        console.log(&#39;promise1&#39;)
    })
}, 0)
setTimeout(()=&gt;{
    console.log(&#39;timer2&#39;)
    Promise.resolve().then(function() {
        console.log(&#39;promise2&#39;)
    })
}, 0)

浏览器端运行结果：timer1=&gt;promise1=&gt;timer2=&gt;promise2
Node 端运行结果：timer1=&gt;timer2=&gt;promise1=&gt;promise2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6-modules-相对于-commonjs-的优势是什么" tabindex="-1"><a class="header-anchor" href="#es6-modules-相对于-commonjs-的优势是什么" aria-hidden="true">#</a> ES6 Modules 相对于 CommonJS 的优势是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>死代码检测和排除：
我们可以用静态分析工具检测出哪些模块没有被调用过。比如，在引入工具类库时，工程中往往只用到了其中一部分组件或接口，但有可能会将其代码完整地加载进来。未被调用到的模块代码永远不会被执行，也就成为了死代码。通过静态分析可以在打包时去掉这些未曾使用过的模块，以减小打包资源体积。

模块变量类型检查：
JavaScript属于动态类型语言，不会在代码执行前检查类型错误（比如对一个字符串类型的值进行函数调用）。ES6 Module的静态模块结构有助于确保模块之间传递的值或接口类型是正确的。

编译器优化：
在CommonJS等动态模块系统中，无论采用哪种方式，本质上导入的都是一个对象，而ES6 Module支持直接导入变量，减少了引用层级，程序效率更高。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级程序设计语言是如何编译成机器语言的" tabindex="-1"><a class="header-anchor" href="#高级程序设计语言是如何编译成机器语言的" aria-hidden="true">#</a> 高级程序设计语言是如何编译成机器语言的？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>编译、汇编、链接
1.由该语言的编译器翻译成好几份汇编语言程序
2.把这几份由汇编语言翻译器翻译成好几份机器语言程序
3.把这好几段程序和系统调用库产生的链接程序连接起来，并加以一定的格式，形成最终的可执行程序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译器一般由哪几个阶段组成-数据类型检查一般在什么阶段进行" tabindex="-1"><a class="header-anchor" href="#编译器一般由哪几个阶段组成-数据类型检查一般在什么阶段进行" aria-hidden="true">#</a> 编译器一般由哪几个阶段组成？数据类型检查一般在什么阶段进行？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>词法分析阶段：读入源程序，对构成源程序的字符流进行扫描和分解，识别出单词，

语法分析阶段：机器通过词法分析，将单词序列分解成不同的语法短语，确定整个输入串能够构成语法上正确的程序。

语义分析阶段：检查源程序上有没有语义错误，在代码生成阶段收集类型信息

中间代码生成阶段：在进行了上述的语法分析和语义分析阶段的工作之后,有的编译程序将源程序变成一种内部表示形式

代码优化：这一阶段的任务是对前一阶段产生的中间代码进行变换或进行改造,目的是使生成的目标代码更为高效,即省时间和省空间

目标代码生成：这一阶段的任务是把中间代码变换成特定机器上的绝对指令代码或可重定位的指令代码或汇编指令代码

表格管理程序：

错误处理程序：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译过程中虚拟机的作用是什么" tabindex="-1"><a class="header-anchor" href="#编译过程中虚拟机的作用是什么" aria-hidden="true">#</a> 编译过程中虚拟机的作用是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>编译器，把程序原代码翻译成二进制代码输出，运行时，程序的内容直接交给计算机运行。
解释器，把程序内容转换成解释器所提供的功能去执行对应的CPU程序代码。
jvm 虚拟机，这个比较特殊，其实他就是解释器，但是他的解释器工作模式却是尽可能模拟成类似二进制程序的工作方式。;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="什么是中间代码-ir-它的作用是什么" tabindex="-1"><a class="header-anchor" href="#什么是中间代码-ir-它的作用是什么" aria-hidden="true">#</a> 什么是中间代码（IR），它的作用是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>编译器不是直接将源语言翻译为目标语言，而是翻译为一种“中间语言”，称之为“IR”--指令集，
之后再由中间语言，利用后端程序和设备翻译为目标平台的汇编语言；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="什么是交叉编译" tabindex="-1"><a class="header-anchor" href="#什么是交叉编译" aria-hidden="true">#</a> 什么是交叉编译？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在一个平台架构上，编译另一个平台架构的可执行代码，就是交叉编译。
例如在x86架构的PC上编译arm嵌入式设备的可执行程序。
交叉编译是不得不用，
首先在目标设备的系统还没引导起来的时候，编译目标平台的引导程序，显然只能交叉编译。
还有因为目标设备往往能力太低，没法安装编译器，或者勉强安装了，也慢得像蜗牛。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布-订阅模式和观察者模式的区别是什么" tabindex="-1"><a class="header-anchor" href="#发布-订阅模式和观察者模式的区别是什么" aria-hidden="true">#</a> 发布 / 订阅模式和观察者模式的区别是什么？</h2><h2 id="装饰器模式一般会在什么场合使用" tabindex="-1"><a class="header-anchor" href="#装饰器模式一般会在什么场合使用" aria-hidden="true">#</a> 装饰器模式一般会在什么场合使用？</h2><h2 id="谈谈你对大型项目的代码解耦设计理解-什么是-ioc-一般-di-采用什么设计模式实现" tabindex="-1"><a class="header-anchor" href="#谈谈你对大型项目的代码解耦设计理解-什么是-ioc-一般-di-采用什么设计模式实现" aria-hidden="true">#</a> 谈谈你对大型项目的代码解耦设计理解？什么是 Ioc？一般 DI 采用什么设计模式实现？</h2><h2 id="列举你所了解的编程范式" tabindex="-1"><a class="header-anchor" href="#列举你所了解的编程范式" aria-hidden="true">#</a> 列举你所了解的编程范式？</h2><h2 id="什么是面向切面-aop-的编程" tabindex="-1"><a class="header-anchor" href="#什么是面向切面-aop-的编程" aria-hidden="true">#</a> 什么是面向切面（AOP）的编程？</h2><h2 id="什么是函数式编程-什么是响应式编程-什么是函数响应式编程" tabindex="-1"><a class="header-anchor" href="#什么是函数式编程-什么是响应式编程-什么是函数响应式编程" aria-hidden="true">#</a> 什么是函数式编程？什么是响应式编程？什么是函数响应式编程？</h2><h2 id="响应式编程或者函数响应式编程的使用场景有哪些" tabindex="-1"><a class="header-anchor" href="#响应式编程或者函数响应式编程的使用场景有哪些" aria-hidden="true">#</a> 响应式编程或者函数响应式编程的使用场景有哪些？</h2>`,23);function t(i,m){return d(),a("div",null,[v,s(" ![示例-1](/blogs/image/web/issue/示例-1.png) "),l("img",{src:i.$withBase("/image/web/issue/示例-1.png"),alt:"示例-1"},null,8,c),u])}const h=n(r,[["render",t],["__file","基础.html.vue"]]);export{h as default};
