// import express from "express";
// import catchAsync from "../../../../error-module/utils/catchAsync";
// import { UserProfileController } from "../../controllers/user/userProfileController";
// import { auth } from "../../../../shared/middleware/authentication";
// import { ROLE_TYPE } from "../../../types/enums";
// import { restrictTo } from "../../../../shared/middleware/authorization";

// const userProfileRouter = express.Router();

// userProfileRouter.get(
//   "/me",
//   catchAsync(auth),
//   catchAsync(restrictTo([ROLE_TYPE.USER])),
//   catchAsync(new UserProfileController().getMyProfile)
// );

// export default userProfileRouter;
