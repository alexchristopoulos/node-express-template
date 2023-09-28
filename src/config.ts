import joi from 'joi';

export const config = {
  SERVER_PORT: process.env.SERVER_PORT || 8080,
};

const result = joi
  .object({
    SERVER_PORT: joi.number().integer(),
  })
  .validate(config);

if (result.error) {
  console.log(JSON.stringify(result.error.details));
  process.exit(1);
}
