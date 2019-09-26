export default () => {
    (() => {
        const faceframe = document.querySelector('#prg-canvas')
        const createButton = document.querySelector('#prg-createButton');
        createButton.addEventListener('click', async () => {
            // アイコンを作ります
            const offset = faceframe.getBoundingClientRect()

            const canvas = await html2canvas(faceframe, {
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
    })();
}
