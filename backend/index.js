const express = require("express");
var cors = require("cors");
var fs = require("fs");
var cp = require("child_process");
const app = express();

let createFilePath = (ip) => {
  return "./userSubmittedCodes/".concat(Date.now().toString(), "_", ip);
};

let languageToExtension = {
  python: ".py",
  golang: ".go",
  javascript: ".js",
};

let createExecuteOptions = (problemFilesPath, lang, userSubmittedFilePath) => {
  return (
    " " +
    problemFilesPath +
    "/" +
    "main" +
    languageToExtension[lang] +
    " " +
    problemFilesPath +
    "/" +
    "known_correct" +
    languageToExtension[lang] +
    " " +
    userSubmittedFilePath
  );
};

let parseErrorMessage = (err) => {
  let failedTestCases = err.message.split(
    "======================================================================"
  );
  failedTestCases.shift(); // remove first element (Command failed description)
  if (failedTestCases.length == 0) {
    return err.message;
  }
  let firstFailedCase = failedTestCases[0].split(
    "----------------------------------------------------------------------"
  )[1];
  return firstFailedCase; //.find(line => line.startsWith('AssertionError')) // User readable error message
};

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.get("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.post("/submitCode", (req, res) => {
  let filePath = createFilePath(req.ip);
  fs.writeFile(filePath, req.body.code, function (err, file) {
    if (err) throw err;
    // console.log("Saved!");
  });

  let problemFilesPath =
    "./codeExecuter/" + req.body.language + "/" + req.body.problemId;

  let executionPath = "./codeExecuter/" + req.body.language + "/run_input.sh";
  let executeOptions = createExecuteOptions(
    problemFilesPath,
    req.body.language,
    filePath
  );

  cp.exec(executionPath + executeOptions, function (err) {
    let response = { hasErrors: false, output: null };
    if (err) {
      response.hasErrors = true;
      response.output = parseErrorMessage(err);
    }

    fs.unlink(filePath, (err) => {
      if (err) throw err;
    });

    res.send(response);
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
