async function sortArray(){
    let stringArray = document.querySelector("#array").value;
    let array = JSON.parse("[" + stringArray + "]");
    let arrayResult = document.querySelector("#array-result");
    let sorted = false;
    let step = 1;
    arrayResult.innerHTML = "";
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux
            }
        }
        const result = await resolveAfterTime();
        arrayResult.innerHTML +="Pasul " + step + ": " + array + "<br><hr>";
        step++;
    }
}

function resolveAfterTime() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 500);
    });
}