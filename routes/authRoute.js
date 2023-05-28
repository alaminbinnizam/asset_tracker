import express from "express";
import {
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

//testing porpose
router.get('/test', requireSignIn, isAdmin, testController)

//protected route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({
        ok: true  
    })
})

export default router