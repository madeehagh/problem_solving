function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j <= high -1 ; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
   // [arr[i+1],arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}

function quickSort(arr, low, high) {
    if(low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi -1);
        quickSort(arr,pi+1, high);
    }

}

function quickSort(arr) {
    if (arr.length <= 1)
        return arr;

    return arr.sort((a,b) => {
        return a<b ? -1 : (a > b) ? 1 :0;
    })
}

let arr = [10, 7, 8, 9, 1, 5];
//quickSort(arr, 0, arr.length-1);
quickSort(arr);
console.log(arr)