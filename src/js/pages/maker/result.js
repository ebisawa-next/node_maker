class Result {
    constructor() {
        this.root = document.querySelector('#prg-overlay')
        this.onemore = this.root.querySelector('#prg-result-onemore')
        this.bg = this.root.querySelector('#prg-result-bg')
    }
    init() {
        this.hideOverlay()
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
    const result = new Result()
    result.init()

    // 外部イベント
    observer.on('created.icon', result.showOverlay)
    observer.on('created.icon', result.showIcon)
    observer.on('hide.overlay', result.hideOverlay)

    // クリックイベント
    result.bg.addEventListener('click', () => {
        observer.emit('hide.overlay')
    }, false)
    result.onemore.addEventListener('click', () => {
        observer.emit('hide.overlay')
    }, false)
}
