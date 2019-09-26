/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require('express');
const fs = require ('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir).bind(util);

const multer = require('multer');
const multipart = multer();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const devServerEnabled = true;
var app = express();
const port = 8080;

/* 2. listen()メソッドを実行して8080番ポートで待ち受け。*/
// var server = app.listen(8080, function () {
//     console.log("Node.js is listening to PORT:" + server.address().port);
// });

if (devServerEnabled) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));
}
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(port, () => {
    console.log('Server started on port:' + port);
});

/* 3. 以後、アプリケーション固有の処理 */
// app.use(express.static(__dirname));

// 写真のサンプルデータ
var photoList = [{
    id: "001",
    name: "photo001.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo001.jpg"
}, {
    id: "002",
    name: "photo002.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo002.jpg"
}]


// タブ画像引っ張ってみる
app.get('/api/maker/tab', function (req, res, next) {
    // タブ取得してみる
    (async () => {
        const tabs = await readdir('./assets/images/pages/maker/tab');
        let sushi = [];
        for (var i = 0; i < tabs.length; i++) {
            sushi.push({
                name: tabs[i]
            })
        }
        res.json(sushi)
    })();
});
// View EngineにEJSを指定。
app.set('view engine', 'ejs');


// 写真リストを取得するAPI
app.get("/api/photo/list", function (req, res, next) {
    res.json(photoList);
});

// 写真リストを取得するAPI
app.get("/api/photo/:photoId", function (req, res, next) {
    var photo;
    for (i = 0; i < photoList.length; i++) {
        if (photoList[i].id == req.params.photoId) {
            var photo = photoList[i];
        }
    }
    res.json(photo);
});

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function (req, res, next) {
    res.render("index/index", {});
});


// カテゴリの設定
const categories = [
    {
        name: 'face',
        children: null
    },
    {
        name: 'front',
        children: null
    },
    {
        name: 'back',
        children: null,
        color: [
            '01',
            '02',
            '03',
            '04'
        ]
    },
    {
        name: 'eye',
        children: null,
    },
    {
        name: 'nose',
        children: null
    },
    {
        name: 'mouse',
        children: null
    },
    {
        name: 'cloth',
        children: [
            {
                name: 'tops'
            },
            {
                name: 'bottoms'
            },
            {
                name: 'onepiece'
            },
            {
                name: 'socks'
            },
            {
                name: 'shoes'
            },
        ]
    },
    {
        name: 'accessories',
        children: [
            {
                name: 'glass'
            },
            {
                name: 'head'
            },
            {
                name: 'hige'
            },
            {
                name: 'hokuro'
            },
            {
                name: 'pias'
            },
            {
                name: 'strap'
            }
        ]
    },
    {
        name: 'free',
        children: [
            {
                name: 'front'
            }
        ]
    },
]

const getDirectoryPathes = async (categoryName, parentName) => {
    const obj = {}
    let pathes
    obj.name = categoryName
    if (parentName) {
        pathes = await readdir(`./assets/images/pages/maker/parts/${parentName}/${categoryName}`)
    } else {
        pathes = await readdir(`./assets/images/pages/maker/parts/${categoryName}`)
    }
    obj.parts = pathes
    return obj
}

const getImagePathes = async (categories) => {
    let res = [];
    for (const category of categories) {
        if(category.children) {
            const obj = {}
            const parentName = category.name
            obj.name = parentName
            obj.parts = null
            obj.children = []
            for(const child of category.children) {
                const pathes = await getDirectoryPathes(child.name, parentName)
                obj.children.push(pathes)
            }
            // res.push(a)
            res.push(obj)
        } else {
            const obj = await getDirectoryPathes(category.name)
            res.push(obj)
        }
    }
    return res
}
app.get("/maker", (req, res, next) => {
    (async () => {
        const tabs = categories;
        const parts = await getImagePathes(categories)
        // const parts = await readdir('./assets/images/pages/maker/parts/face');
        res.render("./maker/index", {
            tabs: tabs,
            categories: parts
        });
    })();
});

// makerのrouter
// app.use('/', require('./routes/maker.js'));
