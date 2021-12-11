# [whistle](https://wproxy.org/whistle/)

调试移动端 H5 代理工具。

可以通过代理形式，查看类似浏览器开发工具相关信息。

## 基本使用

1. 安装[Node](https://nodejs.org/zh-cn/)

验证是否安装成功

```bash
$ node -v
v14.16.1
```

2. 安装whistle

`npm install -g whistle`

查看 whistle 帮助信息

`w2 help`

3. 启动whistle

最新版本的whistle支持三种等价的命令whistle、w2、wproxy
```bash
# 启动whistle:
$ w2 start
# Note: 如果要防止其他人访问配置页面，可以在启动时加上登录用户名和密码 -n yourusername -w yourpassword。

# 重启whsitle:
$ w2 restart

# 停止whistle:
$ w2 stop
# 调试模式启动whistle(主要用于查看whistle的异常及插件开发):

$ w2 run
# 启动完whistle后，最后一步需要配置代理。
```
4. 配置代理

> 使手机和电脑在一个局域网内，不一定非要是一个 IP 段，只要是在同一个路由器下即可。
通过命令行工具输入 ipconfig 查看本机的 IP 地址。

- 手机端配置

打开手机端的 WIFI 代理设置，输入电脑 IP 和 whistle 的代理端口。

- 访问配置页面

启动 whistle 及配置完代理后，用Chrome 浏览器(由于 css 兼容性问题界面只支持 Chrome 浏览器)访问配置页面，如果能正常打开页面，whistle 安装启动完毕，可以开始使用。

可以通过以下两种方式来访问配置页面：

方式 1：通过 ip+端口来访问，形式如 http://whistleServerIP:whistlePort/ e.g. http://127.0.0.1:8899

方式 2：通过命令行参数 -P xxxx 自定义 webui 的端口(xxxx 表示要设置的端口号)，自定义端口支持上述方式访问，也支持 http://127.0.0.1:xxxx
