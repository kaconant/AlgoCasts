// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common ways this question might be asked: 
// What is the most common char in the string?
// Does string A have the same chars as string B (is it an anagram?)
// Does the given string have any repeated chars in it?

// convert string into an object
// values = number of times char has been found

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (!charMap[char]) {
            charMap[char] = 1
        }
        charMap[char]++
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar
}
module.exports = maxChar;


// for of - string
// for in - object

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }
    
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    
    return maxChar
}
module.exports = maxChar;