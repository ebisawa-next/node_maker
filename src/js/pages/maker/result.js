class Result {
    constructor(observer) {
        this.observer = observer
        this.root = document.querySelector('#prg-overlay')
        this.onemore = this.root.querySelector('#prg-result-onemore')
        this.bg = this.root.querySelector('#prg-result-bg')
    }
    build() {
        this.init()
        this.eventListener()
    }
    init() {
        this.hideOverlay()
    }
    eventListener() {
        this.observer.on('created.icon', this.showOverlay)
        this.observer.on('created.icon', this.showIcon)
        this.observer.on('hide.overlay', this.hideOverlay)

        this.bg.addEventListener('click', () => {
            this.observer.emit('hide.overlay')
        })
        this.onemore.addEventListener('click', () => {
            this.observer.emit('hide.overlay')
        })
    }

    hideOverlay() {
        document.querySelector('#prg-overlay').classList.add('is-hide')
    }

    showOverlay() {
        document.querySelector('#prg-overlay').classList.remove('is-hide')
    }

    showIcon(imgData) {
        document.querySelector('#prg-result-icon').src = imgData
        document.querySelector('#prg-result-download').href = imgData
    }
}

export default (observer) => {
    const result = new Result(observer)
    result.build()
}
