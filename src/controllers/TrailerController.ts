import { Request, Response } from 'express';

export const findTrailer = (req: Request, res: Response): void => {
    res.status(200).json("Hellow World")

}
