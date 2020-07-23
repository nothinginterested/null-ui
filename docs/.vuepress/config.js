module.exports = {
  base: '/NULL/',
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
            './components/button'

          ]
        },
        {
          title: '表单组件',
          collapsable: false,
        }

      ]
    }
  }
}
