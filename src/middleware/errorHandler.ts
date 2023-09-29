import { RequestError } from 'utils/error/RequestError';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { httpStatusCode, message, errorCode } =
    err instanceof RequestError
      ? {
          httpStatusCode: err.getStatusCode(),
          message: err.message,
          errorCode: err.getErrorCode(),
        }
      : {
          httpStatusCode: 522,
          message: 'Unknown Error Occurred',
          errorCode: 'UnknownError',
        };

  res.status(httpStatusCode).json({
    message,
    errorCode,
  });
};
