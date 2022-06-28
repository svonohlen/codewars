function arrayDiff(a, b) {
  let newA = a;
  if (b.length === 0) {
    return a;
  }
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      let index = a.indexOf(b[j]);
      if (index != -1) {
        newA.splice(index, 1);
      }
    }
  }

  return newA;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// shorter solution:
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }
