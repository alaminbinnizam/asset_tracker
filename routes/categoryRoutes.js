import express from 'express';
import { requireSignIn } from '../middlewares/authMiddleware.js';
import {
    getAllCategoryController,
    createCategoryController,
    updateCategoryController,
    getSingleCategoryController,
    deleteCategoryController
}
    from '../controllers/categoryController.js';

const router = express.Router()

//creating category
router.post('/create-category', requireSignIn, createCategoryController);
//updating category
router.put('/update-category/:id', requireSignIn, updateCategoryController);
//get all category
router.get('/getall-category',requireSignIn, getAllCategoryController);
//get single category
router.get('/getsingle-category/:slug', requireSignIn, getSingleCategoryController)
//get single category
router.get('/delete-category/:id', requireSignIn, deleteCategoryController)

export default router