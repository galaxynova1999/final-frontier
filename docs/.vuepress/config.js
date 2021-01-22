const articleSideBar = require("./config/articleSideBar");
const issueSideBar = require("./config/issueSideBar");
const notesSideBar = require("./config/notesSideBar");

module.exports = {
    title: 'Blog',
    base: '/final-frontier/',
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top'
    ],
    themeConfig: {
        lastUpdated: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '博文', link: '/article/' },
            { text: '杂文', link: '/issue/' },
            { text: '读书笔记', link: '/notes/' },
            { text: 'GitHub', link: 'https://github.com/galaxynova1999' },
        ],
        sidebar: {
            '/article/': articleSideBar,
            '/issue/': issueSideBar,
            '/notes/': notesSideBar,
        }
    }
}
