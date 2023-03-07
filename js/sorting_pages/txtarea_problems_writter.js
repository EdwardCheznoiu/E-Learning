$(document).ready(function(){
    let textarea = document.querySelectorAll(".textarea-algo");
    let nrOfDoc = 1;
    if((window.location.href).endsWith("bubblesort.html")){
        for(let i = 0; i < textarea.length; i++) {
            $(textarea[i]).load("problems/bubblesort/bubblesort" + String(nrOfDoc) + ".txt");
            nrOfDoc++;
        }
    }
    else if((window.location.href).endsWith("quicksort.html")){
        for(let i = 0; i < textarea.length; i++) {
            $(textarea[i]).load("problems/quicksort/quicksort" + String(nrOfDoc) + ".txt");
            nrOfDoc++;
        }
     }
     else if((window.location.href).endsWith("insertionsort.html")){
        for(let i = 0; i < textarea.length; i++) {
            $(textarea[i]).load("problems/insertionsort/insertionsort" + String(nrOfDoc) + ".txt");
            nrOfDoc++;
        }
     }
     else if((window.location.href).endsWith("selectionsort.html")){
        for(let i = 0; i < textarea.length; i++) {
            $(textarea[i]).load("problems/selectionsort/selectionsort" + String(nrOfDoc) + ".txt");
            nrOfDoc++;
        }
     }
     else{
        $("#textareacode").load("Nu s-a gasit niciun algoritm pentru aceasta pagina...");
     }
    
 });
  