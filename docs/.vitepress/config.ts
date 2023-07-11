import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-cn',
  title: '蓝桥云课',
  description: 'Vite & Vue powered static site generator.',
  markdown: {
    lineNumbers: true //开始 mark 代码行号显示
  },
  themeConfig: {
    nav: [
      { text: '开发流程', link: '/01' },

      // ...
    ],

    sidebar: [
      {
        text: '工作流程',
        items: [
          { text: '开发流程', link: '/01' },
          { text: '团队成员及分工', link: '/02' },
        ],
      },
      {
        text: 'vue2.x 构建大型项目',
        items: [
          { text: 'Vue2.x 中构建大型项目', link: '/03' },
          { text: 'VUE-CLI', link: '/04' },
        ]
      },
      {
        text: '项目制作',
        items: [
          { text: '开发首页', link: '/05' },
          { text: '开发登录页', link: '/06' },
          { text: 'axios 封装', link: '/07' },
        ]
      }
      
    ],
  },
});
