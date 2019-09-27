module.exports = [{
        name: 'face',
        children: null,
        variation: [
            '01',
            '02',
            '03',
            '04'
        ],
        removable: false
    },
    {
        name: 'fronthair',
        children: null,
        variation: [
            'bk',
            'gl',
            'gr',
            'rb',
            'wh',
            'yl',
        ],
        removable: true,
    },
    {
        name: 'backhair',
        children: null,
        variation: [
            'bk',
            'gl',
            'gr',
            'rb',
            'wh',
            'yl',
        ],
        removable: true,
    },
    {
        name: 'eye',
        children: null,
        variation: [
            'nml',
            'ner',
            'dst',
        ],
        removable: false
    },
    {
        name: 'nose',
        children: null,
        removable: true,
    },
    {
        name: 'mouse',
        children: null,
        removable: false,
    },
    {
        name: 'cloth',
        children: [{
                name: 'tops',
                removable: true,
            },
            {
                name: 'bottoms',
                removable: true,
            },
            {
                name: 'onepiece',
                removable: true
            },
            {
                name: 'socks',
                removable: true
            },
            {
                name: 'shoes',
                removable: true
            },
        ]
    },
    {
        name: 'accessories',
        children: [{
                name: 'glass',
                removable: true
            },
            {
                name: 'head',
                removable: true
            },
            {
                name: 'hige',
                removable: true
            },
            {
                name: 'hokuro',
                removable: true
            },
            {
                name: 'pias',
                removable: true
            },
            {
                name: 'strap',
                removable: true
            }
        ]
    },
    {
        name: 'free',
        children: [{
                name: 'front',
                removable: false,
            },
            {
                name: 'back',
                removable: false
            }
        ]
    },
]
