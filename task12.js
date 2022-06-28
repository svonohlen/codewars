function findOdd(A) {
  const mySet = new Set(A);
  let arr = Array.from(mySet);
  let finalArr = [];
  let temp = [];
  for (let i = 0; i <= arr.length; i++) {
    if (temp.length != 0) {
      finalArr.push(temp);
      temp = [];
    }

    for (let j = 0; j < A.length; j++) {
      if (arr[i] === A[j]) {
        temp.push(arr[i]);
      }
    }
  }

  const result = finalArr.find((element) => element.length % 2 != 0);
  return result[0];
}

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// short solution:
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
// }

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
