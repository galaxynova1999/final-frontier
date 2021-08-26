module.exports =  [
    {
        title: '前端框架',
        collapsable: false,
        children: [
            './framework/react-performance',
        ]
    },
    {
        title: 'JS & TS',
        collapsable: false,
        children: [
             './js/arrow-function',
             './js/implement-promise',
             './js/nullish-coalescing-operator',
             './js/does-js-need-semicolon'
        ]
    },
    {
        title: '前端工程化',
        collapsable: false,
        children: [
            './engineering/webpack-hash',
            './engineering/webpack-hmr'
        ]
    },
    {
        title: 'HTML/CSS',
        collapsable: false,
    },
    {
        title: '浏览器',
        children: [
             './browser/browser-cache',
             './browser/event-loop'
        ],
        collapsable: false,
    },
    {
        title: '网络',
        collapsable: false,
    },
    {
        title: 'NodeJS',
        collapsable: false,
        children: [
            './nodejs/what-is-node-js',
            './nodejs/fe-module-system'
        ]
    },
    {
        title: '技术扩展',
        collapsable: false,
        children: [
            './tech/swagger-ts',
            './tech/ast',
            './tech/what-is-lerna'
        ]
    }
]
