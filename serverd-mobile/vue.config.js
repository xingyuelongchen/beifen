const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
    productionSourceMap: false,// 不生成.map映射文件
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].minify = false;
            return args;
        });
    },
    // configureWebpack: {
    //     plugins: [
    //         new PrerenderSPAPlugin({
    //             // Required - The path to the webpack-outputted app to prerender.
    //             staticDir: path.join(__dirname, 'dist'),
    //             // Required - Routes to render.
    //             routes: [] ,
    //         })
    //     ]
    // },
    publicPath:'./',
    devServer: {
        // open: true, //是否自动弹出浏览器页面
        // host: "192.168.101.102",
        // host: 'localhost',
        // port: '8080',
        // https: true,   //是否使用https协议
        hotOnly: true, //是否开启热更新
        proxy: {
            '/api': {
                target: 'http://www.guangyizhou.cn', //API服务器的地址
                ws: true,  //代理websockets
                changeOrigin: true, // 虚拟的站点需要更换origin
                // pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                //     '^/api': '/homes'
                // }
            },
            '/studyapi': {
                target: 'http://www.guangyizhou.cn',
                ws: true,  //代理websockets
                changeOrigin: true, // 虚拟的站点需要更换origin

            }
        },
    }
}
