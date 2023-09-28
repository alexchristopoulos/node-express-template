import { getRoot } from 'controllers/root';
import { Router, IRouter } from 'express';

const router: IRouter = Router();

router.get('/', getRoot);

export { router };
