import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "gkit",
  description: "Go 服务框架",
  base: '/gkit-doc/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/intro/' },
      {
        text: '组件',
        items: [
          { text: '命令行工具', link: 'https://codeup.aliyun.com/qimao/leo/leo/blob/master/cmd/README.md' },
          { text: 'Lib 工具包', link: 'https://codeup.aliyun.com/qimao/leo/lib' },
        ]
      },
      { text: '参考', link: '/reference/api-examples' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '简介', link: '/intro/' },
          { text: '设计理念', link: '/intro/design' },
          { text: '常见问题', link: '/intro/faq' },
          { text: '项目结构', link: '/intro/design' }
        ]
      },
      {
        text: '快速开始',
        items: [
          { text: '项目初始化', link: '/getting-started/start' },
          { text: '代码示例', link: '/getting-started/examples' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: '项目初始化', link: '/component/' }
        ]
      },
      {
        text: '开源社区',
        items: [
          { text: '贡献指南', link: '/community/contribution' },
          { text: '文档维护', link: '/community/dcoumentation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/meiigo/gkit' }
    ]
  }
})
