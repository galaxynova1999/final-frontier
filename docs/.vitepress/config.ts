import {defineConfig} from "vitepress";
import * as fs from 'fs';
import fm from 'front-matter';
import * as path from "path";

export const articlePath = path.resolve(__dirname, '../article');

export const algorithmPath = path.resolve(__dirname, '../algorithm');

export const notesPath = path.resolve(__dirname, '../notes');

export const basicPath = path.resolve(__dirname, '../basic');


export const algorithmMap = new Map([
  ['leetcode', {name: 'LeetCode', order: 1, collapsable: false}],
  ['lcof', {name: '剑指Offer', order: 2, collapsable: false}],
  ['extra', { name: '补充题', order: 3, collapsable: false}],
  ['lcci', { name: '面试题', order: 4, collapsable: false}]
]);

export const articleMap = new Map([
  ['framework', {name: '前端框架', order: 1, collapsable: false}],
  ['js', {name: 'JS & TS', order: 2, collapsable: false}],
  ['browser', {name: '浏览器', order: 5, collapsable: false}],
  ['engineering', {name: '前端工程化', order: 3, collapsable: false}],
  ['nodejs', {name: 'NodeJS', order: 6, collapsable: false}],
  ['tech', {name: '技术扩展', order: 4, collapsable: false}],
]);

export const notesMap = new Map([
  ['professional-js-for-web-developers', {name: 'JS高级程序设计', order: 1, collapsable: false}],
  ['you-dont-know-js',{name: '你不知道的JS', order: 2, collapsable: false}]
]);

export const basicMap = new Map([
  ['js', {name: 'JS & ES6', order: 1, collapsable: false}],
  ['css', {name: 'CSS', order: 2, collapsable: false}],
  ['data-structure', {name: '数据结构', order: 3, collapsable: false}]
]);


export const generateBar = (prefix: string, pathname: string, pathNameMap: Map<string, {name: string; order: number; collapsable: boolean}>) => {
  const directory = fs.readdirSync(pathname);
  const exportObject: Array<{text: string; collapsable: boolean; items: Array<{text: string; link: string}>}> = [];
  directory.sort((a, b) => {
    if(pathNameMap.has(a) &&
      pathNameMap.has(b) &&
      pathNameMap.get(a)!.order > pathNameMap.get(b)!.order
    ) {
      return 1;
    }
    return -1;
  });
  let firstFileName: string | null = null;
  directory.forEach((dir) => {
    if(pathNameMap.has(dir)) {
      const subDir = fs.readdirSync(pathname + `/${dir}`);
      const filenames = subDir.reduce((prev, sub) => {
        if(sub !== 'image' && sub !== 'todo') {
          const name = sub.split(".")[0];
          const file = fs.readFileSync(pathname + `/${dir}/` + sub, {encoding: 'utf-8'});
          const {attributes} = fm(file);
          const {title} = attributes as Record<string, any>;
          prev.push({
            text: title,
            link: `${prefix}${dir}/${name}`
          });
          if(!firstFileName) {
            firstFileName = `${dir}/${name}`;
          }
        }

        return prev;
      }, [] as any);
      if(filenames.length) {
        exportObject.push({
          text: `${pathNameMap.get(dir)?.name} (${filenames.length})`,
          collapsable: pathNameMap.get(dir)!.collapsable,
          items: filenames
        })
      }
    }
  })
  return {side: exportObject, firstFileName};
}



const {side: articleNav, firstFileName: articleFilename} = generateBar('/article/', articlePath, articleMap);
const {side: algorithmNav, firstFileName: algorithmFilename} = generateBar('/algorithm/', algorithmPath, algorithmMap);
const {side: notesNav, firstFileName: notesFilename} = generateBar('/notes/', notesPath, notesMap);
const {side: basicNav, firstFileName: basicFilename} = generateBar('/basic/', basicPath, basicMap);


export default defineConfig({
    base: '/final-frontier/',
    title: 'Final-Frontier',
    // plugins: [
    //     '@vuepress/nprogress',
    //     '@vuepress/back-to-top',
    //     'reading-progress',
    //     ['@maginapp/katex', { delimiters: 'dollars' }]
    // ],
    head: [
        [
            'link',
            { rel: 'icon', href: '/final-frontier/favicon.png'}
        ]
    ],
    lastUpdated: true,
    lang: 'zh-CN',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        logo: '/favicon.png',
        socialLinks: [
          { icon: 'github', link: 'https://github.com/galaxynova1999' },
        ],
        lastUpdatedText: '上次更新',
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
        },
        footer: {
          copyright: 'Copyright © 2020-present'
        },
        docFooter: {
          prev: '上一篇文章',
          next: '下一篇文章',
        },
        returnToTopLabel: '返回顶部'
    },
})
