const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir).bind(util);

// カテゴリのマスタデータ
const categories = [{
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
        children: [{
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
        children: [{
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
        children: [{
            name: 'front'
        }]
    },
]

// ディレクトリ配下のパスを読みにいくメソッド
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

// パスオブジェクトを生成する
const getImagePathes = async (categories) => {
    let res = [];
    for (const category of categories) {
        if (category.children) {
            const obj = {}
            const parentName = category.name
            obj.name = parentName
            obj.parts = []
            obj.children = true
            for (const child of category.children) {
                const pathes = await getDirectoryPathes(child.name, parentName)
                obj.parts.push(pathes)
            }
            res.push(obj)
        } else {
            const obj = await getDirectoryPathes(category.name)
            res.push(obj)
        }
    }
    return res
}
(async() => {
    module.exports = await getImagePathes(categories)
})()
