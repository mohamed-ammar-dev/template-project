import authHelper from "../../domain/core/helpers/authHelper";
import { UserModel } from "../models/user";

UserModel.beforeCreate(async (user: any) => {
  user.password = await authHelper.hashPassword(user.password);

  user.email = user.email.toLowerCase();
});
