let navbar_items = document.querySelectorAll(".nav-bar-item");
window.addEventListener("load", (event) => {
    if(window.location.href.endsWith("#section-0") || window.location.href.endsWith("index.html")){
        navbar_items[0].style.backgroundColor = "#39ac39";
        navbar_items[0].style.color = "#fff";
    }
    else if(window.location.href.endsWith("#section-1") || window.location.href.includes("sorting_pages")){
        navbar_items[1].style.backgroundColor = "#39ac39";
        navbar_items[1].style.color = "#fff";
    }
    else if(window.location.href.endsWith("#section-2") || window.location.href.includes("testing_pages")){
        navbar_items[2].style.backgroundColor = "#39ac39";
        navbar_items[2].style.color = "#fff";
    }
    else if(window.location.href.endsWith("#section-3") || window.location.href.includes("games")){
        navbar_items[3].style.backgroundColor = "#39ac39";
        navbar_items[3].style.color = "#fff";
    }
});

for(let i = 0; i < navbar_items.length; i++){
    navbar_items[i].addEventListener("click", (event) => {
        if(i == 0){
            navbar_items[i].style.backgroundColor = "#39ac39";
            navbar_items[i].style.color = "#fff";
            navbar_items[i + 1].style.backgroundColor = "#fff";
            navbar_items[i + 1].style.color = "#000";
            navbar_items[i + 2].style.backgroundColor = "#fff";
            navbar_items[i + 2].style.color = "#000";
            navbar_items[i + 3].style.backgroundColor = "#fff";
            navbar_items[i + 3].style.color = "#000";

        } 
        else if(i == 1){
            navbar_items[i].style.backgroundColor = "#39ac39";
            navbar_items[i].style.color = "#fff";
            navbar_items[i + 1].style.backgroundColor = "#fff";
            navbar_items[i + 1].style.color = "#000";
            navbar_items[i + 2].style.backgroundColor = "#fff";
            navbar_items[i + 2].style.color = "#000";
            navbar_items[i - 1].style.backgroundColor = "#fff";
            navbar_items[i - 1].style.color = "#000";
        }
        else if(i == 2){
            navbar_items[i].style.backgroundColor = "#39ac39";
            navbar_items[i].style.color = "#fff";
            navbar_items[i + 1].style.backgroundColor = "#fff";
            navbar_items[i + 1].style.color = "#000";
            navbar_items[i - 1].style.backgroundColor = "#fff";
            navbar_items[i - 1].style.color = "#000";
            navbar_items[i - 2].style.backgroundColor = "#fff";
            navbar_items[i - 2].style.color = "#000";
        }
        else if(i == 3){
            navbar_items[i].style.backgroundColor = "#39ac39";
            navbar_items[i].style.color = "#fff";
            navbar_items[i - 1].style.backgroundColor = "#fff";
            navbar_items[i - 1].style.color = "#000";
            navbar_items[i - 2].style.backgroundColor = "#fff";
            navbar_items[i - 2].style.color = "#000";
            navbar_items[i - 3].style.backgroundColor = "#fff";
            navbar_items[i - 3].style.color = "#000";
        }
    });
}
