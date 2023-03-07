//Acest script gestioneaza paginile de quiz in momentul in care se apasa pe butonul 'Vezi rezultate' 

let answers = document.querySelectorAll(".answers");
let quiz_box = document.querySelectorAll(".quizz-box");
let result_content = document.querySelector("#result-content");
let result_content_fail = result_content.getElementsByTagName('a');

let checkedAnsNr = 0;
let totalCheckAnsNr = 0;
let totalScore = 0;
let position_check = [];

function Result(){ 
    totalCheckAnsNr = 0;
    totalScore = 0;
    for(let i = 0; i < answers.length; i++){
        let submits = answers[i].getElementsByTagName('input')
        checkedAnsNr = 0;
        for(let j = 0; j < submits.length; j++){
            if(submits[j].checked){
                checkedAnsNr += 1
                position_check.push(j);
            }
            if (submits[j].checked && submits[j].value == 1)
            {
                totalScore += 20;
            }
        }
        if(checkedAnsNr < 1){
            result_content.style.color = "red";
            result_content.innerHTML = "<p>Trebuie sa alegi un raspuns la fiecare intrebare!</p>"
            quiz_box[i].style.border = "2px solid #ff5c33"; 
        }
        else{
            quiz_box[i].style.border = "none";
            totalCheckAnsNr++;
        }
    }
    if(totalCheckAnsNr == 5){

        //Reseteaza toate selectile pe butoanele radio 
        for(let i = answers.length - 1; i >= 0; i--){
            answers[i].getElementsByTagName('input')[position_check.pop()].checked = false;
        }

        //Daca scorul maxim este mai mic de 50 se va afisa un mesaj de informare 
        //si un link catre cursul corespunzator altfel se afiseaza doar mesajul de informare
        if(totalScore < 50){
            if((window.location.href).endsWith("bubblesort.html")){
                result_content.style.color = "red";
                result_content.innerHTML = "<p>Ai optinut: " + totalScore + " puncte!</p> <br> <p>Ai vrea sa reiei cursul?</p> <a href = '../sorting_pages/bubblesort.html'>Bubblesort</a>";
            }
            else if((window.location.href).endsWith("quicksort.html")){
                result_content.style.color = "red";
                result_content.innerHTML = "<p>Ai optinut: " + totalScore + " puncte!</p> <br> <p>Ai vrea sa reiei cursul?</p><a href = '../sorting_pages/quicksort.html'>Quicksort</a>";
            }
            else if((window.location.href).endsWith("insertionsort.html")){
                result_content.style.color = "red";
                result_content.innerHTML = "<p>Ai optinut: " + totalScore + " puncte!</p> <br> <p>Ai vrea sa reiei cursul?</p> <a href = '../sorting_pages/insertionsort.html'>Insertionsort</a>";
            }
            else if((window.location.href).endsWith("selectionsort.html")){
                result_content.style.color = "red";
                result_content.innerHTML = "<p>Ai optinut: " + totalScore + " puncte!</p> <br> <p>Ai vrea sa reiei cursul?</p><a href = '../sorting_pages/selectionsort.html'>Selectionsort</a>";
            }
            else{
                result_content.style.color = "#ff5c33";
                result_content.innerHTML = "<p>Esti din alta dimensiune? :o</p>";
            }
        }
        else{
            result_content.style.color = "green";
            result_content.innerHTML = "<p>Ai optinut: " + totalScore + "/100 de puncte! Felicitari!</p>";
        }
    }
     
};