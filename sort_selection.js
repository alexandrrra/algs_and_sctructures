
let array = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

let count = 0;

function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
            count+=1;
        }
        let tmp = arr[i];

        arr[i] = arr[indexMin];
        arr[indexMin] = tmp;
    }
    return arr
}

console.log(selection_sort(array));
console.log(array.length)
