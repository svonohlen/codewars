/* Task: Write a function that takes a string of parentheses, and determines if the 
         order of the parentheses is valid. The function should return true if the 
         string is valid, and false if it's invalid.

   Examples
   "()"              =>  true
   ")(()))"          =>  false
   "("               =>  false
   "(())((()())())"  =>  true
*/

/* Validates an input based on the requirements above by removing any
   occurrence of "()" in a loop until the input string is either empty to return true
   or otherwise to return false.
*/
function validParentheses(input) {
  while (/\(\)/g.test(input)) {
    input = input.replace(/\(\)/g, "");
  }
  return !input.length;
}

console.log(validParentheses("((()())))"));
