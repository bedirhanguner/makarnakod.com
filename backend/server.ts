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

const bodyParser = require('body-parser');
const routesHandler = require('../routes/handler.js');

const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use('/', routesHandler);

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

//DB Connection
mongoose.connect(process.env.db_uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log('Database Succesfuly Connected!')
})
.catch( (err: string) => {
    console.log('Error: '+ err)
});

//This is for Production, we're not gonna use that for now
// if (process.env.NODE_ENV === 'production') {
//     //serve any static files
//     app.use(express.static(path.join(__dirname, 'client/build')));

//     //handle react routing return all requests to react app
//     app.get('*', function(req, res){
//         res.sendFile(path.join(__dirname, 'client/build', routesHandler));
//     });
// }

app.listen(PORT, () => {
  console.log('The application is listening ' + 'on port:' + PORT);
});
