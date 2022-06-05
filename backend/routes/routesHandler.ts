import { Router } from 'express';
import { AlgorithmProblemsRouter, DataStructureProblemsRouter, FunctionalProgrammingProblemsRouter, DatabaseProblemsRouter, RegexProblemsRouter, ShellProblemsRouter, PythonProblemsRouter } from './problems';
import { UsersRouter } from './users';

export const router = Router();

router.use('/algoritma', AlgorithmProblemsRouter);
router.use('/veri-yapilari', DataStructureProblemsRouter);
router.use('/fonksiyonel-programlama', FunctionalProgrammingProblemsRouter);
router.use('/veritabani', DatabaseProblemsRouter);
router.use('/regex', RegexProblemsRouter);
router.use('/kabuk', ShellProblemsRouter);
router.use('/15-gunde-python-kiti', PythonProblemsRouter);
router.use('/users', UsersRouter);
