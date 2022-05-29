import { NextFunction, Request, Response } from "express";
import { LOCALIZATION_LANGUAGE } from "../types/enums";

export const language = (request: Request, _: Response, next: NextFunction) => {
  const language = request.headers["accept-language"];

  request.body.language =
    language == LOCALIZATION_LANGUAGE.ENGLISH ||
    language == LOCALIZATION_LANGUAGE.ARABIC
      ? language
      : LOCALIZATION_LANGUAGE.ENGLISH;

  next();
};
