"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rootModel_1 = __importDefault(require("../models/rootModel"));
const responseMessage_1 = __importDefault(require("../utils/miscellaneous/responseMessage"));
const statusCode_1 = __importDefault(require("../utils/miscellaneous/statusCode"));
class AbstractService {
    constructor() {
        this.ResMsg = responseMessage_1.default;
        this.StatusCode = statusCode_1.default;
        this.Model = new rootModel_1.default();
        this.schema = new Schema();
    }
}
exports.default = AbstractService;
