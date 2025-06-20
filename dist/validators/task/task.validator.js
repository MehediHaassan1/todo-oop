"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class TaskValidator {
    constructor() {
        this.createTaskValidator = joi_1.default.object({
            title: joi_1.default.string().required(),
            description: joi_1.default.string().optional().allow(''),
            status: joi_1.default.string().valid('pending', 'in-progress', 'completed').default('pending').optional(),
            due_date: joi_1.default.date().optional().allow(null),
            priority: joi_1.default.string().valid('low', 'medium', 'high').default('low').optional()
        });
    }
}
exports.default = TaskValidator;
