// import { helloModel } from "../models/Hello.model";

export const getHellos = (req, res, next) =>
	// It should call the model
	// try {
	//     const hello = helloModel.find()
	//     return res.status(200).send(hello)
	// } catch (error) {
	//     next(error)
	// }
	res.status(200).send({ message: 'hello from es6 express mongo' });
