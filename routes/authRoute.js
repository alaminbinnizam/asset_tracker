import express from "express";
import {
    forgotPasswordController,
    loginController,
    registerController,
    testController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//register POST method
router.post('/register', registerController);

//login
router.post('/login', loginController)

//forgot password
router.post('/forgot-password', forgotPasswordController)

//testing porpose
router.get('/test', requireSignIn, isAdmin, testController)

//protected user route 
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({
        ok: true
    })
})
//protected admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({
        ok: true
    })
})
export default router