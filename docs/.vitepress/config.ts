import {defineConfig} from "vitepress";
import * as fs from 'fs';
import fm from 'front-matter';
import * as path from "path";
import {createRequire} from 'module';
const require = createRequire(import.meta.url);

const MdKatex = require('@iktakahiro/markdown-it-katex')

const articlePath = path.resolve(__dirname, '../article');

const algorithmPath = path.resolve(__dirname, '../algorithm');

const notesPath = path.resolve(__dirname, '../notes');

const basicPath = path.resolve(__dirname, '../basic');

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]


const algorithmMap = new Map([
  ['leetcode', {name: 'LeetCode', order: 1, collapsable: false}],
  ['lcof', {name: '剑指Offer', order: 2, collapsable: false}],
  ['extra', { name: '补充题', order: 3, collapsable: false}],
  ['lcci', { name: '面试题', order: 4, collapsable: false}]
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

const basicMap = new Map([
  ['js', {name: 'JS & ES6', order: 1, collapsable: false}],
  ['css', {name: 'CSS', order: 2, collapsable: false}],
  ['data-structure', {name: '数据结构', order: 3, collapsable: false}]
]);


const generateBar = (prefix: string, pathname: string, pathNameMap: Map<string, {name: string; order: number; collapsable: boolean}>) => {
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
      }, [] as Array<{ text: string; link: string }>);

      // 按序号排序
      if(dir === 'leetcode' || dir === 'lcof') {
        filenames.sort((a, b) => {
          return parseInt(a.text, 10) - parseInt(b.text, 10);
        })
      }

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
    // https://github.com/vuejs/vitepress/issues/529
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag),
        }
      }
    },
    base: '/final-frontier/',
    title: 'Final-Frontier',
    head: [
        [
            'link',
            { rel: 'icon', href: '/final-frontier/favicon.png'}
        ],
        [
          'link',
          {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css",
            integrity: 'sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0',
            crossorigin: 'anonymous'
          }
        ]
    ],
    lastUpdated: true,
    lang: 'zh-CN',
    markdown: {
      lineNumbers: true,
      config: (md) => {
        md.use(MdKatex, { delimiters: 'dollars' });
      }
    },
    themeConfig: {
        i18nRouting: false,
        logo: '/favicon.png',
        socialLinks: [
          { icon: 'github', link: 'https://github.com/galaxynova1999' },
        ],
        lastUpdated: {
          text: '上次更新'
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
        },
        footer: {
          copyright: 'Copyright © 2020-present'
        },
        docFooter: {
          prev: '上一篇文章',
          next: '下一篇文章',
        },
        outline: {
          label: '目录'
        },
        returnToTopLabel: '返回顶部',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            },
          }
        }
    },
})
