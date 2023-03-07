let numberOfMoves = 12;
let game_scene = document.querySelector(".game-scene")
let boxes = document.querySelectorAll(".box");
let box_cont = document.querySelectorAll('.box-container');
let game_result = document.querySelector(".game-result");
let reordered_boxes = [];
function sortBox(){
boxes.forEach(box => {
    box.addEventListener('dragstart', function(){
        box.classList.add('dragging');
    });
    box.addEventListener('dragend', function(){
        box.classList.remove('dragging');
        if(checkIsFinished()){
            for(let i = 0; i < boxes.length; i++){
                boxes[i].setAttribute('draggable', false);
            }
            let selectionType = document.querySelector("#selected-box");
            let selectedTypeValue = parseInt(selectionType.options[selectionType.selectedIndex].value);

            if(checkOrder(selectedTypeValue)){
                game_result.innerHTML += "Felicitari! Ai castigat jocul!";
                game_result.classList.add("game-result-active");
            } 
            else{
                console.log("Ai pierdut");
            }
        }
    });
})
    box_cont[1].addEventListener('dragover', function(){
        let current = document.querySelector(".dragging");
        box_cont[1].append(current);
    })

}

sortBox();

function checkIsFinished(){
    let val = box_cont[0].childNodes.length - boxes.length - 1;
    for(let i = 0; i < boxes.length; i++){
        if(val > 0)
            return false;
    }
    return true;
}

function checkOrder(val){
    let array = box_cont[1].children
  
    if(val == 1){
        for (let i = 1; i < array.length - 1; i++){
            if (parseInt(array[i].textContent) > parseInt(array [i + 1].textContent))
                return false;
        }
        return true;
    }
    else if(val == 2){
        for (let i = 1; i < array.length - 1; i++){
            if (parseInt(array[i].textContent) < parseInt(array [i + 1].textContent))
                return false;
        }
        return true;
    }
    
}