const { generateBar } = require("./utils/util");
const {
    articlePath,
    articleMap,
    algorithmPath,
    algorithmMap,
    notesMap,
    notesPath,
    basicMap,
    basicPath
} = require("./sidebar");


const [articleNav, articleFilename] = generateBar(articlePath, articleMap);
const [algorithmNav, algorithmFilename] = generateBar(algorithmPath, algorithmMap);
const [notesNav, notesFilename] = generateBar(notesPath, notesMap);
const [basicNav, basicFilename] = generateBar(basicPath, basicMap);


module.exports = {
    base: '/final-frontier/',
    title: 'Final-Frontier',
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        'reading-progress',
        ['@maginapp/katex', { delimiters: 'dollars' }]
    ],
    head: [
        [
            'link',
            { rel: 'icon', href: 'favicon.png'}
        ]
    ],
    themeConfig: {
        logo: '/favicon.png',
        repo: 'galaxynova1999/final-frontier',
        docsDir: 'docs',
        editLinks:true,
        smoothScroll: true,
        editLinkText: '内容有误？编辑此文章',
        lastUpdated: '上次更新',
        markdown: {
            lineNumbers: true
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '博文', link: `/article/${articleFilename}` },
            { text: '基础知识', link: `/basic/${basicFilename}`},
            { text: '算法', link: `/algorithm/${algorithmFilename}` },
            { text: '读书笔记', link: `/notes/${notesFilename}` }
        ],
        sidebar: {
            '/article/': articleNav,
            '/notes/': notesNav,
            '/algorithm/': algorithmNav,
            '/basic/': basicNav
        }
    }
}
