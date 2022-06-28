function findUniq(arr) {
  const set = new Set(arr);
  const uniqArray = Array.from(set);
  let counter1 = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (uniqArray[0] === arr[i]) {
      counter1 += 1;
    }
  }
  if (counter1 > 1) {
    return uniqArray[1];
  } else {
    return uniqArray[0];
  }
}

console.log(findUniq([1, 1, 2, 1, 1]));

// short solution:
// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
//   }
