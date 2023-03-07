async function sortArray(){
    let stringArray = document.querySelector("#array").value;
    let array = JSON.parse("[" + stringArray + "]");
    let arrayResult = document.querySelector("#array-result");
    let sorted = false;
    let step = 1;
    arrayResult.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        var x = array[i];
        var p = i - 1; 
        while(p >= 0 && array[p] > x)
            array[p + 1] = array[p--];
        array[p + 1] = x
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