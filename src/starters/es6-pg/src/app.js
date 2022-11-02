import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { routes } from './routes';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use(morgan('dev'));

app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) =>
	res.status(err.status || 500).send({ error: err.name || 'Unexpected error', status: err.status })
);
