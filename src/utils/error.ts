type ErrorContext = { code: string; message: string };

export class RequestError extends Error {
  private code: string;
  private status: number;

  constructor(status: number, { code, message }: ErrorContext) {
    super(message);

    this.code = code;
    this.status = status;
    this.message = message;

    Object.setPrototypeOf(this, RequestError.prototype);
    Error.captureStackTrace(this);
  }

  getCode() {
    return this.code;
  }

  getStatus() {
    return this.status;
  }
}
