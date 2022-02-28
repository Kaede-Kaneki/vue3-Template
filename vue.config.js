'use strict';

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports={
    publicPath:'./',
    assetsDir:'static',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    devServer: {
        port: 5050,
        disableHostCheck: true,
        proxy: {
            '/bg': {     //这里最好有一个 /
                target: 'https://app.autostreets.com/',  // 后台接口域名
                ws: true,        //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite:{
                    '^/bg': ''
                }
            }
        }
    },
    // Babel 显式转译列表
    transpileDependencies: [],
    // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                'src': resolve('src'),
            }
        },
        plugins:[
            require('unplugin-element-plus/webpack')({}),
        ],
    },

}
