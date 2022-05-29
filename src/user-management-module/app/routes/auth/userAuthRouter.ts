import { rateLimit } from "express-rate-limit";
import express from "express";
import { validate } from "../../../../shared/middleware/validate";
import { loginSchema } from "../../schemas/auth/login";
import { userRegisterSchema } from "../../schemas/auth/userRegister";
import catchAsync from "../../../../error-module/utils/catchAsync";
import { UserAuthController } from "../../controllers/auth/userAuthController";
import joiCatchAsync from "../../../../error-module/utils/joiCatchAsync";
import { refreshTokenSchema } from "../../schemas/auth/refreshToken";
import { auth } from "../../../../shared/middleware/authentication";
import { ROLE_TYPE } from "../../../types/enums";
import { restrictTo } from "../../../../shared/middleware/authorization";

const userAuthRouter = express.Router();

const apiLimiter = rateLimit({
  windowMs: 1 * 60,
  max: 2,
});

userAuthRouter.post(
  "/login",
  joiCatchAsync(validate(loginSchema)),
  catchAsync(new UserAuthController().login)
);

userAuthRouter.post(
  "/register",
  joiCatchAsync(validate(userRegisterSchema)),
  catchAsync(new UserAuthController().register)
);

userAuthRouter.get(
  "/logout",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.USER])),
  catchAsync(new UserAuthController().logout)
);

userAuthRouter.post(
  "/refreshToken",
  apiLimiter,
  joiCatchAsync(validate(refreshTokenSchema)),
  catchAsync(new UserAuthController().refreshToken)
);

export default userAuthRouter;
