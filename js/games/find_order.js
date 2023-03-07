let cards = document.querySelectorAll(".card");
let numberOfMoves = 12;
let flipNr;
let expectedFlipNr = 1;
let numberOfMovesUI = document.querySelector("#game-moves");
let gameResult = document.querySelector("#game-result");
let failbtn = document.querySelector("#btn-failed");
 
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function() {
        if(numberOfMoves > 0){ 
            flipNr = parseInt(cards[i].getAttribute("value"))
            cards[i].style.transform = "rotateY(180deg)";
            if(flipNr != expectedFlipNr){
                setTimeout(() => {cards[i].style.transform = "rotateY(0deg)";}, 500);
                numberOfMoves--;
                numberOfMovesUI.innerHTML = "Mutari: " + numberOfMoves;
            }
            else{
                numberOfMoves--;
                numberOfMovesUI.innerHTML = "Mutari: " + numberOfMoves;
                expectedFlipNr++;
            }
            if(expectedFlipNr == 10){
                failbtn.style.display = "block";
                failbtn.style.backgroundColor = "#39ac73";
                gameResult.innerHTML += "Felicitari! Ai casitigat! Vrei sa incerci din nou? ";
                numberOfMoves = 0;
            }
            else if(numberOfMoves == 0){
                failbtn.style.display = "block";
                failbtn.style.backgroundColor = "#ff704d";
                gameResult.innerHTML += "Oh... Se pare ca ai pierdut. Incearca din nou.";
            }
        }
    });
}





