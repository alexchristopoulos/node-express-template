import { RequestError } from './RequestError';

export class BadRequestError extends RequestError {
  statusCode = 400;

  constructor(message: string, errorCode: string) {
    super(message, errorCode);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
