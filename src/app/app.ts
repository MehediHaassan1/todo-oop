import express, { Application, NextFunction, Request, Response } from "express";
import { origin } from "../utils/miscellaneous/constant";
import cors from "cors";

class App {
	public app: Application;
	private port: number;
	private origin: string[] = origin;

	constructor(port: number) {
		this.app = express();
		this.port = port;

		this.initMiddleware();
	}

	public startServer() {
		this.app.listen(this.port, () => {
			console.log(`🚀 Server launched successfully on port ${this.port}`);
			console.log(`⏰ Started at: ${new Date().toISOString()}`);
			console.log(`🔗 Access: http://localhost:${this.port}`);
		});
	}

	private initMiddleware() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors({ origin: this.origin, credentials: true }));
	}
}

export default App;
