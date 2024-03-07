# Sliding Window Pattern

The sliding window pattern is a pattern that uses a window to solve problems. It is very useful for solving problems with minimal space complexity.

## Max Subarray Sum

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

## Find Length of Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Time Complexity: `O(n)`
Space Complexity: `O(n)`

```
var lengthOfLongestSubstring = function (s) {

    if (s.length < 2) return s.length;

    let start = 0;
    let end = 0;
    let longest = 0;
    const unique = new Set();

    while (end < s.length) {
        if (!unique.has(s[end])) {
            unique.add(s[end]);
            end++;
            longest = Math.max(longest, unique.size);
        } else {
            unique.delete(s[start])
            start++;
        }
    }
    return longest;

};
```

## Min Subarray Length

Write a function called minSubarrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

#### Naive Solution

- Time Complexity: `O(n^2)`
- Space Complexity: `O(1)`

```
function minSubarrayLen(arr, num) {
    let minLen = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let tempSum = 0;
        for (let j = i; j < arr.length; j++) {
            tempSum += arr[j];
            if (tempSum >= num) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
```

#### Refactored Solution (Sliding Window Pattern)

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

```
function minSubarrayLen(arr, num) {
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        console.log(`start: ${start}, end: ${end}, total: ${total}, minLen: ${minLen}`);
        if (total < num && end < arr.length) {
            total += arr[end];
            end++;
        } else if (total >= num) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
```

```
minSubarrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4, 3] is the smallest subarray
minSubarrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5, 4] is the smallest subarray
minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
```
