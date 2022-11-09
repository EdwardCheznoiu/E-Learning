let tabs = document.querySelectorAll(".nav-bar-left-item");
let content = document.querySelectorAll(".sorting-page-content-box");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        if (i == 0){
            tabs[i].style.backgroundColor = "#ff8533";
            tabs[i + 1].style.backgroundColor = "transparent";
            tabs[i + 2].style.backgroundColor = "transparent";
            tabs[i].style.color = "#fff";
            tabs[i + 1].style.color = "#000";
            tabs[i + 2].style.color = "#000";
            content[i].style.display = "block"
            content[i + 1].style.display = "none"
            content[i + 2].style.display = "none"
        }
        else if (i == 1){
            tabs[i].style.backgroundColor = "#ff8533";
            tabs[i - 1].style.backgroundColor = "transparent";
            tabs[i + 1].style.backgroundColor = "transparent";
            tabs[i].style.color = "#fff";
            tabs[i - 1].style.color = "#000";
            tabs[i + 1].style.color = "#000";
            content[i].style.display = "block"
            content[i - 1].style.display = "none"
            content[i + 1].style.display = "none"
        }
        else{
            tabs[i].style.backgroundColor = "#ff8533";
            tabs[i - 1].style.backgroundColor = "transparent";
            tabs[i - 2].style.backgroundColor = "transparent";
            tabs[i].style.color = "#fff";
            tabs[i - 1].style.color = "#000";
            tabs[i - 2].style.color = "#000";
            content[i].style.display = "block"
            content[i - 1].style.display = "none"
            content[i - 2].style.display = "none"
        }
    });
}