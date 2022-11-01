import { NextFunction, Request, Response, Router } from 'express';
import { apiRouter } from './api';

export const routes = Router();

routes.use('/api/v1/', apiRouter);

routes.use('/api/v1/*', (req: Request, res: Response, next: NextFunction) => {
	const error = new Error('Route not found');
	res.status(404);
	next(error);
});
