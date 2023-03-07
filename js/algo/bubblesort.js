async function sortArray(){
    let stringArray = document.querySelector("#array").value;
    let array = JSON.parse("[" + stringArray + "]");
    let arrayResult = document.querySelector("#array-result");
    let sorted = false;
    let step = 1;
    arrayResult.innerHTML = "";
    while(!sorted){
        sorted = true;
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i + 1]){
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
                sorted = false;
            }
        }
        if(!sorted){
            const result = await resolveAfterTime();
            arrayResult.innerHTML +="Pasul " + step + ": " + array + "<br><hr>";
            step++; 
        } 
    }
}

function resolveAfterTime() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
}
 