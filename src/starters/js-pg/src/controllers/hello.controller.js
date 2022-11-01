// const prisma = require('../prisma');

const getHellos = async (req, res, next) => {
	// try {
	// 	const messages = await prisma.message.findMany();
	// } catch (error) {
	// 	next(error);
	// }
	res.status(200).send({ message: 'hello js express postgres' });
};
module.exports = { getHellos };
