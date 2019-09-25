// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'assets'),
        port: 8080,
        host: `localhost`,
    },
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        app:[
            '@babel/polyfill',
            'webpack-hot-middleware/client?reload=true&timeout=1000',
            './src/js/main.js'
        ]
    },

    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "bundle.js"
    },
    plugins: [],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                'modules': 'false', //commonjs,amd,umd,systemjs,auto
                                'useBuiltIns': 'usage',
                                'targets': '> 0.25%, not dead',
                                'corejs': 3
                            }
                        ]
                    ]
                }
            }]
        }]
    }
};
