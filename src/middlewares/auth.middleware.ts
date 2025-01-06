import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(' ')[1];
    if(!token) {
        throw  new Error('Authorization required');
    }
    const decodedToken = jwt.verify(token, '');
    if(!decodedToken) {
        throw new Error(`Token not found`);
    }

    // req.body.userId = decodedToken;
    next()

}