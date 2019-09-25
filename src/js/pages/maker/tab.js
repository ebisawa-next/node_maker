export default () => {
    (() => {
        const tabItems = document.querySelectorAll('.prg-tab-items-item')
        tabItems.forEach((tab) => {
            tab.addEventListener('click', () => {
                // 全てのタブからis-selectedをremove
                tabItems.forEach((allTab) => {
                    allTab.classList.remove('is-selected')
                })
                // クリックしたやつだけis-selected
                tab.classList.add('is-selected')
            }, false)
        })
    })()
}
