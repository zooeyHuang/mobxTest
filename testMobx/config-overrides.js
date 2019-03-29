const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy} = require('customize-cra');
//配置自己的config
const setGlobalObject = value => config => {
    //生产环境
    if(config.mode=='production'){
        //配置publicPath
        config.output.publicPath = '//www.baidu.com';
        //打包输出文件
        config.output.filename = 'static/js/[name].js';
        config.output.chunkFilename = 'static/js/[name].chunk.js';
        console.log(config.plugins[5]);
        //MiniCssExtractPlugin
        config.plugins[5].options.filename = 'static/css/[name].css';
        config.plugins[5].options.chunkFilename = 'static/css/[name].chunk.css';
    }
    return config
};
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
    }),
    setGlobalObject('self'),
    addDecoratorsLegacy()
);