import { TDB } from "../../types/common/common.types";
import { ITaskPayload } from "../../types/task/task.types";
import Schema from "../../utils/miscellaneous/schema";

class TaskModel extends Schema {
	private db: TDB;

	constructor(db: TDB) {
		super();
		this.db = db;
	}

	public async createTask(payload: ITaskPayload) {
		return await this.db("tasks")
			.withSchema(this.SCHEMA_DBO)
			.insert(payload)
			.returning("*");
	}
}

export default TaskModel;
