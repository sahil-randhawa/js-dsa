# Sliding Window Pattern

The sliding window pattern is a pattern that uses a window to solve problems. It is very useful for solving problems with minimal space complexity.

### Max Subarray Sum

Given an array of integers and a number, write a function called `maxSubarraySum` which finds the maximum sum of a subarray with the length of the number passed to the function.

```
maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubarraySum([2, 3], 3) // null
```

#### Naive Solution

- Time Complexity: `O(n^2)`
- Space Complexity: `O(1)`

```
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > maxSum) {
            maxSum = temp;
        }
    }
    return maxSum;
}
```

#### Refactored Solution (Sliding Window Pattern)

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

```
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
```
