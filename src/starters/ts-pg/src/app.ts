import express, { json, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { CustomError } from './types/types';
import { routes } from './routes';
export const app = express();

app.use(helmet());
app.use(json());
app.use(cors());
app.use(morgan('dev'));

app.use(routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
	return res
		.status(err.status || 500)
		.send({ error: err.name || 'Unexpected error', status: err.status });
});
