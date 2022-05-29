import { sign, verify } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import { token } from "../../../types/tokens";
import { JWT_SECRET_KEY } from "../../../../config/constants";
import { AppError } from "../../../../error-module/baseError/appError";
import { CUSTOM_ERROR } from "../../../../error-module/types/customErrors";
import { STATUS_CODE } from "../../../../error-module/types/statusCode";
import { v4 as uuidv4 } from "uuid";

class AuthHelper {
  generateAccessToken(payload: token) {
    return sign(payload, JWT_SECRET_KEY, { expiresIn: 60 * 10 }); //One minute to expire
  }

  generateRefreshToken() {
    return uuidv4();
  }

  verifyToken(token: any) {
    return verify(token, JWT_SECRET_KEY);
  }

  async hashPassword(password: string) {
    return await hash(password, 10);
  }

  async comparePassword(param: any) {
    return await compare(param.password, param.hashedPassword);
  }

  validateCredential(user: any) {
    if (!user)
      throw new AppError(
        "wrong username or password",
        STATUS_CODE.AUTHORIZATION_ERROR,
        CUSTOM_ERROR.INVALID_CREDENTIALS
      );
  }

  validateDuplicateRegister(user: any) {
    if (user)
      throw new AppError(
        "this email or phone already exist",
        STATUS_CODE.VALIDATION_ERROR,
        CUSTOM_ERROR.DUPLICATE_REGISTER
      );
  }

  validateUser(user: any) {
    if (!user)
      throw new AppError(
        "this email or phone are not registered before",
        STATUS_CODE.VALIDATION_ERROR,
        CUSTOM_ERROR.USER_NOT_FOUND
      );
  }

  validateRefreshToken(
    savedRefreshToken: string | null,
    clientRefreshToken: string
  ) {
    if (!savedRefreshToken || savedRefreshToken != clientRefreshToken)
      throw new AppError(
        "please login again",
        STATUS_CODE.FORBIDDEN_ERROR,
        CUSTOM_ERROR.FORBIDDEN_PERMISSION
      );
  }
}

export default new AuthHelper();
