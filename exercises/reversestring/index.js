// --- Directions
    // Given a string, return a new string with the reversed
    // order of characters
    // --- Examples
    //   reverse('apple') === 'elppa'
    //   reverse('hello') === 'olleh'
    //   reverse('Greetings!') === '!sgniteerG'

// solution 1
    // array.prototype.reverse() - built in function included in recent JS
    // must turn string into array
    // call reverse method on array
    // join the array back into a string
    // return the result

function reverse(str) {
    const arr = str.split(''); // ["h", "e", "l", "l", "o"]
    arr.reverse(); // ["o", "l", "l", "e", "h"]
    return arr.join(''); // "olleh"
}
    
function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

// solution 2
    // empty string called 'reversed'
    // for each char provided in string, take the char and add to start of reversed
    // return the variable 'reversed'
    // won't work if you have to print every 3rd or 5th char

function reverse(str) {
    let rev = '';

    // lets us go through or itierate through every character of string and set to empty variable char
    for (let char of str) {
        // reversed = character + reversed;
        rev += char;
    }
    return rev;
}

// solution 3
    // reduce takes all different values in array to one value
    // reduce takes 2 arguments
    // runs one time for every value in the array
    // 1st argument is the reversed string (or accumulator aka counter)
    // 2nd argument is the element that we are currently opperating on in array

function reverse(str) {
    return str.split('').reduce((rev, char) => {
        return char + rev; 
    }, '');
}

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// solution 5
// substr() - if only one argument being 1, the first letter of the argument will be plucked out of the string each call
// charAt() - add the all the letters and return a new string

// reverse('hello')
// (reverse('ello') + 'h')
// ((reverse('llo') + 'e') + 'h')
// (((reverse('lo') + 'l') + 'e') + 'h')
// ((((reverse('o') + 'l') + 'l' ) + 'e') + 'h')
// (((('o') + 'l') + 'l' ) + 'e') + 'h')
// base case string has no more letters to pluck out - return 'elloh'

function reverse(str) {
    if (str === '') { // base case - stops recursive function from infinite loop
        return '';
    }  // step case - calls upon itself with a sub argument 
        return reverse(str.substr(1)) + str.charAt(0)
}

function reverse(str) {
    return str ? reverse(str.substr(1)) + str.charAt(0) : str
}

// solution 7
    // decrementing for-loop that appended each character of the input 
    // put it to a new string in reverse order
    // access the parsed strings individual characters similar to the way you would reference an array’s items

function reverse(str) {
    let rev = '';

    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    return rev;
    }
}

module.exports = reverse;
