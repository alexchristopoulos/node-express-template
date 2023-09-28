import joi from 'joi';

type Config = {
  SERVER_PORT?: number;
  SERVER_HOST?: string;
};

export const { SERVER_PORT = 8080, SERVER_HOST = 'localhost' }: Config =
  process.env as Config;

const result = joi
  .object({
    SERVER_PORT: joi.number().integer(),
    SERVER_HOST: joi.string(),
  })
  .validate({
    SERVER_PORT,
    SERVER_HOST,
  });

if (result.error) {
  console.log(JSON.stringify(result.error.details));
  process.exit(1);
}
