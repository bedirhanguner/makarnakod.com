var cp = require('child_process');
import { extensionOf, parseErrorMessage } from './helper';

export function createExecuteOptions(
  problemFilesPath: string,
  lang: string,
  submittedCodePath: string
): string {
  const extension = extensionOf[lang];
  return `${problemFilesPath}/main.${extension} ${problemFilesPath}/known_correct.${extension} ${submittedCodePath}`;
}

type ExecuteResultType = { hasErrors: boolean; output: string | null };
export function executeCode(executeCommand: string): Promise<ExecuteResultType> {
  let response: ExecuteResultType = { hasErrors: false, output: null };

  return new Promise((resolve) => {
    cp.exec(executeCommand, function (err: Error, stdout: string) {
      if (err) {
        response.hasErrors = true;
        response.output = parseErrorMessage(err.message);
      } else {
        response.output = stdout;
      }
      resolve(response);
    });
  });
}
