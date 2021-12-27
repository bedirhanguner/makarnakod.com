import { Router } from 'express';

import { ProblemsRouter } from './problems';

export const router = Router();

router.use('/algoritma', ProblemsRouter);
