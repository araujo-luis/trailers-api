import { checkRedisCache } from '../middlewares/CheckRedisCache';
import { Router } from 'express';
import * as TrailerController from '../controllers/TrailerController';

const TrailerRoute = Router();

TrailerRoute.get('/', checkRedisCache, TrailerController.findTrailer);
TrailerRoute.all('/', TrailerController.methodNotAllowed);

export default TrailerRoute;