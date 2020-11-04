
module.exports = {
    productionSourceMap: false,// 不生成.map映射文件
    chainWebpack: config => {
        // 给html标签加上双引号
        config.plugin("html").tap(args => {
            args[0].minify = false;
            return args;
        });
    },

}