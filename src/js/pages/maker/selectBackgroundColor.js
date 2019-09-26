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

            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],

            components: {

                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    clear: true,
                    save: true
                }
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
