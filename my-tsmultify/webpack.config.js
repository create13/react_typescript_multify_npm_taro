const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 
const webpackConfig = {
    mode:'development',
    entry: {},
    output:{
        path:path.resolve(__dirname, './dist/'),
        filename:'[name]/[name].[chunkhash:6].js'
    },
    //设置开发者工具的端口号,不设置则默认为8080端口
    devServer: {
        inline: true,
        port: 8082,
        compress: true,
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use: [
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['es2015','react'],
                            plugins: [['import', { "libraryName": "antd", "style": true }]]//--通过bable-plugin-import依赖 实现antd按需加载
                        },
                    }
                ]
            },
            {
                test: /\.(scss|sass|css)$/,
                loaders:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, 
                loader: 'url-loader',
                options: {
                  limit: 50000,
                  outputPath: 'img/'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx', '.scss','.json','.css', 'less'], //后缀名自动补全
        alias: {
            'encryption$': path.resolve(__dirname, './src/utils/encryption.ts'), // 定义简写形式
            'contextmenu$': path.resolve(__dirname, './src/utils/contextmenu.tsx'), // 定义简写形式
            'drag$': path.resolve(__dirname, './src/utils/drag.ts'), // 定义简写形式
            'format$': path.resolve(__dirname, './src/utils/format.ts'), // 定义简写形式
            'global$': path.resolve(__dirname, './src/utils/global.ts'), // 定义简写形式
            'multilingual$': path.resolve(__dirname, './src/utils/multilingual.ts'), // 定义简写形式
            'webSocket$': path.resolve(__dirname, './src/utils/webSocket.ts'), // 定义简写形式
            'utils$': path.resolve(__dirname, './src/utils/utils.tsx'), // 定义简写形式
            'myAxios$': path.resolve(__dirname, './src/utils/api/index.ts'), // 定义简写形式
            '@': path.resolve(__dirname, './src'),
            '#': path.resolve(__dirname, './src/pages')
        }
    },
    plugins: [
        new ExtractTextPlugin("[name]/[name].[chunkhash:6].css"),
        new CleanWebpackPlugin(
            ['dist'],
            {
                root: __dirname,　　　　　　　
                verbose:  true,        　　　　　　　　　　
                dry:      false        　　　　　　　　　　
            }
        )
    ],
};
 
// 获取指定路径下的入口文件
function getEntries(globPath) {
    const files = glob.sync(globPath),
    entries = {};
    files.forEach(function(filepath) {
        const split = filepath.split('/');
        const name = split[split.length - 2];
        entries[name] = './' + filepath;
    });
    return entries;
}
       
const entries = getEntries('src/pages/*/index.tsx');
Object.keys(entries).forEach(function(name) {
    webpackConfig.entry[name] = entries[name];
    const plugin = new HtmlWebpackPlugin({
       filename: name + '/' + name + '.html',
       template: './public/index.html',
       inject: true,
       chunks: [name]
    });
    webpackConfig.plugins.push(plugin);
})
module.exports = webpackConfig;