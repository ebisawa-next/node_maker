// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
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
            './src/main.js'
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
        rules: [
            {
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
            },
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    {
                        loader: "css-loader",
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            url: false,
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap,

                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: function (path) {
                            return '../' + path;
                        }
                        /* es2015ならば
                        publicPath : path => '../' + path
                        で書けます。*/
                    }
                }]
            }
        ]
    }
};
