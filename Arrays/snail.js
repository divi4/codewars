// Link: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
//
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
//
// This image will illustrate things more clearly:
//
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
  if(array.length - 1 > 0) {
    // First row
    let newArr = [].concat(array[0])
    let y = 0
    let x = 1

    for(let j = 0; j < array.length - x; j++) {
        // Right-side down
        for(let i = x; i < array.length - y; i++) {
          newArr = newArr.concat(array[i][array.length - x]);
        }
        // Bottom reverse
        newArr = newArr.concat(array[array.length - x].slice(y, array.length - x).reverse())
        // Left-side up
        for(let i = x + 1; i < array.length - y; i++) {
          newArr = newArr.concat(array[array.length - i][y]);
        }
        // Across
        newArr = newArr.concat(array[x].slice(x, array.length - x));
        x++
        y++
    }
    return newArr;
  } else {
    let newArr = [].concat(array[0]);
    return newArr;
  }
};

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]

// Expected: [1,2,3,4,5,6,7,8,9]
