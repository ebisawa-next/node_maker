(function () {
    function addEventListener () {
        const parts = document.querySelectorAll('.prg-frame-parts');
        for (const part of parts) {
            part.addEventListener('click', () => {
                const category = part.dataset.category,
                    path = part.dataset.path,
                    url = `url(${part.dataset.url}/cv/${path}`,
                    target = document.getElementById(`prg-canvas-${category}`)
                console.log(url)
                target.style.backgroundImage = url
            }, false);
        }

        const nones = document.querySelectorAll('.prg-frame-none')
        for (const none of nones) {
            none.addEventListener('click', () => {
                const category = none.dataset.category,
                    noneTarget = document.getElementById(`prg-canvas-${category}`)
                noneTarget.style.backgroundImage = 'none'
            }, false);
        }
    }
    addEventListener();
})();