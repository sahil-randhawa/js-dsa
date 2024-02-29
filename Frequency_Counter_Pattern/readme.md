## Frequency Counter Pattern

Write a function that accepts two arrays, `arr1` and `arr2`. The function should return `true` if every value in `arr1` has its corresponding value squared in `arr2`. The frequency of values must be the same.

```
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let fC1 = {}
    let fC2 = {}
    for (let val of arr1) {
        fC1[val] = (fC1[val] || 0) + 1
    }
    for (let val of arr2) {
        fC2[val] = (fC2[val] || 0) + 1
    }
    console.log(fC1);
    console.log(fC2);
    for (let key in fC1) {
        if (!(key ** 2 in fC2)) {
            return false
        }
        if (fC2[key ** 2] !== fC1[key]) {
            return false
        }
    }
    return true;
}
```

### Anagram Checker

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema" formed from "iceman".

Assume the strings are lowercase and contain no spaces or special characters.

```
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    let lookup = {}

    for (let val of str1) {
        lookup[val] = ++lookup[val] || 1;
    }

    for (let val of str2) {
        if (!lookup[val]) return false;
        else lookup[val] -= 1;
    }
    return true
}
```
