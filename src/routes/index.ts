
import { Router } from 'express';
import TrailerRoute from './TrailerRoute';

const router = Router();

router.use('/trailer', TrailerRoute);

export default router;