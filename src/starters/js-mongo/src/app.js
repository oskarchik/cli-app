const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const morgan = require('morgan');
const morgan = require('./config/morgan');

const routes = require('./routes');
// const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV !== 'test') {
	app.use(morgan.successHandler);
	app.use(morgan.errorHandler);
}
app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));

app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	res
		.status(err.statusCode || 500)
		.send({ error: err.message || 'Unexpected error', status: err.statusCode });
});

module.exports = app;
