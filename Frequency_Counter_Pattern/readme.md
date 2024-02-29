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
