import { NextFunction, Request, Response } from "express";
import authHelper from "../../user-management-module/domain/core/helpers/authHelper";
import { AppError } from "../../error-module/baseError/appError";
import { CUSTOM_ERROR } from "../../error-module/types/customErrors";
import { STATUS_CODE } from "../../error-module/types/statusCode";

export const auth = async (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization?.replace(/(B|b)earer /, "");

  if (!token)
    throw new AppError(
      "there is missing parameter",
      STATUS_CODE.VALIDATION_ERROR,
      CUSTOM_ERROR.INVALID_TOKEN
    );

  const user = authHelper.verifyToken(token);

  if (!user)
    throw new AppError(
      "there is missing parameter",
      STATUS_CODE.VALIDATION_ERROR,
      CUSTOM_ERROR.INVALID_TOKEN
    );

  request.user = user;

  next();
};
