import { Request, Response } from 'express';
import { Schema } from 'joi';
import { RequestError } from 'utils/error';

export const validateRequest =
  async (schema: Schema) => async (req: Request, res: Response) => {
    try {
      await schema.validateAsync(req.body);
    } catch (err) {
      throw new RequestError(400, {
        code: 'ValidationError',
        message: 'Bad Request',
      });
    }
  };
