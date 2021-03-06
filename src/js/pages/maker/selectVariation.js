class Variation {
    constructor (observer) {
        this.observer = observer
        this.variation = document.querySelectorAll('.prg-selectVariation-variate')
        this.bodyCanvas = document.getElementById(`prg-canvas-body`)
        this.fronthairCanvas = document.getElementById(`prg-canvas-fronthair`)
        this.backhairCanvas = document.getElementById(`prg-canvas-backhair`)
    }

    init () {}

    clickedVariation (variate) {
        const target = variate.dataset.target,
            val = variate.dataset.val,
            canvas = document.getElementById(`prg-canvas-${target}`)

        changeUrl(canvas, val)

        // 一緒に連動する人々
        if (target == 'face') {
            const bodyCanvas = document.getElementById(`prg-canvas-body`)
            changeUrl(bodyCanvas, val)
            return
        }
        if (target == 'fronthair') {
            const backhairCanvas = document.getElementById(`prg-canvas-backhair`)
            changeUrl(backhairCanvas, val)
            return
        }
        if (target == 'backhair') {
            const fronthairCanvas = document.getElementById(`prg-canvas-fronthair`)
            changeUrl(fronthairCanvas, val)
            return
        }

        function changeUrl (canvas, val) {
            const currentStyles = canvas.currentStyle || document.defaultView.getComputedStyle(canvas, '')
            const currentUrl = currentStyles.backgroundImage
            const str = currentUrl.split('_')
            str[1] = `_${val}.png`
            const newUrl = str[0] + str[1]
            canvas.style.backgroundImage = newUrl
        }
    }
}

export default (observer) => {
    const variation = new Variation(observer)

    observer.on('clicked.variation', variation.clickedVariation)

    variation.variation.forEach((variate) => {
        variate.addEventListener('click', () => {
            observer.emit('clicked.variation', variate)
        }, false)
    })
}
