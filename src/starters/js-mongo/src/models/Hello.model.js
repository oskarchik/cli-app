const { Schema, model } = require('express');

const helloSchema = new Schema(
	{
		message: {
			type: String,
		},
	},
	{ timeStamps: true }
);

module.exports = model('Hello', helloSchema);
