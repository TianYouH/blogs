# [fiddler](https://www.telerik.com/fiddler)

Fiddler是一个http协议调试代理工具，它能够记录并检查所有你的电脑和互联网之间的http通讯，设置断点，查看所有的“进出”Fiddler的数据（指cookie,html,js,css等文件）。Fiddler 要比其他的网络调试器要更加简单，因为它不仅仅暴露http通讯还提供了一个用户友好的格式。

## 代理原理

　Fiddler是位于客户端和服务器端的HTTP代理，也是目前最常用的http抓包工具之一 。 它能够记录客户端和服务器之间的所有 HTTP请求，可以针对特定的HTTP请求，分析请求数据、设置断点、调试web应用、修改请求的数据，甚至可以修改服务器返回的数据。

　既然是代理，也就是说：客户端的所有请求都要先经过Fiddler，然后转发到相应的服务器，反之，服务器端的所有响应，也都会先经过Fiddler然后发送到客户端。

> 使用Fiddler的话，需要先设置浏览器的代理地址，才可以抓取到浏览器的数据包。而很方便的是在你启动该工具后，它就已经自动帮你设置好了浏览器的代理了，当关闭后，它又将浏览器代理还原了。当然如果发现没有自动设置浏览器代理的话，那就得自己动手去浏览器进行设置代理操作了。（可自行百度每个浏览器是如何设置代理的），反正一定要设置相应的代理，否则fiddler是无法捕获到HTTP请求的。

### https 监听配置

fiddler默认只抓取http格式的

1. 打开Fiddler菜单项Tools -> Options... ->HTTPS；

2. 勾选*CaptureHTTPS CONNECTs*, 点击*Actions*，  
勾选*Decrypt HTTPS traffic*和*Ignore servercertificate errors*两项,点击OK（首次点击会弹出是否信任fiddler证书和安全提示，直接点击yes就行）

<img :src="$withBase('/image/dev/debug/fiddler1.png')" alt="示例">

### 移动端 抓包配置

1. 配置fiddler允许远程连接；  
  打开Fiddler菜单项Tools -> Options... ->Connections；  
  勾选*allow remote computers to connect*，默认监听端口为8888，若端口被占用可以设置成其他的，配置好后要重新启动fiddler；

<img :src="$withBase('/image/dev/debug/fiddler2.png')" alt="示例">

2. 对手机端进行参数配置；  
  首先要保证手机和电脑都处于同一个网络；  
  获取到电脑的ip地址；  
  打开手机浏览器，输入电脑ip及端口（例：192.168.0.112:8888）；

<img :src="$withBase('/image/dev/debug/fiddler3.png')" alt="示例">

下载证书后进行安装，可前往设施搜索 证书 关键字，打开相关设置项，进行安装；

<img :src="$withBase('/image/dev/debug/fiddler4.png')" alt="示例">

安装好证书后，前往手机无线网 设置 手动代理配置；

<img :src="$withBase('/image/dev/debug/fiddler5.png')" alt="示例">

操作手机，电脑fiddler中会显示一些http信息，成功；