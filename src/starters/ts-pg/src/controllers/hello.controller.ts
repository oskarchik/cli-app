import { NextFunction, Request, Response } from 'express';
// import { prisma } from '../config/client';

export const getHellos = async (req: Request, res: Response, next: NextFunction) => {
	// try {
	// 	const messages = await prisma.message.findMany();
	// } catch (error) {
	// 	next(error);
	// }

	return res.status(200).send({ message: 'hello from ts-pg' });
};
