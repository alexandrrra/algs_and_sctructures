let binary = function name(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((right - left) / 2 + left);
        if (key === arr[mid]) {
            return mid;
        } else if (key < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;

}

let array = [1,2,4,6,9,10, 11]

console.log(binary(array, 10));
