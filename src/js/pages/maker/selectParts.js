class SelectParts {
    constructor () {
        this.parentFrames = document.querySelectorAll('.prg-parts-frame')
        this.frameParts = document.querySelectorAll('.prg-frame-parts')
        this.noneParts = document.querySelectorAll('.prg-frame-none')
    }

    init () {
        this.parentFrames.forEach((parentFrame) => {
            parentFrame.querySelector('.prg-selectParts').classList.add('is-selected')
        })
    }

    showSelectParts (index) {
        this.hideAllSelectParts()
        this.selectParts(index).classList.add('is-selected')
    }

    hideAllSelectParts () {
        this.selectParts.forEach((part) => {
            part.classList.remove('is-selected')
        })
    }

    clickedParts (part) {
        const category = part.dataset.category,
            path = part.dataset.path,
            url = `url(${part.dataset.url}${category}/cv/${path})`,
            target = document.getElementById(`prg-canvas-${category}`)
        target.style.backgroundImage = url
    }

    clickedNoneParts (category) {
        const target = document.getElementById(`prg-canvas-${category}`)
        target.style.backgroundImage = 'none'
    }
}

export default (observer) => {
    const selectParts = new SelectParts()
    selectParts.init()

    // onevent
    observer.on('clicked.parts', selectParts.clickedParts)
    observer.on('clicked.none.parts', selectParts.clickedNoneParts)

    // addevent
    selectParts.frameParts.forEach((part) => {
        part.addEventListener('click', () => {
            observer.emit('clicked.parts', part)
        }, false)
    })
    selectParts.noneParts.forEach((none) => {
        none.addEventListener('click', () => {
            const category = none.dataset.category
            observer.emit('clicked.none.parts', category)
        })
    })
}
