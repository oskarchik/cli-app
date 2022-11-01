const morgan = require('morgan');

morgan.token('message', (req, res) => res.error.message || '');

const getIpFormat = () => (process.env.NODE_ENV === 'production' ? ':remote-addr - ' : '');

const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

// const successHandler = morgan(successResponseFormat, {skip: (req,res)=>res.statusCode >=400,
// stream: {write: message => }})

const successHandler = morgan(successResponseFormat, { skip: (req, res) => res.statusCode >= 400 });
const errorHandler = morgan(errorResponseFormat, { skip: (req, res) => res.statusCode < 400 });
module.exports = { successHandler, errorHandler };
