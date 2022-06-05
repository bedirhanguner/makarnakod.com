let ucBes = (n) => {
  let results = [];
  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 == 0) {
      result += "Fizz";
    }
    if (i % 5 == 0) {
      result += "Buzz";
    }
    if (result == "") {
      result = i.toString();
    }
    results[i - 1] = result;
  }
  return results;
};

module.exports = {
  ucBes,
};
