export default () => {
    const frameAreas = document.querySelectorAll('.prg-frameArea')
    const tabItems = document.querySelectorAll('.prg-tab-items-item')

    // 最初だけ選択済みにしておく
    document.querySelector('.prg-tab-items-item').classList.add('is-selected')
    document.querySelector('.mod-selectParts').classList.add('is-selected')
    // イベントリスナ
    const event = () => {
        tabItems.forEach((tab) => {
            tab.addEventListener('click', () => {
                console.log(tab.dataset.category)
                const category = tab.dataset.category

                // 全てのタブからis-selectedをremove
                tabItems.forEach((allTab) => {
                    allTab.classList.remove('is-selected')
                })
                // クリックしたやつだけis-selected
                tab.classList.add('is-selected')

                // フレーム消す
                frameAreas.forEach((frame) => {
                    frame.classList.remove('is-selected')
                    if (frame.dataset.category == category) {
                        frame.classList.add('is-selected')
                        const childFrames = frame.querySelectorAll('.mod-selectParts')
                        childFrames.forEach((childFrame) => {
                            childFrame.classList.remove('is-selected')
                        })
                        childFrames[0].classList.add('is-selected')
                    }
                })

            }, false)
        })
    }
    event()
}
