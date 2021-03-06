const path = require('path');

module.exports = (env) => {
    return {
        mode: 'none',
        entry: path.resolve(`frontend/src/index.js`),
        output: {
            path: path.resolve('backend/public'),
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules: [{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('frontend/config/babel.config.json')
                }
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use:[
                    'style-loader', 
                    {loader: 'css-loader', options: {modules: true} }, 
                    'sass-loader'
                ]
            }, {
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            contentBase: path.resolve('frontend/public'),
            watchContentBase: true,
            host: "0.0.0.0",
            port: 9999,
            // 프록시 설정 --> /api 로 들어오면 로컬:8888로 찌르고 응답을 받아서 전달받을수 있게 설정해놈
            proxy: {
                '/api': 'http://localhost:8888'
            },
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    };
}