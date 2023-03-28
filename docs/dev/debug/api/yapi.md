# YApi

YAPI是一个开源的API管理平台，用于帮助团队管理和维护API。它提供了文档编写、接口测试、版本控制和部署等功能，并且支持各种类型的API，包括RESTful API和WebSocket API等。

使用YAPI可以大大提高团队的工作效率，方便开发者和用户查看和测试API接口。

### 特性

- 基于 Json5 和 Mockjs 定义接口返回数据的结构和文档，效率提升多倍
- 扁平化权限设计，即保证了大型企业级项目的管理，又保证了易用性
- 类似 postman 的接口调试
- 自动化测试, 支持对 Response 断言
- MockServer 除支持普通的随机 mock 外，还增加了 Mock 期望功能，根据设置的请求过滤规则，返回期望数据
- 支持 postman, har, swagger 数据导入
- 免费开源，内网部署，信息再也不怕泄露了

## 安装和部署

### 环境要求

- Node.js (v7.6 或以上)
- MongoDB (v2.6 或以上)

### 安装

使用官方提供的 yapi-cli 工具，部署 YApi 平台是非常容易的。执行 yapi server 启动可视化部署程序，输入相应的配置和点击开始部署，就能完成整个网站的部署。部署完成之后，可按照提示信息，执行 node/{网站路径/server/app.js} 启动服务器。在浏览器打开指定url, 点击登录输入您刚才设置的管理员邮箱，默认密码为 ymfe.org 登录系统（默认密码可在个人中心修改）。

1. `npm install -g yapi-cli --registry https://registry.npm.taobao.org`
2. `yapi server`

或

1. 克隆代码库：`git clone https://github.com/YMFE/yapi.git`
2. 安装依赖：`cd yapi && npm install --production --registry https://registry.npm.taobao.org`
3. 启动YAPI：`node server/app.js`

### 配置

1. 创建管理员账号：在页面上注册一个账号并将其设置为管理员账号
2. 配置SMTP：如果需要使用邮件通知功能，则需要在config.json文件中配置SMTP
3. 备份数据：使用mongodump命令备份MongoDB数据库。

### 服务管理

利用pm2方便服务管理维护。

```shell:no-line-numbers
npm install pm2 -g  //安装pm2
cd  {项目目录}
pm2 start "vendors/server/app.js" --name yapi //pm2管理yapi服务
pm2 info yapi //查看服务信息
pm2 stop yapi //停止服务
pm2 restart yapi //重启服务
```

### 版本升级

升级项目版本是非常容易的，并且不会影响已有的项目数据，只会同步 vendors 目录下的源码文件。

```shell:no-line-numbers
cd  {项目目录}
yapi ls //查看版本号列表
yapi update //更新到最新版本
yapi update -v {Version} //更新到指定版本
```

## 使用方法

### 创建项目

1. 进入管理员账号并使用添加项目功能
2. 添加项目并设置访问权限和所属分类

### 添加接口

1. 进入项目并使用添加接口功能
2. 输入接口信息，包括接口名称、请求方式、请求参数、返回参数等
3. 保存接口

### 编辑接口

1. 进入项目并打开需要编辑的接口
2. 修改接口信息
3. 保存接口

### 接口测试

1. 进入项目并打开需要测试的接口
2. 在页面中输入请求参数，点击发送请求
3. 在页面中查看响应结果

### 发布接口

1. 进入项目并打开需要发布的接口
2. 将接口状态更改为发布状态

## 总结

使用YAPI可以使API管理变得更加简单和高效。它提供了文档编写、接口测试、版本控制和部署等功能，并支持各种类型的API。如果您的团队需要一个API管理平台，不妨考虑使用YAPI。
