// import { helloModel } from '../models/Hello.model';
const getHellos = (req, res, next) =>
	// It should call the model
	// try {
	//     const hello = helloModel.find()
	//     return res.status(200).send(hello)
	// } catch (error) {
	//     next(error)
	// }
	// const error = new Error('error creado en el controlador');
	// error.statusCode = 400;
	// res.error = error;
	// next(error);
	res.status(400).send({ message: 'hello js express mongo' });

module.exports = { getHellos };
