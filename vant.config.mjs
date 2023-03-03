export default {
    // 组件库名称
    name: 'vant-cli-demo1',
    // 构建配置
    build: {
        css: {
            preprocessor: 'less',
        },
        site: {
            publicPath: '/vant-cli-demo1/',
        },
    },
    // 文档站点配置
    site: {
        // 标题
        title: 'vant-cli-demo1',
        // 图标
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        // 描述
        description: '示例组件库',
        // 导航
        links: [{
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/youzan/vant-demo'
        }],
        // 左侧导航
        nav: [{
                title: '开发指南',
                items: [{
                        path: 'home',
                        title: '介绍',
                    },
                    {
                        path: 'quickstart',
                        title: '快速上手',
                    },
                ],
            },
            {
                title: '基础组件',
                items: [{
                    path: 'demo-button',
                    title: 'DemoButton 按钮',
                }, {
                    path: 'tabs',
                    title: 'tabs标签',
                }, {
                    path: 'sidebar',
                    title: 'Sidebar 侧边导航',
                }],
            },
        ],
    },
};