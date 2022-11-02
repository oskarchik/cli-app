import { NextFunction, Request, Response } from 'express';

// import { HelloModel } from "../models/Hello.model";
export const getHellos = (req: Request, res: Response, next: NextFunction) => {
	//It should call the model
	// try {
	//     const hello = HelloModel.find()
	//     return res.status(200).send(hello)
	// } catch (error) {
	//     next(error)
	// }
	return res.status(200).send({ message: 'hello from ts-mongo' });
};
