// Sliding Window Pattern

// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.


// Example: Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.


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


// Example: Max Subarray Sum
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.