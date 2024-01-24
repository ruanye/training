import { defineConfig } from 'vitepress';
// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-cn',
  title: '寒假师资培训',
  description: 'Vite & Vue powered static site generator.',
  markdown: {
    lineNumbers: true //开始 mark 代码行号显示
  },
  themeConfig: {
    nav: [
      { text: '人培方案', link: '/01' },
      // ...
    ],

    sidebar: [
      {
        text: '人培方案和课程体系',
        items: [
          { text: '人培方案和课程体系', link: '/01' },
        
        ],
      },
      {
        text: '课程、项目技术讲解',
        items: [
          { text: '课程项目技术讲解', link: '/03' },
          { text: 'VUE-CLI', link: '/04' },
        ]
      },
      {
        text: '蓝桥杯',
        items: [
          { text: '蓝桥杯 WEB 赛项', link: '/05' },
          { text: '蓝桥杯 WEB 赛项真题解析', link: '/06' },
        ]
      },
      {
        text: '',
        items: [
          { text: '鸿蒙开发介绍', link: '/05' }
        ]
      },
      
    ],
  },
});
