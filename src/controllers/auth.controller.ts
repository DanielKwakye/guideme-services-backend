import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
// import {isAuthenticated} from "../middlewares/auth.middleware.js";

const jwtSecret = process.env.JWT_SECRET || 'secret'

export const postLoginWithEmailAndPassword = (req: Request, res: Response, next: NextFunction) => {
    const token = jwt.sign({ email: req.body.email }, jwtSecret, { expiresIn: '1h' })
    res.status(200).json({ status: true, message: 'Login successful', token: token })
}

