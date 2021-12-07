"use strict";
exports.__esModule = true;
exports.getExecuterFilePath = exports.getProblemFilesPath = exports.deleteCodeFile = exports.createCodeFile = exports.createFilePath = void 0;
var fs = require('fs');
function createFilePath(ip, submittedCodesFolder) {
    if (submittedCodesFolder === void 0) { submittedCodesFolder = 'userSubmittedCodes'; }
    var currentDate = Date.now().toString();
    return "./".concat(submittedCodesFolder, "/").concat(currentDate, "_").concat(ip);
}
exports.createFilePath = createFilePath;
function createCodeFile(filePath, code) {
    fs.writeFileSync(filePath, code, function (err) {
        if (err)
            throw err;
    });
    return true;
}
exports.createCodeFile = createCodeFile;
function deleteCodeFile(filePath) {
    fs.unlink(filePath, function (err) {
        if (err)
            throw err;
    });
}
exports.deleteCodeFile = deleteCodeFile;
function getProblemFilesPath(language, problemId, codeExecuterFolder) {
    if (codeExecuterFolder === void 0) { codeExecuterFolder = 'codeExecuter'; }
    return "./".concat(codeExecuterFolder, "/").concat(language, "/").concat(problemId);
}
exports.getProblemFilesPath = getProblemFilesPath;
function getExecuterFilePath(language, codeExecuterFolder) {
    if (codeExecuterFolder === void 0) { codeExecuterFolder = 'codeExecuter'; }
    return "./".concat(codeExecuterFolder, "/").concat(language, "/run_input.sh");
}
exports.getExecuterFilePath = getExecuterFilePath;
