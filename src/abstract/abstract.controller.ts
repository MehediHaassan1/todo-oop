import Wrapper from "../middleware/asyncWrapper/asyncWrapper";
import CustomError from "../utils/lib/customError";
import ResMsg from "../utils/miscellaneous/responseMessage";
import StatusCode from "../utils/miscellaneous/statusCode";
import CommonValidator from "../validators/common/common.validators";

abstract class AbstractController {
	protected asyncWrapper: Wrapper;
	protected commonValidator;

	constructor() {
		this.asyncWrapper = new Wrapper();
		this.commonValidator = new CommonValidator();
	}

	protected StatusCode = StatusCode;
	protected error(message?: string, status?: number) {
		throw new CustomError(
			message || ResMsg.HTTP_INTERNAL_SERVER_ERROR,
			status || StatusCode.HTTP_INTERNAL_SERVER_ERROR
		);
	}
}

export default AbstractController;
