class Tab {
    constructor() {
        this.root = document.querySelector(('#prg-tab'))
        this.tabs = this.root.querySelectorAll('.prg-tab-items-item')
    }
    init () {
        this.resetTabs()
        this.selectTab(0)
    }
    // タブがクリックされた時のハンドラ
    onTabsClicked(index) {
        this.resetTabs()
        this.selectTab(index)
    }
    resetTabs() {
        this.tabs.forEach((tab) => {
            tab.classList.remove('is-selected')
        })
    }
    selectTab(index) {
        this.tabs[index].classList.add('is-selected')
    }
}

export default ((observer) => {
    const tab = new Tab()

    // 初期化
    tab.init()

    // onで起こしたいイベントを登録
    observer.on('tabs.clicked', (index) => {
        tab.onTabsClicked(index)
    })

    // イベントリスナ
    for(const[index, t] of tab.tabs.entries()) {
        t.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category
            observer.emit('tabs.clicked', index)
        }, false)
    }

})
