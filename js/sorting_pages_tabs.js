let tabs = document.querySelectorAll(".nav-bar-left-item");
let content = document.querySelectorAll(".sorting-page-content-box");

if((window.location.href).endsWith("bubblesort.html")){
    tabs[0].style.backgroundColor = "#03a9f4";
}
else if((window.location.href).endsWith("quicksort.html")){
    tabs[0].style.backgroundColor = "#ff704d";
}
else if((window.location.href).endsWith("insertionsort.html")){
    tabs[0].style.backgroundColor = "#39ac73";
}
else if((window.location.href).endsWith("selectionsort.html")){
    tabs[0].style.backgroundColor = "#666699";
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        if (i == 0){
            if((window.location.href).endsWith("bubblesort.html")){
                tabs[i].style.backgroundColor = "#03a9f4";
            }
            else if((window.location.href).endsWith("quicksort.html")){
                tabs[i].style.backgroundColor = "#ff704d";
            }
            else if((window.location.href).endsWith("insertionsort.html")){
                tabs[i].style.backgroundColor = "#39ac73";
            }
            else if((window.location.href).endsWith("selectionsort.html")){
                tabs[i].style.backgroundColor = "#666699";
            }
            tabs[i + 1].style.backgroundColor = "transparent";
            tabs[i + 2].style.backgroundColor = "transparent";
            tabs[i + 3].style.backgroundColor = "transparent";
            tabs[i + 1].style.color = "#000";
            tabs[i + 2].style.color = "#000";
            tabs[i + 3].style.color = "#000";
            content[i].style.display = "block"
            content[i + 1].style.display = "none"
            content[i + 2].style.display = "none"
            content[i + 3].style.display = "none"
        }
        else if (i == 1){
            if((window.location.href).endsWith("bubblesort.html")){
                tabs[i].style.backgroundColor = "#03a9f4";
            }
            else if((window.location.href).endsWith("quicksort.html")){
                tabs[i].style.backgroundColor = "#ff704d";
            }
            else if((window.location.href).endsWith("insertionsort.html")){
                tabs[i].style.backgroundColor = "#39ac73";
            }
            else if((window.location.href).endsWith("selectionsort.html")){
                tabs[i].style.backgroundColor = "#666699";
            }
            tabs[i - 1].style.backgroundColor = "transparent";
            tabs[i + 1].style.backgroundColor = "transparent";
            tabs[i + 2].style.backgroundColor = "transparent";
            tabs[i - 1].style.color = "#000";
            tabs[i + 1].style.color = "#000";
            tabs[i + 2].style.color = "#000";
            content[i].style.display = "block"
            content[i - 1].style.display = "none"
            content[i + 1].style.display = "none"
            content[i + 2].style.display = "none"
        }
        else if (i == 2){
            if((window.location.href).endsWith("bubblesort.html")){
                tabs[i].style.backgroundColor = "#03a9f4";
            }
            else if((window.location.href).endsWith("quicksort.html")){
                tabs[i].style.backgroundColor = "#ff704d";
            }
            else if((window.location.href).endsWith("insertionsort.html")){
                tabs[i].style.backgroundColor = "#39ac73";
            }
            else if((window.location.href).endsWith("selectionsort.html")){
                tabs[i].style.backgroundColor = "#666699";
            }
            tabs[i - 1].style.backgroundColor = "transparent";
            tabs[i - 2].style.backgroundColor = "transparent";
            tabs[i + 1].style.backgroundColor = "transparent";
            tabs[i - 1].style.color = "#000";
            tabs[i - 2].style.color = "#000";
            tabs[i + 1].style.color = "#000";
            content[i].style.display = "block"
            content[i - 1].style.display = "none"
            content[i - 2].style.display = "none"
            content[i + 1].style.display = "none"
        }
        else{
            if((window.location.href).endsWith("bubblesort.html")){
                tabs[i].style.backgroundColor = "#03a9f4";
            }
            else if((window.location.href).endsWith("quicksort.html")){
                tabs[i].style.backgroundColor = "#ff704d";
            }
            else if((window.location.href).endsWith("insertionsort.html")){
                tabs[i].style.backgroundColor = "#39ac73";
            }
            else if((window.location.href).endsWith("selectionsort.html")){
                tabs[i].style.backgroundColor = "#666699";
            }
            tabs[i - 1].style.backgroundColor = "transparent";
            tabs[i - 2].style.backgroundColor = "transparent";
            tabs[i - 3].style.backgroundColor = "transparent";
            tabs[i - 1].style.color = "#000";
            tabs[i - 2].style.color = "#000";
            tabs[i - 3].style.color = "#000";
            content[i].style.display = "block"
            content[i - 1].style.display = "none"
            content[i - 2].style.display = "none"
            content[i - 3].style.display = "none"
        }
    });
}