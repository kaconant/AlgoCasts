// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create an empty array to hold chunks
  // for each element in the array
  // retrieve the last element
  // if length = chunk size, push into new array 
  // else add the current element to new chunk

  const chunked = [];
  for (let i of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([i])
    } else {
      last.push(i)
    }
  }
  return chunked;
}

// 2nd solution

function chunk(array, size) {
  const chunked = []; // create an empty array
  let index = 0; // start index at 0

  while (index < array.length) { // while index is less than length of given array
    chunked.push(array.slice(index, index + size))
    index += size;
  }
  return chunked;
}




module.exports = chunk;
