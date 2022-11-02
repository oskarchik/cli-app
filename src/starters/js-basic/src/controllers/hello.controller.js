const getHellos = (req, res, next) => res.status(200).send({ message: 'hello from js basic' });

module.exports = { getHellos };
