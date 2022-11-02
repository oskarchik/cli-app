const helloRouter = require('express').Router();
const { getHellos } = require('../../controllers/hello.controller');

helloRouter.get('/', getHellos);

module.exports = { helloRouter };
