(function () {
    function addEventListener () {
        const parts = document.querySelectorAll('.prg-parts');
        for (const part of parts) {
            part.addEventListener('click', () => {
                const parentCategory = part.dataset.parentcategory,
                    category = part.dataset.category,
                    path = part.dataset.path,
                    target = document.getElementById(`prg-canvas-${category}`)
                let url = `url(/assets/images/pages/maker/parts/${category}/cv/${path})`

                // 親カテゴリがあったらURL変更
                if(parentCategory) {
                    url = `url(/assets/images/pages/maker/parts/${parentCategory}/${category}/cv/${path})`
                }
                target.style.backgroundImage = url
            }, false);
        }
    }

    addEventListener();
})();