import { Router } from 'express';
import { Iproblem, AlgorithmProblems, DataStructureProblems, FunctionalProgrammingProblems, DatabaseProblems, RegexProblems, ShellProblems, PythonProblems} from '../models/problemModel';

export const AlgorithmProblemsRouter = Router();
export const DataStructureProblemsRouter = Router();
export const FunctionalProgrammingProblemsRouter = Router();
export const DatabaseProblemsRouter = Router();
export const RegexProblemsRouter = Router();
export const ShellProblemsRouter = Router();
export const PythonProblemsRouter = Router();

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
      res.status(404).send('Database Problems not found');
    }
  });
});

RegexProblemsRouter.get('/:problemId', (req, res) => {
  const problem = RegexProblems.findOne({ name: req.params.problemId }).exec(
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send('Regex Problems Problems  not found');
      }
    }
  );
});
RegexProblemsRouter.get('', (req, res) => {
  const problem = RegexProblems.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Regex Problems Problems not found');
    }
  });
});

ShellProblemsRouter.get('/:problemId', (req, res) => {
  const problem = ShellProblems.findOne({ name: req.params.problemId }).exec(
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send('Shell Problems Problems  not found');
      }
    }
  );
});
ShellProblemsRouter.get('', (req, res) => {
  const problem = ShellProblems.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Shell Problems Problems not found');
    }
  });
});

PythonProblemsRouter.get('/:problemId', (req, res) => {
  const problem = PythonProblems.findOne({ name: req.params.problemId }).exec(
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send('Python Problems Problems  not found');
      }
    }
  );
});
PythonProblemsRouter.get('', (req, res) => {
  const problem = PythonProblems.find({}).exec((err, data) => {
    if (err) throw err;
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('Python Problems Problems not found');
    }
  });
});