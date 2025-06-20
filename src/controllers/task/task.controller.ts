import { Request, Response } from "express";
import AbstractController from "../../abstract/abstract.controller";
import TaskService from "../../services/task/task.service";
import TaskValidator from "../../validators/task/task.validator";

class TaskController extends AbstractController {
	private taskService = new TaskService();
	private taskValidator = new TaskValidator();

	constructor() {
		super();
	}

	public createTaskController = this.asyncWrapper.wrap(
		{ bodySchema: this.taskValidator.createTaskValidator },
		async (req: Request, res: Response) => {
			const { code, ...rest } = await this.taskService.createTaskService(
				req
			);
			res.status(code).json({
				...rest,
			});
		}
	);
}

export default TaskController;
