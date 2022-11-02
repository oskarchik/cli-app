import { Router } from 'express';
import { helloRouter } from './hello.route';

export const apiRouter = Router();

apiRouter.use('/hello/', helloRouter);
