export default () => {
    const variation = document.querySelectorAll('.prg-selectVariation-variate')
    const bodyCanvas = document.getElementById(`prg-canvas-body`)
    const fronthairCanvas = document.getElementById(`prg-canvas-fronthair`)
    const backhairCanvas = document.getElementById(`prg-canvas-backhair`)

    variation.forEach((variate) => {
        variate.addEventListener('click', () => {
            const target = variate.dataset.target,
                val = variate.dataset.val,
                canvas = document.getElementById(`prg-canvas-${target}`)
            changeUrl(canvas, val)

            // 一緒に連動する人々
            if(target == 'face') {
                changeUrl(bodyCanvas, val)
                return
            }
            if(target == 'fronthair') {
                changeUrl(backhairCanvas, val)
                return
            }
            if(target == 'backhair') {
                changeUrl(fronthairCanvas, val)
                return
            }
        }, false)
    })

    const changeUrl = (canvas, val) => {
        const currentStyles = canvas.currentStyle || document.defaultView.getComputedStyle(canvas, '')
        const currentUrl = currentStyles.backgroundImage
        const str = currentUrl.split('_')
        str[1] = `_${val}.png`
        const newUrl = str[0] + str[1]
        canvas.style.backgroundImage = newUrl
    }
}
