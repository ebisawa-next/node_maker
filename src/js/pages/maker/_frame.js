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
        console.log('show selected frame')
    }

    hideAllFrames() {
        this.allFrames.forEach((frame) => {
            frame.classList.remove('is-selected')
        })
    }

    oshushi() {
        console.log('oshushi')
    }
}

export default ((observer) => {
    const frame = new Frame()

    frame.init()

    observer.on('hide', frame.oshushi)

    // onで起こしたいイベントを登録
    observer.on('tabs.clicked', (index) => {
        frame.showSelectedFrame(index)
        // tab.onTabsClicked(index)
    })


    frame.root.addEventListener('click', () => {
        observer.emit('hide')
    }, false)

    observer.emit('hide')

    observer.on('tabs.clicked', () => {
        console.log('tab clicked ok')
    })
})
