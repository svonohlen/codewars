function getCount(str) {
  let vowelsCount = 0;
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "a" ||
      array[i] === "e" ||
      array[i] === "i" ||
      array[i] === "o" ||
      array[i] === "u"
    ) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

console.log(getCount("product chart"));

function getCount2(str) {
  return (str.match(/[aeiou]/g) || []).length;
}
//There is a special case - if the initial string does not have any vowels, then the output would be the value null.
// ||[] returns empty array if preceeding value is falsey. therefore length is 0 and result is 0
//g tells to find all matches not just first one, i (*behind g if needed)tells to be case insensitive, // inside those is pattern,
// https://stackoverflow.com/questions/52975168/do-not-understand-vowel-count-code-for-javascript#:~:text=1-,str.,the%20length%20of%20the%20array.
console.log(getCount2("product chart"));
