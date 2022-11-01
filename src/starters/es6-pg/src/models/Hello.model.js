export const HelloModel = (sequelize, type) =>
	sequelize.define(
		'Hello',
		{
			id: {
				type: type.UUID,
				primaryKey: true,
				notNullable: true,
			},
			message: {
				type: type.STRING,
			},
		},
		{
			underscored: true,
		}
	);
