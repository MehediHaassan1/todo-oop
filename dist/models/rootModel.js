"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../app/database");
const task_model_1 = __importDefault(require("./task/task.model"));
class Models {
    constructor() {
        this.db = database_1.db;
    }
    taskModel(trx) {
        return new task_model_1.default(trx || this.db);
    }
}
exports.default = Models;
