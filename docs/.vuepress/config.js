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
          { text: "WebApi", link: "/web/webapi/" },
          { text: "Webpack", link: "/web/webpack/" },
          { text: "React", link: "/web/react/" },
          { text: "设计模式", link: "/web/designMode/" },
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
            "/web/base/css/移动端响应式.md",
            "/web/base/css/动画渐变.md",
          ],
        },
      ],
      "/web/webapi/": [
        {
          text: "WebApi",
          collapsible: true,
          children: [
            "/web/webapi/README.md",
            "/web/webapi/Ajax.md"
          ],
        },
      ],
      "/web/react/": [
        {
          text: "React",
          collapsible: true,
          children: [
            "/web/react/README.md",
            "/web/react/环境构建.md",
            "/web/react/HOC开发模式.md",
            "/web/react/Hook.md",
            "/web/react/Redux.md",
            "/web/react/Nextjs文档.md",
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
      "/web/designMode/": [
        {
          text: "DesignMode",
          collapsible: true,
          children: [
            "/web/designMode/README.md",
            "/web/designMode/面向对象.md",
            "/web/designMode/UML类图.md",
            "/web/designMode/设计原则.md",
            "/web/designMode/面试题分析.md",
            "/web/designMode/工厂模式.md",
            "/web/designMode/单例模式.md",
            "/web/designMode/适配器模式.md",
            "/web/designMode/装饰器模式.md",
            "/web/designMode/代理模式.md",
            "/web/designMode/外观模式.md",
            "/web/designMode/观察者模式.md",
            "/web/designMode/迭代器模式.md",
            "/web/designMode/状态模式.md",
            "/web/designMode/其它设计模式.md",
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
