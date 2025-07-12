/* import knex, { Knex } from "knex";
import config from "../utils/config/config";

const createDBConnection = () => {
	let connection: Knex<any, unknown[]> = knex({
		client: "pg",
		connection: {
			host: config.DB_HOST,
			port: parseInt(config.DB_PORT),
			user: config.DB_USER,
			password: config.DB_PASS,
			database: config.DB_NAME,
			timezone: "UTC",
			dateStrings: true,
			// ssl: {
			// 	rejectUnauthorized: false,
			// },
		},
		pool: {
			min: 0,
			max: 10,
		},
	});

    console.log("Database connected");

    return connection;
};

export const db = createDBConnection();
 */

import knex, { Knex } from "knex";
import config from "../utils/config/config";

const createDBConnection = () => {
	let connection: Knex<any, unknown[]> = knex({
		client: "pg",
		connection: config.DATABASE_URL, // <-- use full URL string here
		pool: {
			min: 0,
			max: 10,
		},
		// timezone: "UTC",  // if you want to keep this, you can configure in your DB or app
	});

	console.log("Database connected");

	return connection;
};

export const db = createDBConnection();
