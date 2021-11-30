let knownCorrect = require("./known_correct");
let userSubmitted = require("./user_submitted_code");

let areEqualArrays = (arr1, arr2) => {
  return arr1.length == arr2.length && arr1.every((v) => arr2.indexOf(v) >= 0);
};

const testCases = [0, 1, 100];

testCases.forEach((input) => {
  if (!areEqualArrays(knownCorrect.ucBes(input), userSubmitted.ucBes(input))) {
    throw "Arrays are not the same for input " + input;
  }
});
