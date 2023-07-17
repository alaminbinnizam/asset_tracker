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

//creating device
router.post('/create-device', requireSignIn, ExpressFormidable(), createDeviceController);
// updating device
router.put('/update-device/:id', requireSignIn, ExpressFormidable(), updateDeviceController);
// //get all device
router.get('/getall-device', requireSignIn,ExpressFormidable(), getAllDeviceController);
// //get single device
router.get('/getsingle-device/:slug', requireSignIn, getSingleDeviceController)
//get single device
router.delete('/delete-device/:id', requireSignIn, deleteDeviceController)

export default router