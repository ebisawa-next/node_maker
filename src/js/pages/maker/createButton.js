class CreateButton {
    constructor(observer, html2canvas) {
        this.target = document.querySelector('#prg-canvas')
        this.offset = this.target.getBoundingClientRect()
        this.face = document.querySelector('#prg-createButton')
        this.all = document.querySelector('#prg-createButtonAll')
        this.html2canvas = html2canvas
        this.observer = observer
    }

    async createIcon(options) {
        const canvas = await html2canvas(this.target, options)
        const imgData = canvas.toDataURL()

        this.observer.emit('created.icon', imgData)
    }
}

export default (observer, html2canvas) => {
    const createButton = new CreateButton(observer, html2canvas)

    createButton.face.addEventListener('click', () => {
        createButton.createIcon({
            width: 200,
            height: 200,
            x: createButton.offset.left + 50,
            y: createButton.offset.top + 20
        })
    }, false)

    createButton.all.addEventListener('click', () => {
        createButton.createIcon()
    })
}
