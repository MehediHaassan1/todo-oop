import { Request } from "express";
import AbstractService from "../../abstract/abstract.service";
import { db } from "../../app/database";

class TaskService extends AbstractService {
	constructor() {
		super();
	}

	public async createTaskService(req: Request) {
		return await db.transaction(async (trx) => {
			const taskModel = this.Model.taskModel(trx);
			const result = await taskModel.createTask(req.body);

			if (!result || result.length === 0) {
				return {
					success: false,
					code: this.StatusCode.HTTP_BAD_REQUEST,
					message: this.ResMsg.HTTP_BAD_REQUEST,
					data: null,
				};
			}
            console.log(result)
			return {
				success: true,
				code: this.StatusCode.HTTP_OK,
				message: this.ResMsg.HTTP_OK,
				data: result[0],
			};
		});
	}
}

export default TaskService;
