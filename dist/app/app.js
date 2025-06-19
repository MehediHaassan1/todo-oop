"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constant_1 = require("../utils/miscellaneous/constant");
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(port) {
        this.origin = constant_1.origin;
        this.app = (0, express_1.default)();
        this.port = port;
        this.initMiddleware();
    }
    startServer() {
        this.app.listen(this.port, () => {
            console.log(`🚀 Server launched successfully on port ${this.port}`);
            console.log(`⏰ Started at: ${new Date().toISOString()}`);
            console.log(`🔗 Access: http://localhost:${this.port}`);
        });
    }
    initMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)({ origin: this.origin, credentials: true }));
    }
}
exports.default = App;
