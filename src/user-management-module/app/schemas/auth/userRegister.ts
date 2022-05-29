import { phoneSchema } from "./phone";
import Joi from "joi";
import { DEVICE, GENDER } from "../../../types/enums";

export const userRegisterSchema = phoneSchema.keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  gender: Joi.string().valid(GENDER.MALE, GENDER.FEMALE).required(),
  birthDate: Joi.date().required(),

  device: Joi.string()
    .valid(DEVICE.DESKTOP, DEVICE.ANDROID, DEVICE.IOS)
    .required(),
});
