import 'dotenv/config';
import { connect } from 'mongoose';

const DB_URL = <string>process.env.DB_URL;
export const dbConnection = async (): Promise<void> => {
	try {
		await connect(DB_URL);
		console.log('connected to database...');
	} catch (error) {
		console.log('Error connecting to database', error);
	}
};
