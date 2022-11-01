const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { routes } = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) =>
	res
		.status(err.status || 500)
		.send({ error: err.message || 'Unexpected error', status: err.status })
);

module.exports = app;
