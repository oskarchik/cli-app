import { Router } from 'express';
import { apiRouter } from './api';

export const routes = Router();

routes.use('/api/v1/', apiRouter);

routes.use('/api/v1/*', (req, res, next) => {
	const error = new Error('Route not found');
	error.status = 404;
	next(error);
});
