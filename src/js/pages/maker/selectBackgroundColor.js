export default (Pickr) => {
    (() => {
        const colors = document.querySelectorAll('.prg-selectBackgroundColor-color')
        const canvas = document.querySelector('#prg-canvas')

        colors.forEach((color) => {
            color.addEventListener('click', () => {
                const colorCode = color.dataset.code
                canvas.style.backgroundColor = colorCode
            }, false)
        })

        const pickr = Pickr.create({
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
            console.log(code)
            canvas.style.backgroundColor = code
        })

    })()
}
