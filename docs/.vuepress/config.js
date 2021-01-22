const articleSideBar = require("./config/articleSideBar");
const issueSideBar = require("./config/issueSideBar");

module.exports = {
    title: 'Blog',
    base: '/final-frontier/',
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top'
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博文', link: '/article/' },
            { text: '杂文', link: '/issue/' },
            { text: '关于我', link: '/about/' },
            { text: 'GitHub', link: 'https://github.com/galaxynova1999' },
        ],
        sidebar: {
            '/article/': articleSideBar,
            '/issue/': issueSideBar
        }
    }
}
