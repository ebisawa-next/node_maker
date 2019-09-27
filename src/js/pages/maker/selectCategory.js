export default () => {
    const selectCategories = document.querySelectorAll('.prg-selectCategory')
    selectCategories.forEach((selectCategory) => {
        const parent = selectCategory.dataset.parent
        const children = selectCategory.querySelectorAll('.prg-selectCategory-child')
        children.forEach((child) => {
            child.addEventListener('click', () => {
                const currentCategory = child.dataset.category
                // 元になるフレーム探す
                const frame = document.querySelector(`.prg-parts-frame-${parent}`)

                const frs = frame.querySelectorAll('.prg-selectParts')
                frs.forEach((f) => {
                    f.classList.remove('is-selected')
                    if(f.dataset.category == currentCategory) {
                        f.classList.add('is-selected')
                    }
                })


            }, false)
        })
    })

}

//波動拳になってしまう