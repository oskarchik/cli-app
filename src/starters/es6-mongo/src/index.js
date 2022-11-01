import * as dotenv from 'dotenv';
import { app } from './app';
import { dbConnection } from './db';

dotenv.config();

dbConnection();

const { PORT } = process.env || 4444;

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
