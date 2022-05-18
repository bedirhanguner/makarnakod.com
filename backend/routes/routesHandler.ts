import { Router } from 'express';
import { AlgorithmProblemsRouter, DataStructureProblemsRouter, FunctionalProgrammingProblemsRouter, DatabaseProblemsRouter } from './problems';
import { PythonProblemsRouter } from './pythonProblems';
import { UsersRouter } from './users';

export const router = Router();

router.use('/algoritma', AlgorithmProblemsRouter);
router.use('/veri-yapilari', DataStructureProblemsRouter);
router.use('/fonksiyonel-programlama', FunctionalProgrammingProblemsRouter);
router.use('/betik', DatabaseProblemsRouter);
router.use('/15-gunde-python-kiti', PythonProblemsRouter);
router.use('/users', UsersRouter);
