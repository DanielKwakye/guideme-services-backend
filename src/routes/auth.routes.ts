import { Router, Request, Response, NextFunction } from 'express'
import {postLoginWithGoogle} from "../controllers/auth.controller.js";
import passport from "passport";


const router = Router()

router.get('/login/federated/google', passport.authenticate('google'));
router.post('/login-google', postLoginWithGoogle)
router.post('/login-linkedIn', postLoginWithGoogle)

router.post('/update-basic-info', (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({ status: true, message: 'Register successful' })
})


export default router