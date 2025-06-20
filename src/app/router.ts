import { Router } from "express";
import TaskRouter from "../router/task/task.router";

class RootRouter {
    public v1Router = Router();
    private taskRouter = new TaskRouter();

    constructor(){
        this.callV1Routes();
    }

    private callV1Routes(){
        this.v1Router.use("/tasks", this.taskRouter.router)
    }
}

export default RootRouter;