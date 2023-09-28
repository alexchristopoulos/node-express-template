import { NextFunction, Request, Response } from 'express';

export const getRoot = (req: Request, res: Response, next: NextFunction) =>
  res.sendStatus(200);
