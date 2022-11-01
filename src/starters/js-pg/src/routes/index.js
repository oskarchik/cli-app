const routes = require('express').Router();
const { apiRouter } = require('./api');

routes.use('/api/v1/', apiRouter);

routes.use('*', (req, res, next) => {
	const error = new Error('Route not found');
	error.status = 404;
	next(error);
});
module.exports = routes;
