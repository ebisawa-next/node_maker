export default () => {
    (() => {
        const colors = document.querySelectorAll('.prg-selectBackgroundColor-color')
        const canvas = document.querySelector('#prg-canvas')

        colors.forEach((color) => {
            color.addEventListener('click', () => {
                const colorCode = color.dataset.code
                canvas.style.backgroundColor = colorCode
            }, false)
        })
    })()
}
