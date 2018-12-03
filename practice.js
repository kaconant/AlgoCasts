// You are given a string of space separated numbers and asked to return
// the highest and lowest number

function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// One flower must be odd and one flower must be even

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true
  } 
    return false
}

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 !== 0 ? true : false
}

// Your function takes two arguments: 
// current father's age (years) AND current age of his son (years) 
// Сalculate how many years ago the father was twice as old as his son 
// (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  sonDoubleYears = sonYearsOld * 2;
  if (dadYearsOld >= sonDoubleYears) {
    return dadYearsOld - sonDoubleYears
} else {
    return sonDoubleYears - dadYearsOld
    }
}

// Write a function which repeats the given string string exactly n times.

function repeatStr (num, str) {
  var newString = '';
  
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  
  return newString
}

function repeatStr (num, str) {
  return str.repeat(num);
}

/*
All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments 
and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
*/

function feast(beast, dish) {
  const start = beast[0] === dish[0]
  const end = beast[beast.length - 1] === dish[dish.length - 1]
  
  return start && end
}

function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1]);
}

// Your goal is to create a function that removes the first and last characters of a string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str) {
  // Convert string to array
  str_array = str.split('');
  // Remove first letter from array
  str_array[0] = '';
  // Remove last letter from array
  str_array[str.length - 1] = '';
  return str_array.join('');
};

console.log( removeChar('Hello') );


function removeChar(str) {
  return str.slice(1, -1);
}

function removeChar(str) {
  // Convert string to array
  str_array = str.split('');
  // Remove first letter from array
  str_array[0]='';
  // Remove last letter from array
  str_array[str.length-1]='';
  return str_array.join('');
};

// Very simple, given a number, find its opposite.

function opposite(number) {
  return number * (-1);
}