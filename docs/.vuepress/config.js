const fs = require('fs');
const path = require('path');
const articlePath = path.resolve(__dirname, '../article');
const algorithmPath = path.resolve(__dirname, '../algorithm');
const notesPath = path.resolve(__dirname, '../notes');
const algorithmMap = new Map([
    ['leetcode', {name: 'LeetCode', order: 1, collapsable: false}],
]);
const articleMap = new Map([
    ['framework', {name: '前端框架', order: 1, collapsable: false}],
    ['js', {name: 'JS & TS', order: 2, collapsable: false}],
    ['browser', {name: '浏览器', order: 5, collapsable: false}],
    ['engineering', {name: '前端工程化', order: 3, collapsable: false}],
    ['nodejs', {name: 'NodeJS', order: 6, collapsable: false}],
    ['tech', {name: '技术扩展', order: 4, collapsable: false}],
]);
const notesMap = new Map([
    ['professional-js-for-web-developers', {name: 'JS高级程序设计', order: 1, collapsable: false}],
    ['you-dont-know-js',{name: '你不知道的JS', order: 2, collapsable: false}]
]);
const generateBar = (pathname, pathNameMap) => {
    const directory = fs.readdirSync(pathname);
    const exportObject = [];
    directory.sort((a, b) => {
        if(pathNameMap.has(a) &&
            pathNameMap.has(b) &&
            pathNameMap.get(a).order > pathNameMap.get(b).order
        ) {
            return 1;
        }
        return -1;
    });
    directory.forEach((dir) => {
        if(pathNameMap.has(dir)) {
            const subDir = fs.readdirSync(pathname + `/${dir}`);
            const filenames = subDir.reduce((prev, sub) => {
                if(sub !== 'image') {
                   const name = sub.split(".")[0];
                   prev.push(`./${dir}/${name}`);
                }
                return prev;
            }, []);
            exportObject.push({
                title: pathNameMap.get(dir).name,
                collapsable: pathNameMap.get(dir).collapsable,
                children: filenames
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
        ['mathjax', {
             showError: true
        }]
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
