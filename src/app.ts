import 'express-async-errors';

import express, { Application } from 'express';
import { errorMiddleware } from 'middleware/errorMiddleware';
import { notFoundMiddleware } from 'middleware/notFoundMiddleware';
import { rootRouter } from 'routes';

const app: Application = express();

app.use(express.json());
app.use('/', rootRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export { app };
