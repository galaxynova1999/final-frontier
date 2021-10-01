const path = require('path');

const articlePath = path.resolve(__dirname, '../../article');

const algorithmPath = path.resolve(__dirname, '../../algorithm');

const notesPath = path.resolve(__dirname, '../../notes');

const basicPath = path.resolve(__dirname, '../../basic');


const algorithmMap = new Map([
    ['leetcode', {name: 'LeetCode', order: 1, collapsable: false}],
    ['lcof', {name: '剑指Offer', order: 2, collapsable: false}],
    ['extra', { name: '补充题', order: 3, collapsable: false}]
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
]);


module.exports = {
    notesMap,
    notesPath,
    algorithmPath,
    algorithmMap,
    basicMap,
    basicPath,
    articleMap,
    articlePath
}
