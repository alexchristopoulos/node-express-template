import { getRoot } from 'controllers/root';
import { IRouter, Router } from 'express';

const router: IRouter = Router();

router.get('/', getRoot);

export { router };
