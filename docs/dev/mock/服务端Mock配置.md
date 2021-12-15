# 服务端Mock配置

- 下载[mock.zip](/blogs/file/mock.zip)文件;
  - 解压后将mock文件夹放在项目的根目录下

- 对于vue-cli2.x搭建的项目;
  - 找到项目根目录下的/build/webpack.dev.conf.js文件;
  - 在文件顶部引入 const mockServer = require('../mock/mock-server.js');
  - 在文件中搜索devServer对象,在对象中添加一个属性 after: mockServer

- 对于vue-cli3.x以上版本构建的项目;
  - 找到项目根目录下的vue.config.js文件（如果不存在该文件,则手动创建一个即可）;
  - 在文件中搜索devServer对象,在对象中添加一个属性after: require('./mock/mock-server.js')
  - 至此服务端mock已经集成至项目中;

对于使用代理模式的项目,只需要关闭代理服务的配置即可直接使用mock服务;
对于没有使用代理模式的项目,只需要将env.js中的本地环境中的路径前缀设置为'',即可直接使用mock服务。

> mock文件夹下的index.js文件为入口文件,如果在mock文件夹下添加了新的目录文件,需要手动在index.js文件中引入一下。

> mock文件夹下的/demo/example/文件夹下包含了mock的常用示例,更多的使用方式自行参考Mock.js官网

> mock文件夹下的所有代码均为node代码,不可直接使用esModule 的 import语法,需要使用commonjs的require 语法