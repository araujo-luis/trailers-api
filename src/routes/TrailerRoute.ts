import { Router } from 'express';
import * as TrailerController from '../controllers/TrailerController';

const TrailerRoute = Router();

TrailerRoute.get('/', TrailerController.findTrailer);

export default TrailerRoute;