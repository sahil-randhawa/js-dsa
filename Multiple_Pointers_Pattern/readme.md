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



## 4sum

Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that:

- 0 <= a, b, c, d < n
- a, b, c, and d are distinct.
- nums[a] + nums[b] + nums[c] + nums[d] == target
- You may return the answer in any order.

**Example 1:**<br>
__Input:__ nums = [1,0,-1,0,-2,2], target = 0<br>
__Output:__ [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

**Example 2:**<br>
__Input:__ nums = [2,2,2,2,2], target = 8<br>
__Output:__ [[2,2,2,2]]

**Constraints:**
- 1 <= nums.length <= 200
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- -10<sup>9</sup> <= target <= 10<sup>9</sup>


#### Solution

```
var fourSum = function (nums, target) {
    nums.sort((a, b) => (a - b));

    let sol = []

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let l = j + 1;
            let k = nums.length - 1;
            while (l < k) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum === target) {
                    sol.push([nums[i], nums[j], nums[k], nums[l]])
                    l++;
                    k--;
                    while (nums[l] === nums[l - 1]) l++;
                    while (nums[k] === nums[k + 1]) k--;
                } else if (sum < target) {
                    l++;
                } else {
                    k--;
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return sol
};
```


#### Approach to Solving the 4Sum Problem

1. Sort the Array:
    - Start by sorting the array nums in ascending order. This helps in efficiently using the two-pointer technique and avoiding duplicates.

2. Initialize the Result Array:
    - Create an empty array sol to store the unique quadruplets that sum up to the target value.

3. Nested Loops for Quadruplet Elements:
    - Use four nested loops to find the quadruplets:
        - The outermost loop iterates through the array to select the first element nums[i].
        - The second loop iterates through the array to select the second element nums[j].
        - The innermost loop uses a two-pointer technique to find the remaining two elements nums[l] and nums[k].

4. Skip Duplicates:
    - Inside the outer and second loops, skip duplicates by checking if the current element is the same as the previous element. This helps in avoiding duplicate quadruplets in the result.

5. Two-pointer Technique:
    - For the third and fourth elements, use two pointers:
        - l starts just after j and k starts at the end of the array.
        - Calculate the sum of the four elements: nums[i] + nums[j] + nums[l] + nums[k].
        - If the sum matches the target, add the quadruplet to the result array and move both pointers (l++ and k--) while skipping duplicates.
        - If the sum is less than the target, move the left pointer l to the right to increase the sum.
        - If the sum is greater than the target, move the right pointer k to the left to decrease the sum.

6. Return the Result:
    - After all iterations, return the result array sol containing all the unique quadruplets that sum up to the target.

**Pseudocode**

1. Sort nums.
2. Initialize sol as an empty array.
3. Loop i from 0 to nums.length - 3:
    - Skip duplicates for i.
    - Loop j from i + 1 to nums.length - 2:
        - Skip duplicates for j.
        - Initialize l to j + 1 and k to nums.length - 1.
        - While l < k:
            - Calculate the sum of nums[i] + nums[j] + nums[l] + nums[k].
            - If the sum equals the target, add the quadruplet to sol, move l++, k--, and skip duplicates.
            - If the sum is less than the target, move l++.
            - If the sum is greater than the target, move k--.
4. Return sol.