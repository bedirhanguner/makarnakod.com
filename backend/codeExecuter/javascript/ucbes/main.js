const knownCorrect = require('./known_correct');
const userSubmitted = require('./user_submitted_code');

const testCases = [0, 1, 3, 10, 100, 1000, Math.floor(Math.random() * (10000 - 1000) + 1000)];

testCases.forEach((input, index) => {
  const knownCorrectResult = knownCorrect.ucBes(input);
  const userSubmittedResult = userSubmitted.ucBes(input);

  if (knownCorrectResult.length !== userSubmittedResult.length) {
    const error = `{FailedCase: {TestNo: ${index}, TestCase: ${input}}, ErrorType: 'lenDifference', InnerError: {LengthOfKnownCorrect: ${knownCorrectResult.length}, LengthOfUserSubmitted: ${userSubmittedResult.length}}}`;
    throw `<Error>${error}</Error>`;
  }
  [...Array(input).keys()].forEach((i) => {
    if (knownCorrectResult[i] !== userSubmittedResult[i]) {
      let errorArray = [];
      let correctArray = [];

      if (knownCorrectResult.length < 4) {
        errorArray += userSubmittedResult.slice(0, userSubmittedResult.length + 1);
        correctArray += knownCorrectResult.slice(0, knownCorrectResult.length + 1);
      } else {
        errorArray += userSubmittedResult.slice(i - 4, i + 1);
        correctArray += knownCorrectResult.slice(i - 4, i + 1);
      }

      const error = `{FailedCase: {TestNo: ${index}, TestCase: ${input}}, ErrorType: 'valueDifference', InnerError: {KnownCorrect: ${correctArray}, UserSubmitted: ${errorArray}}}`;
      throw `<Error>${error}</Error>`;
    }
  });
});
