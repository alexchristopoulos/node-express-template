import { Request, Response } from 'express';
import { Schema } from 'joi';
import { BadRequestError } from 'utils/error/BadRequestError';

export const validateRequest =
  async (schema: Schema, data?: Record<string | number | symbol, unknown>) =>
  async (req: Request, res: Response) => {
    try {
      await schema.validateAsync(data ? data : req.body);
    } catch (err) {
      throw new BadRequestError('Bad request', 'ValidationError');
    }
  };
