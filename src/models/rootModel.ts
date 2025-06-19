import { Knex } from "knex";
import { db } from "../app/database";

class Models {
	private db: Knex = db;
}

export default Models;
