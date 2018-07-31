// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const rev = str
        .toLowerCase()
        .split('') // or [...str]
        .reverse()
        .join('');

    return (str === rev ? true : false)
} 


// look at the stings length to increment for every step 
// minus 1 to make sure we are at a 0 index for JS arrays
function palindrome(str) {
    return str.toLowerCase().split('').every((char, i) => {
        return char === str[str.length - i - 1]
    });
}

module.exports = palindrome;
