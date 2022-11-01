import { Schema, model } from 'mongoose';

const helloSchema = new Schema(
	{
		message: {
			type: String,
		},
	},
	{ timestamps: true }
);

export const helloModel = model('Hello', helloSchema);
