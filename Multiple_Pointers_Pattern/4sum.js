// Given an array nums of n integers, return an array of all the unique quadruplets[nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
//     nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

//     Example 1:

// Input: nums = [1, 0, -1, 0, -2, 2], target = 0
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
// Example 2:

// Input: nums = [2, 2, 2, 2, 2], target = 8
// Output: [[2, 2, 2, 2]]


// Constraints:

// 1 <= nums.length <= 200
//     - 109 <= nums[i] <= 109
//     - 109 <= target <= 109

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