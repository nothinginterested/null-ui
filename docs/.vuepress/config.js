module.exports = {
  base: '/null-ui/',
  title: 'NULL UI',
  extend: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: '最后更新时间',
    smoothScroll: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/docs/'},

    ],
    sidebar: {
      '/docs/': [
        '',
        {
          title: '入门',
          collapsable: false,
          children: [
            './get-start/start'
          ]

        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            './components/button',
            './components/switch'

          ]
        },
        {
          title: '数据展示',
          collapsable: false,
          children: ['./components/tabs']
        }

      ]
    }
  }
}
