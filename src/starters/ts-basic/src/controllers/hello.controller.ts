import { NextFunction, Request, Response } from 'express';

export const getHellos = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).send({ message: 'hello from ts-basic' });
};
