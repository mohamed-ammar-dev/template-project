import { LOCALIZATION_LANGUAGE } from "../../shared/types/enums";
import { CUSTOM_ERROR } from "../types/customErrors";
import { errorMessage } from "../types/errorsMessage";

export function getLocalizedErrorMessage(
  messageKey: CUSTOM_ERROR,
  language: LOCALIZATION_LANGUAGE
) {
  return errorMessage[language][messageKey];
}
