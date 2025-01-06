import { Router, Request, Response, NextFunction } from 'express'
import {postLoginWithEmailAndPassword} from "../controllers/auth.controller.js";


const router = Router()

router.post('/login', postLoginWithEmailAndPassword)

router.post('/register', (req: Request, res: Response, next) => {
    res.status(201).json({ status: true, message: 'Register successful' })
})


export default router