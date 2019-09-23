(() => {
    addEventListener = () => {
        const overlay = document.querySelector('#prg-overlay')
        const onemore = document.querySelector('#prg-result-onemore')
        const bg = document.querySelector('#prg-result-bg')
        onemore.addEventListener('click', () => {
            overlay.classList.add('is-hide')
        }, false)
        bg.addEventListener('click', () => {
            overlay.classList.add('is-hide')
        }, false)
    }
    addEventListener()
})()
