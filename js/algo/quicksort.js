let step = 1;

function execQuickSort(){
    let stringArray = document.querySelector("#array").value;
    let array = JSON.parse("[" + stringArray + "]");
    let left = 0;
    let right = array.length - 1;
    let arrayResult = document.querySelector("#array-result");
    step = 1;
    QuickSort(array, left, right);
    arrayResult.innerHTML = "";
}

async function QuickSort(array, left, right){
    if(left < right){
        var m = parseInt((left + right) / 2);
        var aux = array[left];
        array[left] = array[m];
        array[m] = aux;
        var i = left, j = right, d = 0;
        while(i < j){
            if(array[i] > array[j]){
                var aux = array[i];
                array[i] = array[j];
                array[j] = aux;
                d = 1 - d
            }
            i += d;
            j -= 1 - d; 
        }
        const result = await resolveAfterTime();
        writeArray(array);
        QuickSort(array, left, i - 1);
        QuickSort(array, i + 1, right);
    }
}
 


function writeArray(array){
    let arrayResult = document.querySelector("#array-result");
    arrayResult.innerHTML +="Pasul " + step +": " + array + "<br><hr>";
    step++;
}

function resolveAfterTime() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
}




 