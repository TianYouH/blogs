# YApi安装及运维

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

