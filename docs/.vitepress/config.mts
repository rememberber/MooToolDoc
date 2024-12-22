import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    title: "MooTool",
    description: "Handy desktop toolset for developers",
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo/logo-128.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '文档', link: '/function-map'},
            {text: '更新日志', link: 'https://github.com/rememberber/MooTool/releases'}
        ],

        sidebar: [
            {
                text: '最趁手的All-in-One工具箱',
                docFooterText: '最趁手的All-in-One工具箱',
                items: [
                    {text: 'Overview', link: '/overview'},
                    {text: '功能地图', link: '/function-map'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/rememberber/MooTool'}
        ]
    }
})
