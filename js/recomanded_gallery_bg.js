let gallery = document.querySelectorAll(".recomanded-algo-gallery-cell");

if((window.location.href).endsWith("bubblesort.html")){
    for(let i = 0; i < gallery.length; i++){
        gallery[i].style.backgroundColor = "#03a9f4";
    }  
 }
 else if((window.location.href).endsWith("quicksort.html")){
    for(let i = 0; i < gallery.length; i++){
        gallery[i].style.backgroundColor = "#ff704d";
    }  
 }
 else if((window.location.href).endsWith("insertionsort.html")){
    for(let i = 0; i < gallery.length; i++){
        gallery[i].style.backgroundColor = "#39ac73";
    }  
 }
 else if((window.location.href).endsWith("selectionsort.html")){
    for(let i = 0; i < gallery.length; i++){
        gallery[i].style.backgroundColor = "#666699";
    }  
 }