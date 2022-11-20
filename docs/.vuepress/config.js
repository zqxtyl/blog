const { getChildren } = require('vuepress-sidebar-atuo');
module.exports = {
  theme: 'reco',
  dest: 'blog',
  title: 'ZQX', //网站标题
  description: 'Focus on the good', //网站描述
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta',{name: 'viewport',content: 'width=device-width,initial-scale=1,user-scalable=no',},],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    //导航
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'About', link: '/about/', icon: 'reco-account' },
      {
        text: '前端技术',
        items: [
            { text: 'JavaScript', link: '/leading/js/' },
            { text: 'vue', link: '/leading/vue/' }
        ],
        icon: 'reco-account'
    },
      { text: 'Tools', link: '/note/', icon: 'reco-other' },
      {text: 'GitHub',link: 'https://github.com/zqxtyl',icon: 'reco-github',},
    ],
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png',
        link: 'https://www.recoluan.com',
      },
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category', // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag', // 默认文案 “标签”
      },
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    displayAllHeaders: true,
    sidebarDepth: 1, //左侧导航显示的层级
    sidebar: {
      '/leading/': [
        {
          title: 'js', //组名
          collapsable: true,
          children: ['js/js对象','js/js函数的四种调用方式'], //该分组下要显示的文件的目录
        },
        {
          title: 'vue', //组名
          collapsable: true,
          children: ['vue/vue基础笔记','vue/vue组件'], //该分组下要显示的文件的目录
        },
        // {
        //   title: 'vue', //组名
        //   collapsable: true,
        //   children: getChildren('./docs/leading/vue'), //该分组下要显示的文件的目录
        // },
      ],
      '/note/': [
        {
          title: '工具集', //组名
          collapsable: true,
          children: getChildren('./docs/note/tools'), //该分组下要显示的文件的目录
        },
      ],
    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    logo: 'https://i.postimg.cc/TwTtKwc9/avatar.jpg',
    author: '千禧',
    authorAvatar: 'https://i.postimg.cc/TwTtKwc9/avatar.jpg',
    // 项目开始时间
    startYear: '2022',

    valineConfig: {
      appId: 'a3bGixZUclAI4HiojLKRIw2G-gzGzoHsz', // your appId
      appKey: 'eRLjT3bXIax8WPNRsTBSpIgo', // your appKey
      placeholder: '是时候展现真正的技术了',
      avatar: 'wavatar', // 评论用户的头像类型
      highlight: true, // 代码高亮
      recordIP: true, // 记录评论者的IP
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '我再没见过 像你一般的星空',
            artist: 'Seto',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg',
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: 'float',
        // 悬浮窗样式
        floatStyle: { bottom: '10px', 'z-index': '999999' },
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    ['vuepress-plugin-code-copy', true],
    // [
    //   'permalink-pinyin',
    //   {
    //     lowercase: true,
    //     separator: '-'
    //   }
    // ]
  ],
};
