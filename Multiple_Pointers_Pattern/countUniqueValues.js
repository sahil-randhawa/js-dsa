// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.



function countUniqueValues(arr) {
    if (arr.length === 0) return 0

    let count = 1;
    let ptr1 = 0;
    let ptr2 = 1;
    while (ptr2 < arr.length) {
        if (arr[ptr2] !== arr[ptr1]) {
            count++;
            ptr1 = ptr2;
        }
        ptr2++;
    }
    return count
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4


function countUniqueValues2(arr) {
    if (arr.length === 0) return 0

    let ptr1 = 0;
    for (let ptr2 = 1; ptr2 < arr.length; ptr2++) {
        if (arr[ptr1] !== arr[ptr2]) {
            ptr1++;
            arr[ptr1] = arr[ptr2];
        }
    }
    return ptr1 + 1;
}

console.log(countUniqueValues2([-2, -1, -1, 0, 1])) // 4