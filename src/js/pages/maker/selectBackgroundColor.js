class BgColor {
    constructor(observer, Pickr) {
        this.Pickr = Pickr
        this.observer = observer
        this.canvas = document.querySelector('#prg-canvas')
        this.colors = document.querySelectorAll('.prg-selectBackgroundColor-color')
    }

    init () {
        this.createPickr()
        console.log('init bgcolor')
    }

    clickedColors (color) {
        const colorCode = color.dataset.code
        document.querySelector('#prg-canvas').style.backgroundColor = colorCode
    }

    createPickr() {
        const pickr = this.Pickr.create({
            el: '.prg-selectBackgroundColor-pick',
            theme: 'classic', // or 'monolith', or 'nano'

            useAsButton: true,
            components: {
                opacity: false,
            },

            default: '#ed6103',

            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction: {
                    input: true,
                    clear: true,
                },
            },
            strings: {
                clear: '閉じる', // Default for clear button
            }
        })

        // リアルタイムに変わる
        // もうちょい軽く動かしたいよね
        pickr.on('change', (color, instance) => {
            const code = color.toRGBA().toString(3)
            this.canvas.style.backgroundColor = code
        })
    }
}

export default (observer, Pickr) => {
    const bgColor = new BgColor(observer, Pickr)
    bgColor.init()

    // イベント登録
    observer.on('clicked.colors', bgColor.clickedColors)

    bgColor.colors.forEach((color) => {
        color.addEventListener('click', () => {
            observer.emit('clicked.colors',　color)
        }, false)
    })
}
