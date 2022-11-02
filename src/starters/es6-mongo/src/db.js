import * as dotenv from 'dotenv';
import { connect } from 'mongoose';

dotenv.config();

const { DB_URL } = process.env;

export const dbConnection = async () => {
	try {
		await connect(DB_URL, console.log('connected to database'));
	} catch (error) {
		console.log('Error connecting to database', error);
	}
};
