export default () => {
    (() => {
        const target = document.querySelector('#prg-canvas')
        const offset = target.getBoundingClientRect()
        const createButton = document.querySelector('#prg-createButton');
        const createButtonAll = document.querySelector('#prg-createButtonAll');

        // 顔だけ
        createButton.addEventListener('click', async () => {
            const canvas = await html2canvas(target, {
                width: 200,
                height: 200,
                x: offset.left + 50,
                y: offset.top + 20
            })
            const imgData = canvas.toDataURL()
            document.querySelector('#prg-result-icon').src = imgData
            document.querySelector('#prg-result-download').href = imgData

            // モーダルを開きます
            document.querySelector('#prg-overlay').classList.remove('is-hide')
        }, false)

        // 全身
        createButtonAll.addEventListener('click', async () => {
            const canvas = await html2canvas(target)
            const imgData = canvas.toDataURL()
            document.querySelector('#prg-result-icon').src = imgData
            document.querySelector('#prg-result-download').href = imgData

            // モーダルを開きます
            document.querySelector('#prg-overlay').classList.remove('is-hide')
        }, false)
    })();
}
