const apiRouter = require('express').Router();
const { helloRouter } = require('./hello.route');

apiRouter.use('/hello', helloRouter);

module.exports = { apiRouter };
