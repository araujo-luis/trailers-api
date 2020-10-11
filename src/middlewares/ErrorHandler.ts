import { NextFunction, Request, Response } from "express";
import { ResponseEntity } from "../models/ResponseEntity";

import { GeneralError, NotFound } from '../utils/ErrorHandler';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    const response: ResponseEntity = {
        message: err.message
    }

    if (err instanceof GeneralError) {
        response.code = err.getCode();
        return res.status(response.code).json(response);
    }

    response.code = 500;
    return res.status(response.code).json(response);
}

export const notFound = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    const notFoundObject = new NotFound('Route not found');

    const response: ResponseEntity = {
        code: notFoundObject.getCode(),
        message: notFoundObject.message
    }

    return res.status(response.code || 404).json(response);
}
