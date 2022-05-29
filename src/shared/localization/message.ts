import { LOCALIZATION_LANGUAGE } from "../types/enums";
import { MESSAGE } from "./enums";

export const message = {
  [LOCALIZATION_LANGUAGE.ENGLISH]: {
    [MESSAGE.LOGIN_SUCCESS]: "login success",
    [MESSAGE.SIGNUP_SUCCESS]: "register success",
    [MESSAGE.ACCOUNT_VERIFIED_SUCCESS]: "account verified success",
    [MESSAGE.PHONE_VERIFIED_SUCCESS]: "phone verified success",
    [MESSAGE.CODE_SEND_SUCCESS]: "code send success",
    [MESSAGE.SEND_SUCCESS]: "send success",
    [MESSAGE.REST_PASSWORD_SUCCESS]: "password reset success",
    [MESSAGE.UPDATE_SUCCESS]: "update success",
    [MESSAGE.JOIN_COMPANY_SUCCESS]: "join company success",
    [MESSAGE.JOIN_COMPANY_PENDING]: "we are working on your request",
  },
  [LOCALIZATION_LANGUAGE.ARABIC]: {
    [MESSAGE.LOGIN_SUCCESS]: "تم تسجيل الدخول بنجاح",
    [MESSAGE.SIGNUP_SUCCESS]: "تم التسجيل بنجاح",
    [MESSAGE.ACCOUNT_VERIFIED_SUCCESS]: "تم تفعيل الحساب",
    [MESSAGE.PHONE_VERIFIED_SUCCESS]: "تم تفعيل رقم الهاتف",
    [MESSAGE.CODE_SEND_SUCCESS]: "تم ارسال كود التفعيل",
    [MESSAGE.SEND_SUCCESS]: "تم الارسال بنجاح",
    [MESSAGE.REST_PASSWORD_SUCCESS]: "تم تغير كلمة المرور بنجاح",
    [MESSAGE.UPDATE_SUCCESS]: "تم التعديل بنجاح",
    [MESSAGE.JOIN_COMPANY_SUCCESS]: "تم الاتحاق بنجاح",
    [MESSAGE.JOIN_COMPANY_PENDING]: "سيتم التحقق من طلبك",
  },
};
