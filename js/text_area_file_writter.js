$(document).ready(function(){
   if((window.location.href).endsWith("bubblesort.html")){
      $("#textareacode").load("algo/bubblesort_algo.txt");
   }
   else if((window.location.href).endsWith("quicksort.html")){
      $("#textareacode").load("algo/quicksort_algo.txt");
   }
   else if((window.location.href).endsWith("insertionsort.html")){
      $("#textareacode").load("algo/quicksort_algo.txt");
   }
   else if((window.location.href).endsWith("selectionsort.html")){
      $("#textareacode").load("algo/quicksort_algo.txt");
   }
   else{
      $("#textareacode").load("Nu s-a gasit niciun algoritm pentru aceasta pagina...");
   }
});
 