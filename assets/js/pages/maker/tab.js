var xhr = new XMLHttpRequest();
var tabs;
xhr.open("GET","/api/maker/tab");
xhr.addEventListener("load", function(e){
    tabs = JSON.parse(xhr.responseText);
    console.log(tabs);
});
xhr.send();
