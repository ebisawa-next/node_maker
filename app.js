/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require('express');
const fs = require ('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir).bind(util);

var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});


/* 3. 以後、アプリケーション固有の処理 */
app.use(express.static(__dirname));

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
        children: null
    },
    {
        name: 'eye',
        children: null
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
                name: 'bottoms'
            }
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
            }
        ]
    },
    {
        name: 'free',
        children: [
            {
                name: 'back'
            },
            {
                name: 'front'
            }
        ]
    },
    {
        name: 'bg',
        children: null
    }
]

const getImagePathes = async (categories) => {
    let res = [];
    for (const category of categories) {
        if(category.children) {
            const a = []
            for(const child of category.children) {
                const childPathes = await readdir(`./assets/images/pages/maker/parts/${category.name}/${child.name}`)
                childPathes.filter((childPath) => {
                    return childPath != 'cv'
                })
                await a.push(childPathes)
            }
            await res.push(a);
        } else {
            const pathes = await readdir(`./assets/images/pages/maker/parts/${category.name}`)
            pathes.filter((path) => {
                return path != 'cv'
            })
            await res.push(pathes)
        }
    }
    return res;
}

app.get("/maker", (req, res, next) => {
    (async () => {
        const tabs = categories;
        const sushi = await getImagePathes(categories)
        console.log(sushi)
        const parts = await readdir('./assets/images/pages/maker/parts/face');
        res.render("./maker/index", {
            tabs: tabs,
            parts: parts
        });
    })();
});

// makerのrouter
// app.use('/', require('./routes/maker.js'));
