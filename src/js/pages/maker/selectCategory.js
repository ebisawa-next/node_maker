class SelectCategory {
    constructor (observer) {
        this.observer = observer
        this.selectCategories = document.querySelectorAll('.prg-selectCategory')
    }

    init() {}

    hideAllCategories(categories) {
        categories.forEach((category) => {
            category.classList.remove('is-selected')
        })
    }
    selected(data) {
        const currentCategory = data.category,
            parent = data.parent
        // 元になるフレーム探す
        const frame = document.querySelector(`.prg-parts-frame-${parent}`)

        const frs = frame.querySelectorAll('.prg-selectParts')
        frs.forEach((f) => {
            f.classList.remove('is-selected')
            if(f.dataset.category == currentCategory) {
                f.classList.add('is-selected')
            }
        })
    }
}

export default (observer) => {
    const selectCategory = new SelectCategory(observer)

    // イベントリスナ
    observer.on('selected.category', selectCategory.selected)

    const selectCategories = selectCategory.selectCategories
    selectCategories.forEach((selectCategory) => {
        const parent = selectCategory.dataset.parent
        const children = selectCategory.querySelectorAll('.prg-selectCategory-child')
        children.forEach((child) => {
            const category = child.dataset.category
            child.addEventListener('click', () => {
                observer.emit('selected.category', {parent: parent, category: category})
            })
        })
    })
}

//波動拳になってしまう