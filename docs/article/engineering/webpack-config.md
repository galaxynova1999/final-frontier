---
title: Webpack 基本配置
---


```javascript
// webpack.common.js
// 公共配置 不区分环境
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const { PROJECT_PATH, isDev } = require('../constant');

// 获取对应的css相关的loader 执行顺序 从后往前
const getCssLoader = (importLoaders, module) => {
    return [
        // 将css内容转化为style标签插入到index.html中的head里 是css处理的最后一步
        'style-loader',
        // 打包css 解析@import等语句
        {
            loader: "css-loader",
            options: {
                modules: module,
                sourceMap: isDev,
                importLoaders
            }
        },
        // 对css做一些预处理
        // 比如postcss-preset-env 可以将最新的 CSS 语法转换为目标环境的浏览器能够理解的 CSS 语法
        // postcss-normalize 从 browserslist 中自动导入所需要的 normalize.css 内容。
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: isDev,
            },
        }]
}


module.exports = {
    // 指定打包入口 本例中从src下的index.tsx开始打包
    entry: {
        app: path.resolve(PROJECT_PATH, "./src/index.tsx"),
    },
    // 指定打包输出的地方
    output: {
        // prod环境打包时 需要生成hash值 用于缓存
        filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
        // 输出到./dist目录下
        path: path.resolve(PROJECT_PATH, "./dist")
    },
    resolve: {
        // 指定可以解析的文件后缀
        extensions: ['.tsx', '.ts', '.js', '.json'],
        // 指定路径别名 如@代表./src   @/components => ./src/component
        alias: {
            '@': path.resolve(PROJECT_PATH, './src'),
        },
    },
    module: {
        rules: [
            {
                // 普通css文件
                test: /\.css$/,
                use: getCssLoader(1)
            },
            {
                // less文件
                test: /\.less$/,
                exclude: /\.module\.less$/,
                include: /node_modules/,
                use: [
                    // 先调用less-loader编译less文件为css
                    ...getCssLoader(2, false),
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: isDev,
                            lessOptions: {
                                javascriptEnabled: true,
                                // 做一些全局变量的修改 如这里的antd的主题色
                                modifyVars: {
                                    '@brand-primary': '#ff6611',
                                    '@brand-primary-tap': '#ff6611'
                                }
                            }
                        }
                    }
                ]
            },
            {
                // 模块化的less文件 (文件名含有module字段)
                test: /\.module\.less$/,
                use: [
                    // 对应loader的option里的module设置为true
                    ...getCssLoader(2, true),
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: isDev,
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        }
                    }
                ]
            },
            // 图片文件
            {
                test: [/\.jpe?g$/, /\.png$/],
                use: [
                    {
                        // 使用url-loader进行解析图片等文件 小图片还可以转化base64编码
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[contenthash:8].[ext]',
                            // 输出到assets下的image文件夹下
                            outputPath: 'assets/images',
                        },
                    },
                ],
            },
            // tsx文件或者js文件 调用babel-loader进行转化
            // babel自带ts解析器 所以这里不需要使用tsc进行编译
            {
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                // node-modules文件夹下的不编译
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        // 自动往index.html文件中写入内容
        new htmlWebpackPlugin({
            template: path.resolve(PROJECT_PATH, './public/index.html'),
            filename: "index.html",
            cache: false,
            // 一些压缩配置
            minify: isDev ? false : {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                useShortDoctype: true,
            }
        }),
        // 每次打包前清空./dist文件夹的内容
        new CleanWebpackPlugin(),
        // 将./public文件夹下的内容 复制到./dist/public里面
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(PROJECT_PATH, './public'),
                    from: '*',
                    to: path.resolve(PROJECT_PATH, './dist'),
                    toType: 'dir',
                },
            ],
        }),
        // 显示打包进度
        new WebpackBar({
            name: isDev ? '正在启动' : '正在打包',
            color: '#fa8c16',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
        },
    },
}
```
```javascript
// webpack.dev.js
// 开发环境的特殊配置
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const { SERVER_PORT, SERVER_HOST } = require('../constant');
const webpack = require("webpack");

module.exports = merge(commonConfig, {
    mode: 'development',
    // 指定dev Server相关的配置
    devServer: {
        host: SERVER_HOST,
        port: SERVER_PORT,
        stats: 'errors-only', // 终端仅打印 error
        clientLogLevel: 'silent', // 日志等级
        compress: true, // 是否启用 gzip 压缩
        // open: true, // 打开默认浏览器
        hot: true, // 热更新,
        disableHostCheck: true
    },
    // devtool: 'eval-source-map',
    // 与HMR有关
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})

```
```javascript
// webpack.prod.js
// 生产环境的配置 主要是指定mode: production
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    mode: 'production',
})
```

```javascript
// constant.js
// 一些常量
const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

const isDev = process.env.NODE_ENV !== 'production'; //从环境变量中读当前的打包环境

const SERVER_HOST = '0.0.0.0';
const SERVER_PORT = '3000';

module.exports = {
    PROJECT_PATH,
    PROJECT_NAME,
    isDev,
    SERVER_HOST,
    SERVER_PORT
}

```
