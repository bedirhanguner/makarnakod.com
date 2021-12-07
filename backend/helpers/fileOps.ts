const fs = require('fs');

export function createFilePath(ip: string, submittedCodesFolder = 'userSubmittedCodes'): string {
  let currentDate: string = Date.now().toString();
  return `./${submittedCodesFolder}/${currentDate}_${ip}`;
}

export function createCodeFile(filePath: string, code: string): boolean {
  fs.writeFileSync(filePath, code, function (err: any) {
    if (err) throw err;
  });
  return true;
}

export function deleteCodeFile(filePath: string) {
  fs.unlink(filePath, (err: Error) => {
    if (err) throw err;
  });
}

export function getProblemFilesPath(
  language: string,
  problemId: string,
  codeExecuterFolder = 'codeExecuter'
): string {
  return `./${codeExecuterFolder}/${language}/${problemId}`;
}

export function getExecuterFilePath(language: string, codeExecuterFolder = 'codeExecuter'): string {
  return `./${codeExecuterFolder}/${language}/run_input.sh`;
}
