import { Router } from 'express';
import { IPythonProblem, PythonProblem } from '../models/pythonProblemModel';
export const PythonProblemsRouter = Router();

PythonProblemsRouter.get('/:problemId', (req, res) => {
  const problem = PythonProblem.findOne({ name: req.params.problemId }).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Problem not found');
    }
  });
});

PythonProblemsRouter.get('', (req, res) => {
  const problem = PythonProblem.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Python Problems not found');
    }
  });
});