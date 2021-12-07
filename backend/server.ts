import express = require('express');
import cors = require('cors');
import {
  createCodeFile,
  createFilePath,
  deleteCodeFile,
  getExecuterFilePath,
  getProblemFilesPath,
} from './helpers/fileOps';
import { createExecuteOptions, executeCode } from './helpers/codeExecuter';
import { extensionOf, prepareUserCodeExecute } from './helpers/helper';

const app = express();
const PORT: Number = 8080;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.post('/submitCode', async (req, res) => {
  let executionProps = prepareUserCodeExecute(req.ip, req.body.language, req.body.problemId);
  if (createCodeFile(executionProps.filePath, req.body.code)) {
    let response = await executeCode(
      executionProps.executerPath + ' ' + executionProps.executionOptions
    ); // wait for async exec operation.
    if (!(process.env.KEEP_USER_CODES === 'true')) {
      deleteCodeFile(executionProps.filePath);
    }
    res.status(200).json(response).send();
  } else {
    res.status(500).send('Something went wrong!\nCould not create file'); //TODO:Maybe user shouldn't know that there was an error creating the file?
  }
});

app.listen(PORT, () => {
  console.log('The application is listening ' + 'on port http://localhost:' + PORT);
});
