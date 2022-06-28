function validParentheses(parens) {
  while (/\(\)/g.test(parens)) {
    parens = parens.replace(/\(\)/g, "");
  }
  return !parens.length;
}

console.log(validParentheses("((()())))"));

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
