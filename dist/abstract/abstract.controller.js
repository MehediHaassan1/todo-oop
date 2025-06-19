"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncWrapper_1 = __importDefault(require("../middleware/asyncWrapper/asyncWrapper"));
const customError_1 = __importDefault(require("../utils/lib/customError"));
const responseMessage_1 = __importDefault(require("../utils/miscellaneous/responseMessage"));
const statusCode_1 = __importDefault(require("../utils/miscellaneous/statusCode"));
const common_validators_1 = __importDefault(require("../validators/common/common.validators"));
class AbstractController {
    constructor() {
        this.StatusCode = statusCode_1.default;
        this.asyncWrapper = new asyncWrapper_1.default();
        this.commonValidator = new common_validators_1.default();
    }
    error(message, status) {
        throw new customError_1.default(message || responseMessage_1.default.HTTP_INTERNAL_SERVER_ERROR, status || statusCode_1.default.HTTP_INTERNAL_SERVER_ERROR);
    }
}
exports.default = AbstractController;
