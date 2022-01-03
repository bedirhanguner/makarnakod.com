import express = require('express');
import cors = require('cors');
import bcrypt = require('bcrypt');
import { createCodeFile, deleteCodeFile } from './helpers/fileOps';
import { executeCode } from './helpers/codeExecuter';
import { prepareUserCodeExecute } from './helpers/helper';
import { router as routesHandler } from './routes/routesHandler';

require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const PORT: Number = 8080;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // allow cross-origin requests
app.use('/', routesHandler); // register routes

app.post('/submitCode', async (req, res) => {
  // TODO: create route for this
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

//DB Connection
mongoose
  .connect(process.env.db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Succesfuly Connected!');
  })
  .catch((err: string) => {
    console.log('Error: ' + err);
  });

app.listen(PORT, () => {
  console.log('The application is listening ' + 'on port:' + PORT);
});
