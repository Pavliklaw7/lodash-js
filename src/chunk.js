'use strict';

// _.chunk(array, [size=1])
// Creates an array of elements split into groups the length of size.
// If array can't be split evenly,
// the final chunk will be the remaining elements.

function chunk(array, size = 1) {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }

  return (chunkedArray);
}

chunk([1, 2, 3, 4, 5], 2);
