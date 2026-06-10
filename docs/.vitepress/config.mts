import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            title: 'MooTool',
            description: 'Handy desktop toolset for developers',
            themeConfig: {
                siteTitle: 'MooTool',
                nav: [
                    {text: 'Home', link: '/'},
                    {text: 'Docs', link: '/function-map'},
                    {text: 'Changelog', link: 'https://github.com/rememberber/MooTool/releases'}
                ],
                sidebar: [
                    {
                        text: 'The Handiest All-in-One Toolbox',
                        items: [
                            {text: 'Overview', link: '/overview'},
                            {text: 'Feature Map', link: '/function-map'}
                        ]
                    }
                ],
                returnToTopLabel: 'Back to top',
                footer: {
                    message: 'Released under the MIT License.',
                    copyright: 'Copyright © 2024-present RememBerBer'
                }
            }
        },
        zh: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            title: 'MooTool',
            description: '开发者常备桌面小工具',
            themeConfig: {
                siteTitle: 'MooTool',
                nav: [
                    {text: '首页', link: '/zh/'},
                    {text: '文档', link: '/zh/function-map'},
                    {text: '更新日志', link: 'https://github.com/rememberber/MooTool/releases'}
                ],
                sidebar: [
                    {
                        text: '最趁手的All-in-One工具箱',
                        items: [
                            {text: 'Overview', link: '/zh/overview'},
                            {text: '功能地图', link: '/zh/function-map'}
                        ]
                    }
                ],
                returnToTopLabel: '返回顶部',
                footer: {
                    message: 'Released under the MIT License.',
                    copyright: 'Copyright © 2024-present RememBerBer'
                }
            }
        },
        ja: {
            label: '日本語',
            lang: 'ja',
            link: '/ja/',
            title: 'MooTool',
            description: '開発者向けデスクトップツールセット',
            themeConfig: {
                siteTitle: 'MooTool',
                nav: [
                    {text: 'ホーム', link: '/ja/'},
                    {text: 'ドキュメント', link: '/ja/function-map'},
                    {text: '更新履歴', link: 'https://github.com/rememberber/MooTool/releases'}
                ],
                sidebar: [
                    {
                        text: '最も便利なオールインワンツールボックス',
                        items: [
                            {text: '概要', link: '/ja/overview'},
                            {text: '機能マップ', link: '/ja/function-map'}
                        ]
                    }
                ],
                returnToTopLabel: 'トップに戻る',
                footer: {
                    message: 'Released under the MIT License.',
                    copyright: 'Copyright © 2024-present RememBerBer'
                }
            }
        }
    },
    themeConfig: {
        logo: '/logo/logo-128.png',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/rememberber/MooTool'}
        ],
        aside: 'left'
    }
})
