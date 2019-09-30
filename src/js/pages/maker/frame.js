class Frame {
    constructor() {
        this.root = document.querySelector('#prg-frame')
        this.allFrames = this.root.querySelectorAll('.prg-frameArea')
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
    const frame = new Frame()

    frame.init()

    // onで起こしたいイベントを登録
    observer.on('tabs.clicked', (index) => {
        frame.showSelectedFrame(index)
        // tab.onTabsClicked(index)
    })


    frame.root.addEventListener('click', () => {
        observer.emit('hide')
    }, false)
})
