import { AppError } from "../baseError/appError";
import { CUSTOM_ERROR } from "../types/customErrors";
import { STATUS_CODE } from "../types/statusCode";

class ErrorHandler {
  handleJWTError() {
    new AppError(
      "Invalid token.",
      STATUS_CODE.AUTHORIZATION_ERROR,
      CUSTOM_ERROR.INVALID_TOKEN
    );
  }

  handleJWTExpiredError() {
    new AppError(
      "Your token has expired!",
      STATUS_CODE.AUTHORIZATION_ERROR,
      CUSTOM_ERROR.INVALID_TOKEN
    );
  }
}

export default new ErrorHandler();
