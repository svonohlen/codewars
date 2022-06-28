function spinWords(string) {
  const array = string.split(" ");
  const finalArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      let temp = Array.from(array[i]);
      finalArray.push(temp.reverse().join(""));
    } else {
      finalArray.push(array[i]);
    }
  }
  const result = finalArray.join(" ");
  return result;
}

console.log(spinWords("This is another test"));
