module.exports = {
    base: '/blogs/',
    title: '你好世界',
    head: [
        [
            "link",
            { rel: 'icon', href: '/favicon.ico' }
        ]
    ],
    description: '这是我的博客',
    themeConfig: {
      lastUpdated: '最后更新时间', // string | boolean
      nav: [
        {
            text: '前端',
            items: [
                { text: 'HTML', link: '/web/html/' },
                { text: 'Javascript', link: '/web/javascript/' },
                { text: 'CSS', link: '/web/css/' },
                { text: 'WebApi', link: '/web/webapi/' },
                { text: 'Webpack', link: '/web/webpack/' },
                { text: 'React', link: '/web/react/' },
                { text: '设计模式', link: '/web/designMode/' },
                { text: '知识点', link: '/web/knowledge/' },
                { text: '面试题', link: '/web/issue/' },
            ]
        },
        {
            text: '服务',
            items: [
                { text: 'Koa', link: '/koa/' }
            ]
        },
        {
            text: '数据',
            items: [
                { text: 'Redis', link: '/redis/' }
            ]
        },
        {
            text: '开发',
            items: [
                { text: '调试', link: '/dev/debug/' },
                { text: '测试', link: '/dev/test/' },
                { text: 'GIT', link: '/dev/git/' },
                { text: 'HTTP', link: '/dev/http/' },
                { text: 'Linux', link: '/dev/linux/' },
                { text: 'VSCode', link: '/dev/vscode/' },
            ]
        },
      ],
      sidebarDepth: 3,
      sidebar: {
        "/web/html/": [
            ""
        ],
        "/web/javascript/": [
            ""
        ],
        "/web/css/": [
            "",
            "布局",
            "定位",
            "图文样式",
            "移动端响应式",
            "动画渐变",
        ],
        "/web/webapi/": [
            ""
        ],
        "/web/react/": [
            "",
            "环境构建",
            "Nextjs文档"
        ],
        "/web/webpack/": [
            "",
            "搭建Webpack环境",
            "使用Webpack的配置文件",
            "Loader",
            "Plugins",
            "CodeSplitting",
        ],
        "/web/designMode/": [
            "",
            "面向对象",
            "UML类图",
            "设计原则",
            "面试题分析",
            "工厂模式",
            "单例模式",
            "适配器模式",
            "装饰器模式",
            "代理模式",
            "外观模式",
            "观察者模式",
            "迭代器模式",
            "状态模式",
            "其它设计模式"
        ],
        "/web/knowledge/": [
            "",
            "OAuth授权",
            "安全",
            "常用手写函数",
            "初级高频面试题",
            "性能优化",
            "运行环境",
        ],
        "/web/issue/": [
            "",
            "基础",
            "语法",
            "框架",
            "工程",
            "网络",
            "性能",
            "插件",
            "系统",
            "后端",
            "业务"
        ],

        "/koa/": [
            ""
        ],

        "/redis/": [
            "",
            "基础使用",
            "node连接"
        ],
        "/dev/debug/": [
            ""
        ],
        "/dev/test/": [
            "",
            "Chaijs"
        ],
        "/dev/git/": [
            "",
            "Git规范提交库和Git-Change-log生成库",
            "Git-钩子拦截配置",
        ],
        "/dev/http/": [
            "",
            "HTTP状态码"
        ],
        "/dev/linux/": [
            ""
        ]
      }
    }
  }
