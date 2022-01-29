# 个人域名解析跳转GitPage

1. 在博客GitHub仓库下的 用于存放 page  代码 分支 根目录下增加CNAME文件
2. 并在CNAME文件内写入个人域名

<img :src="$withBase('/image/dev/github/个人域名解析跳转GitPage1.png')" alt="示例">

3. 在域名控制台添加解析（以阿里云域名为例）

<img :src="$withBase('/image/dev/github/个人域名解析跳转GitPage2.png')" alt="示例">

> 注意：个人域名确定好已完成 实名登记， 保证DNS解析正常。

4. 配置就算完成了，返回GitHub库pages查阅关联情况

<img :src="$withBase('/image/dev/github/个人域名解析跳转GitPage3.png')" alt="示例">

5. 完成 之后就可以直接 通过 https://www.huangloveqi.top/ 访问博客了

> ref:  
> [将自己的域名解析跳转到博客主页（GitHub中的gitpage跳转）](https://blog.csdn.net/kingyuan666/article/details/81462605)