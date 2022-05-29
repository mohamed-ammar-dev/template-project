import { config } from "dotenv";
import { resolve } from "path";

import Joi from "joi";

const environment = process.env.NODE_ENV ?? "development";

if (environment == "development")
  config({ path: resolve(__dirname, "../../../dev.env") });

if (environment == "production") config();

export const CUSTOM_JOI = Joi.extend(require("joi-phone-number"));

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY!;
export const PASSWORD_SECRET_KEY = process.env.PASSWORD_SECRET_KEY!;
