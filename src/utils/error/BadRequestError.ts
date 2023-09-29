import { RequestError } from './RequestError';
import { ValidationError } from 'joi';

export class BadRequestError extends RequestError {
  statusCode = 400;
  private error;

  constructor(error: ValidationError) {
    super('Validation failed', 'ValidationError');
    this.error = error;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serialize() {
    return {
      code: this.getErrorCode(),
      detail: this.error.details.toString(),
    };
  }
}
