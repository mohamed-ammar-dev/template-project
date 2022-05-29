import { MESSAGE } from "../localization/enums";
import { message } from "../localization/message";
import { LOCALIZATION_LANGUAGE } from "../types/enums";

export function localizedMessage(
  data: any,
  messageKey: MESSAGE,
  language: LOCALIZATION_LANGUAGE
) {
  return Object.assign(
    {
      message: message[language ?? LOCALIZATION_LANGUAGE.ENGLISH][messageKey],
    },
    data
  );
}
