require('dotenv').config();
const app = require('./app');
const connect = require('./db');

connect();
const { PORT } = process.env || 4444;

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
