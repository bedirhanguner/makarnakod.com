"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.parseErrorMessage = exports.prepareUserCodeExecute = exports.extensionOf = void 0;
var codeExecuter_1 = require("./codeExecuter");
var fileOps_1 = require("./fileOps");
exports.extensionOf = {
    python: 'py',
    golang: 'go',
    javascript: 'js',
    ruby: 'rb'
};
function prepareUserCodeExecute(ip, language, problemId, submittedCodesFolder, codeExecuterFolder) {
    if (submittedCodesFolder === void 0) { submittedCodesFolder = 'userSubmittedCodes'; }
    if (codeExecuterFolder === void 0) { codeExecuterFolder = 'codeExecuter'; }
    var executionProps = {
        filePath: (0, fileOps_1.createFilePath)(ip, submittedCodesFolder),
        problemFilesPath: (0, fileOps_1.getProblemFilesPath)(language, problemId, codeExecuterFolder),
        executerPath: (0, fileOps_1.getExecuterFilePath)(language, codeExecuterFolder),
        executionOptions: ''
    };
    executionProps = __assign(__assign({}, executionProps), { executionOptions: (0, codeExecuter_1.createExecuteOptions)(executionProps.problemFilesPath, language, executionProps.filePath) });
    return executionProps;
}
exports.prepareUserCodeExecute = prepareUserCodeExecute;
function parseErrorMessage(error) {
    var message = error;
    if (error.includes('<Error>')) {
        message = error.split(/<Error>(.*)<\/Error>/).find(function (e) { return e.startsWith('{'); }) || error; // kinda jank but it should work. Trying to get this <Error>{'FailedCase': {'TestNo': 1, 'TestCase': 1}, 'ErrorType': 'lenDifference', 'InnerError': {'LengthOfKnownCorrect': 1, 'LengthOfUserSubmitted': 0}}</Error> part
    }
    return message;
}
exports.parseErrorMessage = parseErrorMessage;
