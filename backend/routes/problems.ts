import { Router } from 'express';
import { Iproblem, Problem } from '../models/problemModel';
export const ProblemsRouter = Router();

ProblemsRouter.get('/:problemId', (req, res) => {
  const problem = Problem.findOne({ name: req.params.problemId }).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Problem not found');
    }
  });
});
