import { Request, Response } from 'express';
import { calculateMessage } from 'services';

export const getRoot = (req: Request, res: Response) => {
  const { name } = req.query;

  return res.status(200).json({
    msg: calculateMessage(name?.toString()),
  });
};
