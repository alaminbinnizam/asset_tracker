import express from 'express';
import { requireSignIn } from '../middlewares/authMiddleware.js';
import {
    createDeviceController,
    deleteDeviceController,
    getAllDeviceController,
    getSingleDeviceController,
    updateDeviceController
}
 from '../controllers/deviceController.js';
import ExpressFormidable from "express-formidable";



const router = express.Router()

//creating category
router.post('/create-device', requireSignIn, ExpressFormidable(), createDeviceController);
// updating category
router.put('/update-device/:id', requireSignIn, ExpressFormidable(), updateDeviceController);
// //get all category
router.get('/getall-device', requireSignIn,ExpressFormidable(), getAllDeviceController);
// //get single category
router.get('/getsingle-device/:slug', requireSignIn, getSingleDeviceController)
//get single category
router.delete('/delete-device/:id', requireSignIn, deleteDeviceController)

export default router