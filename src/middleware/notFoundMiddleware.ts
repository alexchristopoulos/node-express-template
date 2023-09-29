import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from 'utils/error/NotFoundError';

export const notFoundMiddleware = (
  _req: Request,
  _res: Response,
  _next: NextFunction,
) => {
  throw new NotFoundError('Resource not found', 'NotFound');
};
