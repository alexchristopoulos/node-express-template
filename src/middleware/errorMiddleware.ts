import { RequestError } from 'utils/error/RequestError';
import { Request, Response, NextFunction } from 'express';
import { UnknownError } from 'utils/error/UnknownError';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof RequestError)
    return res.status(err.getStatusCode()).json(err.serialize());
  else {
    const unknownError = new UnknownError();
    return res
      .status(unknownError.getStatusCode())
      .json(unknownError.serialize());
  }
};
