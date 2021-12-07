"use strict";
exports.__esModule = true;
exports.executeCode = exports.createExecuteOptions = void 0;
var cp = require('child_process');
var helper_1 = require("./helper");
function createExecuteOptions(problemFilesPath, lang, submittedCodePath) {
    var extension = helper_1.extensionOf[lang];
    return "".concat(problemFilesPath, "/main.").concat(extension, " ").concat(problemFilesPath, "/known_correct.").concat(extension, " ").concat(submittedCodePath);
}
exports.createExecuteOptions = createExecuteOptions;
function executeCode(executeCommand) {
    var response = { hasErrors: false, output: null };
    return new Promise(function (resolve) {
        cp.exec(executeCommand, function (err, stdout) {
            if (err) {
                response.hasErrors = true;
                response.output = (0, helper_1.parseErrorMessage)(err.message);
            }
            else {
                response.output = stdout;
            }
            resolve(response);
        });
    });
}
exports.executeCode = executeCode;
