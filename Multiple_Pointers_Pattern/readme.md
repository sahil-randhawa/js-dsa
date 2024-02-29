# Multiple Pointer Pattern

The multiple pointers pattern is a pattern that uses multiple pointers to solve problems. It is very useful for solving problems with minimal space complexity.

## sumZero

Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or `undefined` if a pair does not exist.

```
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
```

#### Naive solution

- Time complexity: `O(n^2)`
- Space complexity: `O(1)`

```
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}
```

#### Refactored solution

- Time complexity: `O(n)`
- Space complexity: `O(1)`

```
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
```

## Count Unique Values

Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
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
```

#### Alternate approach

```
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

console.log(countUniqueValues2([-2, -1, -1, 0, 1])) // 4
```

- Space Complexity: `O(1)`
- Time Complexity: `O(n)`
