import 'express-async-errors';
import express, { Application } from 'express';
import { rootRouter } from 'controllers';

const app: Application = express();

app.use(express.json());
app.use('/', rootRouter);
export { app };
