// import { prisma } from '../prisma';

export const getHellos = async (req, res, next) => {
	// try {
	// 	const messages = await prisma.message.findMany();
	// 	console.log('🚀 ~ file: hello.controller.js ~ line 6 ~ getHellos ~ messages', messages);
	// } catch (error) {
	// 	next(error);
	// }

	return res.status(200).send({ message: 'hello es6 express postgres' });
};
