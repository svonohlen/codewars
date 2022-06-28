const chai = require("chai");

function sortByTripletPositions(a, b, triplets) {
  var result = 0;
  triplets.forEach((element) => {
    if (a == element[0] && (b == element[1] || b == element[2])) {
      result = -1;
    } else if (a == element[1] && b == element[2]) {
      result = -1;
    } else if (b == element[0] && (a == element[1] || a == element[2])) {
      result = 1;
    } else if (b == element[1] && a == element[2]) {
      result = 1;
    }
  });
  return result;
}

function uniqueCharsInArrays(arr) {
  let set = new Set();
  arr.forEach((element) => {
    element.forEach((insideElement) => {
      set.add(insideElement);
    });
  });
  return Array.from(set);
}

function recoverSecret(triplets) {
  let chars = uniqueCharsInArrays(triplets);
  chars.sort(function (a, b) {
    let sortResult = sortByTripletPositions(b, a, triplets);
    return sortResult;
  });
  chars.sort(function (a, b) {
    let sortResult = sortByTripletPositions(b, a, triplets);
    return sortResult;
  });
  chars.sort(function (a, b) {
    let sortResult = sortByTripletPositions(b, a, triplets);
    return sortResult;
  });
  return chars.reverse().join("");
}

triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

console.log(recoverSecret(triplets1));

const assert = chai.assert;
describe("Tests", () => {
  it("test", () => {
    secret1 = "whatisup";
    triplets1 = [
      ["t", "u", "p"],
      ["w", "h", "i"],
      ["t", "s", "u"],
      ["a", "t", "s"],
      ["h", "a", "p"],
      ["t", "i", "s"],
      ["w", "h", "s"],
    ];

    assert.equal(recoverSecret(triplets1), secret1);
  });
});
