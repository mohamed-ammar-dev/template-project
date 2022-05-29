import { CUSTOM_JOI } from "../../../../config/constants";

export const phoneSchema = CUSTOM_JOI.object({
  phone: CUSTOM_JOI.string().phoneNumber().required(),
});
