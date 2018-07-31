// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1st solution
// 0s disappear 
function reverseInt(n) {
    const rev = n
        .toString()
        .split('')
        .reverse()
        .join('')

    if (n < 0) {
        return parseInt(rev) * -1;
    }   
        return parseInt(rev)
}

module.exports = reverseInt;

// 2nd solution 
// if n is greater than 0, Math.sign = positive
// if n is less than 0, Math.sign negative
function reverseInt(n) {
    const rev = n
        .toString()
        .split('')
        .reverse()
        .join('')

    return parseInt(rev) * Math.sign(n)
}