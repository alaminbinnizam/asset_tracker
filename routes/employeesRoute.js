import express from 'express';
import { requireSignIn } from '../middlewares/authMiddleware.js';
import ExpressFormidable from "express-formidable";
import {
    createEmployeesController,
    deleteEmployeeController,
    getAllEmployeesController,
    getSingleEmployeeController,
    updateEmployeeController
} from '../controllers/employeesController.js';



const router = express.Router()

//creating employee
router.post('/create-employee', requireSignIn, ExpressFormidable(), createEmployeesController);
// updating employee
router.put('/update-employee/:id', requireSignIn, ExpressFormidable(), updateEmployeeController);
// //get all employees
router.get('/getall-employees', requireSignIn, ExpressFormidable(), getAllEmployeesController);
// //get single employee
router.get('/getsingle-employee/:slug', requireSignIn, getSingleEmployeeController)
//get single category
router.delete('/delete-employee/:id', requireSignIn, deleteEmployeeController)

export default router