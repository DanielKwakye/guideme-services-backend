import { Router, Request, Response, NextFunction } from 'express'
import {postLoginWithGoogle} from "../controllers/auth.controller.js";


const router = Router()

router.post('/login-google', postLoginWithGoogle)
router.post('/login-linkedIn', postLoginWithGoogle)

router.post('/update-basic-info', (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({ status: true, message: 'Register successful' })
})


export default router