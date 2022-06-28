function pigIt(str) {
  let array = str.split(" ");

  let finalArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!array[i].match(/[!"#$%&'()*+,-./:;<=>°?@[\]^_`{|}~]/g)) {
      let splitArray = array[i].split("");
      let singleLetters = splitArray.shift();
      splitArray.push(singleLetters, "a", "y");
      finalArray.push(splitArray.join(""));
    } else {
      finalArray.push(array[i]);
    }
  }

  return finalArray.join(" ");
}

console.log(pigIt("hello world !"));

function pigIt(str) {
  return str.replace(
    /(\w)(\w*)(\s|$|[!"#$%&'()*+,-./:;<=>?@[\]^_`°{|}~])/g,
    "$2$1ay$3"
  );
}

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// 1st Capturing Group (\w)
// \w matches any word character (equivalent to [a-zA-Z0-9_])
// 2nd Capturing Group (\w*)
// \w matches any word character (equivalent to [a-zA-Z0-9_])
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// 3rd Capturing Group (\s|$)
// 1st Alternative \s
// \s matches any whitespace character (equivalent to [\r\n\t\f\v ])
// 2nd Alternative $
// $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
