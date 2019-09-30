class Frame {
    constructor(observer) {
        this.observer = observer
        this.root = document.querySelector('#prg-frame')
        this.allFrames = this.root.querySelectorAll('.prg-frameArea')
    }

    build() {
        this.init()
    }

    init() {
        this.showSelectedFrame(0)
    }

    showSelectedFrame(index) {
        this.hideAllFrames()
        this.allFrames[index].classList.add('is-selected')
    }

    hideAllFrames() {
        this.allFrames.forEach((frame) => {
            frame.classList.remove('is-selected')
        })
    }
}

export default ((observer) => {
    const frame = new Frame(observer)
    frame.build()

    // // onで起こしたいイベントを登録
    observer.on('tabs.clicked', (index) => {
        frame.showSelectedFrame(index)
    })
})
