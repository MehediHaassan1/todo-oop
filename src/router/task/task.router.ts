import AbstractRouter from "../../abstract/abstract.router";
import TaskController from "../../controllers/task/task.controller";

class TaskRouter extends AbstractRouter {
	private taskController = new TaskController();

	constructor() {
		super();
		this.callRouter();
	}

	private callRouter() {
		this.router.route("/").post(this.taskController.createTaskController);
	}
}

export default TaskRouter;
