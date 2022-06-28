function wave(str) {
  let array = [];
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      continue;
    }
    let upperLetter = str.charAt(i).toUpperCase();

    strArr.splice(i, 1, upperLetter);
    array.push(strArr.join(""));

    strArr = str.split("");
  }
  return array;
}

console.log(wave("hello world"));

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
