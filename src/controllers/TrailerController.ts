import { NextFunction, Request, Response } from 'express';
import { ResponseEntity } from '../models/ResponseEntity';
import { getTrailers } from '../services/TrailerService';
import { BadRequest, MethodNotAllowed } from '../utils/ErrorHandler';

export const findTrailer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { movieLink } = req.query;
    try {
        const response: ResponseEntity = {};

        if (!movieLink)
            throw new BadRequest('movieLink query param is required');


        const trailers = await getTrailers(movieLink.toString());
        response.code = 200;
        response.message = 'Success';
        response.data = trailers;
        res.status(response.code).json(response)

    } catch (error) {
        next(error);
    }

}

export const methodNotAllowed = (req: Request, res: Response, next: NextFunction): void => {
    next(new MethodNotAllowed('Method not Allowed'));
}