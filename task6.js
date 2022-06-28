// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets , and curly braces . Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: .

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

const bracketIsOpen = (bracket) => {
  if (bracket === "[" || bracket === "(" || bracket === "{") {
    return true;
  }
};

const getClosedBracket = (bracket) => {
  switch (bracket) {
    case "[":
      return "]";
      break;
    case "{":
      return "}";
      break;
    case "(":
      return ")";
      break;
    default:
      return null;
  }
};

function validBraces(braces) {
  let stack = [];
  for (let bracket of braces) {
    if (bracketIsOpen(bracket)) {
      stack.push(getClosedBracket(bracket));
    } else if (stack.pop() !== bracket) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(validBraces("[(])"));

// function validBraces(braces){
//     while(/\(\)/g.test(braces)){braces = braces.replace(/\(\)/g,"")}
//     return !braces.length;
//    } ???????????????????????????
