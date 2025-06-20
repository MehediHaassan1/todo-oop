import { Knex } from "knex";
import { db } from "../app/database";
import TaskModel from "./task/task.model";

class Models {
	private db: Knex = db;

	public taskModel(trx?: Knex.Transaction) {
		return new TaskModel(trx || this.db);
	}
}

export default Models;
