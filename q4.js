function findTarget(arr, target) {
    let index = 0;
    while (arr[index] !== undefined) {
        if (arr[index] === target) {
            return index;
        }
        index++;
    }
    return -1;
}

const arr = [-15, -5, 3, 5, 12, 15, 36];
const target = -5;
console.log(findTarget(arr, target));
