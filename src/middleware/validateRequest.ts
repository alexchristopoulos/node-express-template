import { NextFunction, Request, Response } from 'express';
import { Schema, ValidationError } from 'joi';
import { BadRequestError } from 'utils/error/BadRequestError';

export const validateRequest =
  async (schema: Schema, data?: Record<string | number | symbol, unknown>) =>
  async (req: Request, _res: Response, _next: NextFunction) => {
    try {
      await schema.validateAsync(data ? data : req.body);
    } catch (err) {
      throw new BadRequestError(err as ValidationError);
    }
  };
