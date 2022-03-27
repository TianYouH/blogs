module.exports = {
  base: "/",
  title: "你好世界",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "这是我的博客",
  themeConfig: {
    lastUpdatedText: "最后更新时间", // string | boolean
    contributorsText: "贡献者",
    navbar: [
      {
        text: "前端",
        children: [
          { text: "入门", link: "/web/base/" },
          { text: "框架", link: "/web/frame/" },
          { text: "Webpack", link: "/web/webpack/" },
          // { text: "设计模式", link: "/web/designMode/" },
          { text: "模式", link: "/web/pattern/" },
          { text: "知识点", link: "/web/knowledge/" },
          { text: "面试题", link: "/web/issue/" },
        ]
      },
      {
        text: "服务",
        children: [{ text: "Koa", link: "/server/koa/" }],
      },
      {
        text: "数据",
        children: [
          { text: "Redis", link: "/data/redis/" },
          { text: "Algorithm", link: "/data/algorithm/" },
        ],
      },
      {
        text: "开发",
        children: [
          { text: "调试", link: "/dev/debug/" },
          { text: "测试", link: "/dev/test/" },
          { text: "GIT", link: "/dev/git/" },
          { text: "Network", link: "/dev/network/" },
          { text: "Linux", link: "/dev/linux/" },
          { text: "VSCode", link: "/dev/vscode/" },
          { text: "GitHub", link: "/dev/github/" },
          { text: "Mock", link: "/dev/mock/" },
        ],
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/web/base/": [
        {
          text: "HTML",
          collapsible: true,
          children: ["/web/base/html/README.md"],
        },
        {
          text: "JavaScript",
          collapsible: true,
          children: [
            "/web/base/javascript/README.md",
            "/web/base/javascript/原型到原型链.md",
            "/web/base/javascript/继承的多种方式和优缺点.md",
            "/web/base/javascript/作用域和闭包.md",
          ],
        },
        {
          text: "CSS",
          collapsible: true,
          children: [
            "/web/base/css/README.md",
            "/web/base/css/布局.md",
            "/web/base/css/定位.md",
            "/web/base/css/图文样式.md",
            "/web/base/css/响应式.md",
            "/web/base/css/动画渐变.md",
          ],
        },
        {
          text: "WebApi",
          collapsible: true,
          children: [
            "/web/base/webapi/README.md",
            "/web/base/webapi/Ajax.md"
          ],
        },
      ],
      "/web/frame/": [
        {
          text: "Vue",
          collapsible: true,
          children: [
            "/web/frame/vue/README.md",
            "/web/frame/vue/选项-数据.md",
            "/web/frame/vue/选项-生命周期钩子.md",
            "/web/frame/vue/实例方法-事件.md",
            "/web/frame/vue/实例方法-生命周期.md",
            "/web/frame/vue/指令.md",
            "/web/frame/vue/模板编译.md",
            "/web/frame/vue/渲染和更新.md",
            "/web/frame/vue/VueRouter.md",
          ],
        },
        {
          text: "React",
          collapsible: true,
          children: [
            "/web/frame/react/README.md",
            "/web/frame/react/环境构建.md",
            "/web/frame/react/HOC开发模式.md",
            "/web/frame/react/Hook.md",
            "/web/frame/react/Redux.md",
            "/web/frame/react/Nextjs文档.md",
          ],
        },
      ],
      "/web/webpack/": [
        {
          text: "Webpack",
          collapsible: true,
          children: [
            "/web/webpack/README.md",
            "/web/webpack/搭建Webpack环境.md",
            "/web/webpack/使用Webpack的配置文件.md",
            "/web/webpack/Loader.md",
            "/web/webpack/Plugins.md",
            "/web/webpack/CodeSplitting.md",
            "/web/webpack/vue-cli.md",
          ],
        },
      ],
      "/web/pattern/": [
        {
          text: "DesignMode",
          collapsible: true,
          children: [
            "/web/pattern/design-mode/README.md",
            "/web/pattern/design-mode/面向对象.md",
            "/web/pattern/design-mode/UML类图.md",
            "/web/pattern/design-mode/设计原则.md",
            "/web/pattern/design-mode/面试题分析.md",
            "/web/pattern/design-mode/工厂模式.md",
            "/web/pattern/design-mode/单例模式.md",
            "/web/pattern/design-mode/适配器模式.md",
            "/web/pattern/design-mode/装饰器模式.md",
            "/web/pattern/design-mode/代理模式.md",
            "/web/pattern/design-mode/外观模式.md",
            "/web/pattern/design-mode/观察者模式.md",
            "/web/pattern/design-mode/迭代器模式.md",
            "/web/pattern/design-mode/状态模式.md",
            "/web/pattern/design-mode/其它设计模式.md",
          ],
        },
        {
          text: "SoftwareArchitecturePatterns",
          collapsible: true,
          children: [
            "/web/pattern/software-architecture-patterns/README.md",
            "/web/pattern/software-architecture-patterns/MVVC.md",
            "/web/pattern/software-architecture-patterns/MVC.md",
            "/web/pattern/software-architecture-patterns/MVP.md",
          ],
        },
      ],
      "/web/knowledge/": [
        {
          text: "Knowledge",
          collapsible: true,
          children: [
            "/web/knowledge/README.md",
            "/web/knowledge/OAuth授权.md",
            "/web/knowledge/安全.md",
            "/web/knowledge/常用手写函数.md",
            "/web/knowledge/常用工具函数.md",
            "/web/knowledge/性能优化.md",
            "/web/knowledge/运行环境.md",
          ],
        },
      ],
      "/web/issue/": [
        {
          text: "Issue",
          collapsible: true,
          children: [
            "/web/issue/README.md",
            "/web/issue/初级高频面试题.md",
            "/web/issue/基础.md",
            "/web/issue/语法.md",
            "/web/issue/框架.md",
            "/web/issue/工程.md",
            "/web/issue/网络.md",
            "/web/issue/性能.md",
            "/web/issue/插件.md",
            "/web/issue/系统.md",
            "/web/issue/后端.md",
            "/web/issue/业务.md",
          ],
        },
      ],
      "/server/koa/": [
        {
          text: "Koa",
          collapsible: true,
          children: ["/server/koa/README.md"],
        },
      ],
      "/data/redis/": [
        {
          text: "Redis",
          collapsible: true,
          children: [
            "/data/redis/README.md",
            "/data/redis/基础使用.md",
            "/data/redis/node连接.md",
          ],
        },
      ],
      "/data/algorithm/": [
        {
          text: "Algorithm",
          collapsible: true,
          children: ["/data/algorithm/README.md"],
          children: ["/data/algorithm/diff.md"],
        },
      ],
      "/dev/debug/": [
        {
          text: "Debug",
          collapsible: true,
          children: [
              "/dev/debug/README.md",
              "/dev/debug/whistle.md",
        ],
        },
      ],
      "/dev/test/": [
        {
          text: "Test",
          collapsible: true,
          children: [
              "/dev/test/README.md",
              "/dev/test/Chaijs.md",
            ],
        },
      ],
      "/dev/git/": [
        {
          text: "Git",
          collapsible: true,
          children: [
              "/dev/git/README.md",
              "/dev/git/Git-钩子拦截配置.md",
              "/dev/git/Git规范提交库和Git-Change-log生成库.md",
              "/dev/git/gitignore无效解决.md",
            ],
        },
      ],
      "/dev/network/": [
        {
          text: "Network",
          collapsible: true,
          children: [
              "/dev/network/README.md",
              "/dev/network/OSI.md",
              "/dev/network/HTTP.md",
              "/dev/network/TCP.md",
              "/dev/network/UDP.md",
              "/dev/network/HTTPS.md",
              "/dev/network/HTTP状态码.md",
              "/dev/network/Websocket.md",
              "/dev/network/域名后缀记录.md",
            ],
        },
      ],
      "/dev/linux/": [
        {
          text: "Linux",
          collapsible: true,
          children: ["/dev/linux/README.md"],
        },
      ],
      "/dev/vscode/": [
        {
          text: "Vscode",
          collapsible: true,
          children: ["/dev/vscode/README.md"],
        },
      ],
      "/dev/github/": [
        {
          text: "GitHub",
          collapsible: true,
          children: [
            "/dev/github/README.md",
            "/dev/github/同步GitHub和Gitee.md",
            "/dev/github/个人域名解析跳转GitPage.md",
          ],
        },
      ],
      "/dev/mock/": [
        {
          text: "Mock",
          collapsible: true,
          children: [
              "/dev/mock/README.md",
              "/dev/mock/服务端Mock配置.md",
            ],
        },
      ],
    },
  },
};
