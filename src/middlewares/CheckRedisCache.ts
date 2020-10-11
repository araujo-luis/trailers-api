
import { ResponseEntity } from "@App/models/ResponseEntity";
import { NextFunction, Request, Response } from "express";
import { redisClient } from '../utils/RedisClient'
export const checkRedisCache = (req: Request, res: Response, next: NextFunction): void | ResponseEntity => {
    const { movieLink } = req.query;
    if (!movieLink) {
        return next();
    }

    const movieParts = movieLink.toString().split('/');
    const movieId = movieParts[movieParts.length - 1];

    redisClient.get(movieId, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        if (data)
            res.send(JSON.parse(data));
        else
            next();
    });
};