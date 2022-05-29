import { Request, Response, NextFunction } from "express";
import { AppError } from "../../error-module/baseError/appError";
import { CUSTOM_ERROR } from "../../error-module/types/customErrors";
import { STATUS_CODE } from "../../error-module/types/statusCode";
import { ROLE_TYPE } from "../../user-management-module/types/enums";

export const restrictTo = (role: Array<ROLE_TYPE>) => {
  return async (request: Request, _: Response, next: NextFunction) => {
    if (!request.user || role.indexOf(request.user.role) == -1)
      throw new AppError(
        "You do not have permission to perform this action",
        STATUS_CODE.FORBIDDEN_ERROR,
        CUSTOM_ERROR.FORBIDDEN_PERMISSION
      );

    next();
  };
};
