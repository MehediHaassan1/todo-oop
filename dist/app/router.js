"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_router_1 = __importDefault(require("../router/task/task.router"));
class RootRouter {
    constructor() {
        this.v1Router = (0, express_1.Router)();
        this.taskRouter = new task_router_1.default();
        this.callV1Routes();
    }
    callV1Routes() {
        this.v1Router.use("/tasks", this.taskRouter.router);
    }
}
exports.default = RootRouter;
