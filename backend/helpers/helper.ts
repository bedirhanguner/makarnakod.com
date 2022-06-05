import { createExecuteOptions } from './codeExecuter';
import {
  createFilePath,
  getExecuterFilePath,
  getProblemFilesPath,
} from './fileOps';

export let extensionOf: { [key: string]: string } = {
  python: 'py',
  golang: 'go',
  javascript: 'js',
  ruby: 'rb',
};

type CodeExecuteProps = {
  filePath: string;
  problemFilesPath: string;
  executerPath: string;
  executionOptions: string;
};
export function prepareUserCodeExecute(
  ip: string,
  language: string,
  problemId: string,
  submittedCodesFolder = 'userSubmittedCodes',
  codeExecuterFolder = 'codeExecuter'
): CodeExecuteProps {
  let executionProps: CodeExecuteProps = {
    filePath: createFilePath(ip, submittedCodesFolder),
    problemFilesPath: getProblemFilesPath(
      language,
      problemId,
      codeExecuterFolder
    ),
    executerPath: getExecuterFilePath(language, codeExecuterFolder),
    executionOptions: '',
  };
  executionProps = {
    ...executionProps,
    executionOptions: createExecuteOptions(
      executionProps.problemFilesPath,
      language,
      executionProps.filePath
    ),
  };
  return executionProps;
}

export type CodeExecuteResult = {
  FailedCase: { TestNo: number; TestCase: string };
  ErrorType: string;
  InnerError: any;
};
export function parseErrorMessage(error: string): string {
  let message = error;
  if (error.includes('<Error>')) {
    console.log(error);

    message = error.split('<Error>{')[1].split('}</Error>')[0];
  }
  return message;
}
