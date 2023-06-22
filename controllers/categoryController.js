import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
import companiesModel from "../models/companiesModel.js";

//create category
export const createCategoryController = async (req, res) => {
    try {
        const { deviceCategory } = req.body
        if (!deviceCategory) {
            return res.status(401).send({
                message: 'Device Category name is Required'
            })
        }

        const existingCategory = await categoryModel.findOne({ deviceCategory });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: 'Category Already Exists'
            })
        }

        const category = await new categoryModel({
            deviceCategory,
            slug: slugify(deviceCategory),
            companies: req.user._id
        }).save();
        await companiesModel.updateOne({
            _id: req.user._id
        },{
            $push: {
                category: category._id
            }
        })
        res.status(201).send({
            success: true,
            message: 'New Category Created',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Category',
            error
        })
    }
}

//updating category
export const updateCategoryController = async (req, res) => {
    try {
        const { deviceCategory } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(id, {
            deviceCategory,
            slug: slugify(deviceCategory)
        }, {
            new: true
        });

        res.status(200).send({
            success: true,
            message: 'Category Updated Successfully',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while updating category',
            error
        })
    }
}
//get all category
export const getAllCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({}).populate('device').populate('companies');;
        res.status(200).send({
            success: true,
            message: 'All Categories list',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in categories',
            error
        })
    }
}
//single category 
export const getSingleCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({
            slug: req.params.slug
        }).populate('device').populate('companies');

        res.status(200).send({
            success: true,
            message: 'Get Single Category Successfully',
            category
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in single categories',
            error
        })
    }
}
//deleting category
export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'Category Deleted successfully',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleteing categories',
            error
        })
    }
}