import { Request, Response } from 'express';
import { getTrailers } from '../services/TrailerService';

export const findTrailer = async (req: Request, res: Response): Promise<void> => {
    const { movieLink } = req.query;
    try {
        if (movieLink) {
            const trailers = await getTrailers(movieLink.toString());
            res.status(200).json(trailers)
        }

    } catch (error) {
        res.status(500).json("Error" + error)
    }

}
