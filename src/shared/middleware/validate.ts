import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { languageSchema } from "../schemas/language";

export const validate = (schema: ObjectSchema) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const langSchema = schema.concat(languageSchema);
    await langSchema.validateAsync(request.body);

    next();
  };
};
