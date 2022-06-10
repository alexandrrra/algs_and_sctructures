
let array = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function quickSort(array) {
    if(array.length <= 0){
        return array
    }
    let pivotIndex = Math.floor(array.length/2);
    let pivot =array[pivotIndex]
    let less =[];
    let greater =[];
    for(let i=0; i< array.length; i++) {
        if(i === pivotIndex) 
        continue
            if (array[i] < pivot) {
                less.push(array[i])
            } else {
                greater.push(array[i])
            }

        }
        return [...quickSort(less), pivot, ...quickSort(greater)]
    }

    console.log(quickSort(array))