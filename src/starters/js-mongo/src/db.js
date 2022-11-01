require('dotenv').config();
const mongoose = require('mongoose');

const { DB_URL } = process.env;

const connect = async () => {
	try {
		await mongoose.connect(DB_URL);
		console.log('connected to database');
	} catch (error) {
		console.log('Error connecting to database', error);
	}
};

module.exports = connect;
