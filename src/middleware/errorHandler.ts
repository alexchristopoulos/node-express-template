import { RequestError } from '../utils';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { code, status, message } =
    err instanceof RequestError
      ? {
          code: err.getCode(),
          status: err.getStatus(),
          message: err.message,
        }
      : {
          code: 'UnknownError',
          status: 522,
          message: 'Unknown Error Occurred',
        };

  res.status(status).json({
    code,
    message,
  });
};
