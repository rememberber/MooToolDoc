import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MooTool",
  description: "Handy desktop toolset for developers",
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo/logo-128.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' },
      { text: '更新日志', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'MooTool功能',
        items: [
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
