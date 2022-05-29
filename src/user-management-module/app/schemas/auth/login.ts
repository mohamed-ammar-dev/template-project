import Joi from "joi";
import { phoneSchema } from "./phone";

export const loginSchema = phoneSchema.keys({
  password: Joi.string().required(),
});
