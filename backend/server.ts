import express = require('express');
import cors = require('cors');
import session = require('express-session');
import cookieParser = require('cookie-parser');

import { createCodeFile, deleteCodeFile } from './helpers/fileOps';
import { executeCode } from './helpers/codeExecuter';
import { prepareUserCodeExecute } from './helpers/helper';
import { router as routesHandler } from './routes/routesHandler';
import { initializePassport } from './helpers/passportConfig';

require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const PORT: Number = 8080;

let passport = initializePassport();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); // allow cross-origin requests
app.use(cookieParser(process.env.SESSION_SECRET || 'secret')); // for parsing encoded cookies
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routesHandler); // register routes

app.post('/submitCode', async (req, res) => {
  // TODO: create route for this
  let executionProps = prepareUserCodeExecute(
    req.ip,
    req.body.language,
    req.body.problemId
  );
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
  .connect(process.env.db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Succesfuly Connected!');
  })
  .catch((err: string) => {
    console.log('Error: ' + err);
  });

app.listen(PORT, () => {
  console.log('The application is listening ' + 'on port:' + PORT);
});
