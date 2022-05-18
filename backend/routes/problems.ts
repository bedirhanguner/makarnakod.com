import { Router } from 'express';
import { Iproblem, AlgorithmProblems, DataStructureProblems, FunctionalProgrammingProblems, DatabaseProblems } from '../models/problemModel';

export const AlgorithmProblemsRouter = Router();
export const DataStructureProblemsRouter = Router();
export const FunctionalProgrammingProblemsRouter = Router();
export const DatabaseProblemsRouter = Router();

AlgorithmProblemsRouter.get('/:problemId', (req, res) => {
  const problem = AlgorithmProblems.findOne({ name: req.params.problemId }).exec(
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send('Algorithm Problems not found');
      }
    }
  );
});
AlgorithmProblemsRouter.get('', (req, res) => {
  const problem = AlgorithmProblems.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Algorithm Problems not found');
    }
  });
});

DataStructureProblemsRouter.get('/:problemId', (req, res) => {
  const problem = DataStructureProblems.findOne({ name: req.params.problemId }).exec(
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send('Data Structure Problems  not found');
      }
    }
  );
});
DataStructureProblemsRouter.get('', (req, res) => {
  const problem = DataStructureProblems.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Data Structure Problems not found');
    }
  });
});

FunctionalProgrammingProblemsRouter.get('/:problemId', (req, res) => {
  const problem = FunctionalProgrammingProblems.findOne({ name: req.params.problemId }).exec(
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send('Functional Programming Problems  not found');
      }
    }
  );
});
FunctionalProgrammingProblemsRouter.get('', (req, res) => {
  const problem = FunctionalProgrammingProblems.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Functional Programming  Problems not found');
    }
  });
});

DatabaseProblemsRouter.get('/:problemId', (req, res) => {
  const problem = DatabaseProblems.findOne({ name: req.params.problemId }).exec(
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send('Database Problems Problems  not found');
      }
    }
  );
});
DatabaseProblemsRouter.get('', (req, res) => {
  const problem = DatabaseProblems.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Database Problems  Problems not found');
    }
  });
});
