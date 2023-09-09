# Python环境配置

## Python下载安装

1. 进入官网：https://www.python.org/downloads/windows/
2. 根据自身环境 下载
3. 安装（推荐勾选【给所有用户安装】【添加全局变量路径】）
4. 使用 windows命令行，运行python解释器。测试 print("你好 世界") 

<img :src="$withBase('/image/server/python/001.png')" alt="图片">

## 开发环境

开发环境-IDE（集成开发环境）

不要纠结使用什么开发环境。开发环境本质上是对python解释器python.exe的封装，核心都一样。

可以理解：开发环境IDE，只是解释器的一个外挂而已，只是为了让程序员更加方便编程，减少出错率。

常见的开发环境：

1. IDLE（默认）
2. Pycharm
3. wingIDE
4. Eclipse
5. IPython

## 交互模式

1. 进入命令行窗口，输入：`python`
2. `>>>` 是“提示符”
3. 关闭交互窗口：  
    1. Ctrl+z和回车
    2. quit()
    3. exit()
4. 中断程序执行：ctrl+c  

> 注：交互模式会自动打印输出。py文件中则必须使用print语句。

## IDLE开发环境使用入门

### IDLE介绍

1. IDLE是python的官方标准开发环境，python安装后会同时就安装了IDLE。
2. IDLE已经具备了python开发几乎所有功能（语法智能提示、关键词高亮），无需其他配置，非常适合初学者。
3. IDLE是python标准发行版内置的一个小巧的IDE，包括了交互式命令行、编辑器、调试器等基本组件，足以应付大多数简单应用。
4. IDLE是用纯python基于TKinter编写，最初的作者正是龟叔。

### IDLE实操

1. 交互模式（启动IDEA，默认就是进入交互模式）
2. 编写和执行python源文件
