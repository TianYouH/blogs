# HTML

## HTML5 声明

HTML5 声明

`<!DOCTYPE html>`

`<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于 `<html>` 标签之前。

`<!DOCTYPE>` 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。

在 HTML 4.01 中，`<!DOCTYPE>` 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

HTML5 不基于 SGML，所以不需要引用 DTD。


## 块状元素&内联元素

block 块级元素、inline 内联元素  
inline-block 内联块元素，表现为同行显示并可修改宽高内外边距等属性

块状元素： `address`、`blockquote`、`center`、`dir`、` div`、`dl`、`fieldset`、`form`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`hr`

内联元素：`a`、`abbr`、`acronym`、`b`、`bdo`、`big`、`br`、`cite`、`code`、`dfn`、`em`、`font`、`i`、`img`、`input`、`kbd`、`label`、`q`、`s`、`button`

## HTML5 中的一些新特性

- 用于绘画的`canvas`元素  
- 用于媒介回放的`video`、`audio`元素  
- 对本地离线存储的更好的支持  
- 新的表单控件，如：`calendar`、`date`、`time`、`email`、`url`、`search`  
- 语义化标签，如：`header`、`footer`、`nav`、`section`、`article`、`main`  
- 新的特殊内容元素，如：`article`、`footer`、`header`、`nav`、`section`  
- 地理定位：使用getCurrentPosition()方法来获取用户的位置，从而实现队地理位置的定位  
- 拖放API：通过给标签元素设置属性draggable值为true，能够实现对目标元素的拖动  
- Web Storage：Localstorage和SessionStorage  
- Websocket：长连接  
- svg绘图
- Web Worker：Web Worker通过加载一个脚本文件，进而创建一个独立工作的线程，在主线程之外运行，worker线程运行- 结束之后会把结果返回给主线程，worker线程可以处理一些计算密集型的任务，这样主线程就会变得相对轻松，这并不是- 说JS具备了多线程的能力，而实浏览器作为宿主环境提供了一个JS多线程运行的环境。  

