// var xhr = new XMLHttpRequest();
// var tabs;
// xhr.open("GET","/api/maker/tab");
// xhr.addEventListener("load", function(e){
//     tabs = JSON.parse(xhr.responseText);
//     console.log(tabs);
// });
// xhr.send();


(() => {
    addEventListener = () => {
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
    }
    addEventListener()
})();