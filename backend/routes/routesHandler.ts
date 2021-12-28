import { Router } from 'express';

import { ProblemsRouter } from './problems';

import { PythonProblemsRouter } from './pythonProblems';

export const router = Router();

router.use('/algoritma', ProblemsRouter);

router.use('/15-gunde-python-kiti', PythonProblemsRouter);