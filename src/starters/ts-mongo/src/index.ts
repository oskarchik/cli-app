import 'dotenv/config';
import { app } from './app';
import { dbConnection } from './db';

const PORT = process.env.PORT || 4444;

dbConnection();

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
