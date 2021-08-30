const fs = require('fs');
const path = require('path');
const articlePath = path.resolve(__dirname, '../article');
const algorithmPath = path.resolve(__dirname, '../algorithm');
const notesPath = path.resolve(__dirname, '../notes');
const algorithmMap = new Map([
    ['leetcode', 'LeetCode'],
]);
const articleMap = new Map([
    ['framework', '前端框架'],
    ['js', 'JS & TS'],
    ['browser', '浏览器'],
    ['engineering', '前端工程化'],
    ['nodejs', 'NodeJS'],
    ['tech', '技术扩展'],
]);
const notesMap = new Map([
    ['professional-js-for-web-developers', 'JS高级程序设计'],
    ['you-dont-know-js','你不知道的JS']
]);
const generatePath = (path, names) => {
    return names.map(i => `./${path}/${i}`);
}
const generateBar = (pathname, pathNameMap) => {
    const directory = fs.readdirSync(pathname);
    const exportObject = [];
    directory.forEach((dir) => {
        if(pathNameMap.has(dir)) {
            const subDir = fs.readdirSync(pathname + `/${dir}`);
            const filenames = subDir.map(sub => sub.split(".")[0]);
            const filenamesWithPath = generatePath(dir, filenames);
            exportObject.push({
                title: pathNameMap.get(dir),
                collapsable: false,
                children: filenamesWithPath
            })
        }
    })
    return exportObject;
}

module.exports = {
    title: 'Final-Frontier',
    base: '/final-frontier/',
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        'reading-progress',
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
            { text: '读书笔记', link: '/notes/' },
            { text: '算法', link: '/algorithm/' },
            { text: 'GitHub', link: 'https://github.com/galaxynova1999' },
        ],
        sidebar: {
            '/article/': generateBar(articlePath, articleMap),
            '/notes/': generateBar(notesPath, notesMap),
            '/algorithm/': generateBar(algorithmPath, algorithmMap)
        }
    }
}
