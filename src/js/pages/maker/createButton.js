export default () => {
    (() => {
        const faceframe = document.querySelector('#prg-canvas-faceframe')
        const createButton = document.querySelector('#prg-createButton');
        createButton.addEventListener('click', async () => {
            // アイコンを作ります
            const canvas = await html2canvas(faceframe)
            const imgData = canvas.toDataURL()
            document.querySelector('#prg-result-icon').src = imgData
            document.querySelector('#prg-result-download').href = imgData

            // モーダルを開きます
            document.querySelector('#prg-overlay').classList.remove('is-hide')
        }, false)
    })();
}
