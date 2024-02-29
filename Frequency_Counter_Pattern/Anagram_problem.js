// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// assume the strings are lowercase and no spaces or special characters

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

console.log(validAnagram("cinema", "iceman"));

console.log(validAnagram("cinemm", "iceman"));