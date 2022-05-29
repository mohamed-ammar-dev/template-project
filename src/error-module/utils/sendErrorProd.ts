import { Request, Response } from "express";
import { getLocalizedErrorMessage } from "./getLocalizedErrorMessage";

export const sendErrorProd = (error: any, res: Response, req: Request) => {
  // Operational, trusted error: send message to client
  if (error.isOperational) {
    const message = getLocalizedErrorMessage(error.message, req.body.language);

    return res.status(error.statusCode).send({
      status: error.status,
      error: {
        statusCode: error.statusCode,
        message,
      },
    });
  }

  // Programming or other unknown error: don't leak error details'

  // 1) Log error
  console.error(`ERROR: `, error);

  // 2) Send generic message
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
};
