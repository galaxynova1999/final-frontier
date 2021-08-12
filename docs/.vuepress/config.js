const articleSideBar = require("./config/articleSideBar");
const issueSideBar = require("./config/issueSideBar");
const notesSideBar = require("./config/notesSideBar");
const algorithmSideBar = require('./config/algorithmSideBar');

module.exports = {
    title: 'Final-Frontier',
    base: '/final-frontier/',
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top'
    ],
    head: [
        [
            'link',
            { rel: 'icon', href: 'favicon.png'}
        ]
    ],
    themeConfig: {
        logo: '/favicon.png',
        lastUpdated: '上次更新',
        markdown: {
            lineNumbers: true
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '博文', link: '/article/' },
            { text: '杂文', link: '/issue/' },
            { text: '读书笔记', link: '/notes/' },
            { text: '算法', link: '/algorithm/' },
            { text: 'GitHub', link: 'https://github.com/galaxynova1999' },
        ],
        sidebar: {
            '/article/': articleSideBar,
            '/issue/': issueSideBar,
            '/notes/': notesSideBar,
            '/algorithm/': algorithmSideBar
        }
    }
}
