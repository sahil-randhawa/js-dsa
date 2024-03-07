
// Min Subarray Length

// Write a function called minSubarrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// Examples:
// minSubarrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4, 3] is the smallest subarray
// minSubarrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5, 4] is the smallest subarray
// minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
// minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
// minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
// minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0

// Naive Solution:
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function minSubarrayLenN(arr, num) {
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

// Refactored Solution:
// Time Complexity - O(N)
// Space Complexity - O(1)

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

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7));