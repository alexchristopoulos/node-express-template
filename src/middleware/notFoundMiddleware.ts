import { NotFoundError } from 'utils/error/NotFoundError';

export const notFoundMiddleware = () => {
  throw new NotFoundError('Resource not found', 'NotFound');
};
