"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_router_1 = __importDefault(require("../../abstract/abstract.router"));
const task_controller_1 = __importDefault(require("../../controllers/task/task.controller"));
class TaskRouter extends abstract_router_1.default {
    constructor() {
        super();
        this.taskController = new task_controller_1.default();
        this.callRouter();
    }
    callRouter() {
        this.router.route("/").post(this.taskController.createTaskController);
    }
}
exports.default = TaskRouter;
