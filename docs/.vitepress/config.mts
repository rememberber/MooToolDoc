import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "MooTool",
  description: "Handy desktop toolset for developers",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/logo-128.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' },
      { text: '更新日志', link: 'https://github.com/rememberber/MooTool/releases' }
    ],

    sidebar: [
      {
        text: 'MooTool功能',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: '随手记', link: '/markdown-examples' },
          { text: '时间转换', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rememberber/MooTool' }
    ]
  }
})
