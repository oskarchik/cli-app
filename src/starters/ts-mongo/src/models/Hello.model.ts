import { model, Schema } from 'mongoose';

const helloSchema = new Schema(
	{
		message: { type: String },
	},
	{ timestamps: true }
);

export const HelloModel = model('Hello', helloSchema);
