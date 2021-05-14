// Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
var moveZeros = function (arr) {
  let counter = 0;
  arr.forEach(element => (element === 0) ? counter++ : false)
  const newArr = arr.filter(element => element !== 0)
  for(let i = 0; i < counter; i++) {
    newArr.push(0)
  }
  return newArr
}

moveZeros([false,1,0,1,2,0,1,3,"a"])

// Expected: returns[false,1,1,2,1,3,"a",0,0]
