const apiRouter = require('express').Router();
const { helloRouter } = require('./hello');

apiRouter.use('/hello', helloRouter);

module.exports = { apiRouter };
