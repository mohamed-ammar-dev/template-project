import { LOCALIZATION_LANGUAGE } from "../../shared/types/enums";
import { CUSTOM_ERROR } from "./customErrors";

export const errorMessage = {
  [LOCALIZATION_LANGUAGE.ENGLISH]: {
    [CUSTOM_ERROR.INVALID_TOKEN]: "invalid token",
    [CUSTOM_ERROR.INVALID_CREDENTIALS]: "invalid credentials",
    [CUSTOM_ERROR.FORBIDDEN_PERMISSION]: "forbidden permission",
    [CUSTOM_ERROR.USER_NOT_FOUND]: "code_ex",
    [CUSTOM_ERROR.TOKEN_EXPIRED]: "token_ex",
    [CUSTOM_ERROR.USER_ALREADY_EXIST]: "code_ex",
    [CUSTOM_ERROR.PHONE_ALREADY_EXIST]: "code_ex",
    [CUSTOM_ERROR.DUPLICATE_REGISTER]: "code_ex",
  },
  [LOCALIZATION_LANGUAGE.ARABIC]: {
    [CUSTOM_ERROR.INVALID_TOKEN]: "invalid token",
    [CUSTOM_ERROR.INVALID_CREDENTIALS]: "خطا في اسم المستخدم او كلمة السر",
    [CUSTOM_ERROR.FORBIDDEN_PERMISSION]: "forbidden permission",
    [CUSTOM_ERROR.TOKEN_EXPIRED]: "token_ex",
    [CUSTOM_ERROR.USER_NOT_FOUND]: "code_ex",
    [CUSTOM_ERROR.USER_ALREADY_EXIST]: "code_ex",
    [CUSTOM_ERROR.PHONE_ALREADY_EXIST]: "code_ex",
    [CUSTOM_ERROR.DUPLICATE_REGISTER]: "code_ex",
  },
};
