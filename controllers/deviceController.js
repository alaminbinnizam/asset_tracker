import slugify from "slugify";
import deviceModel from "../models/deviceModel.js";
import companiesModel from "../models/companiesModel.js";


export const createDeviceController = async (req, res) => {
    try {
        const { devicename, slug, deviceSpecification, deviceSerialNum, category, employee } = req.fields;
        //validation
        switch (true) {
            case !devicename:
                return res.status(500).send({ error: 'Device Name is required' });

            case !deviceSpecification:
                return res.status(500).send({ error: 'Specification is required' });

            case !deviceSerialNum:
                return res.status(500).send({ error: 'Device Serial Number is required' });

            case !category:
                return res.status(500).send({ error: 'Category is required' });
                
            case !employee:
                return res.status(500).send({ error: 'employee is required' });


            // case !status:
            //     return res.status(500).send({ error: 'Status is required' });

        }

        const devices = new deviceModel({ ...req.fields, slug: slugify(devicename), companies: req.user._id });
        //saving device data
        const device = await devices.save();
        await companiesModel.updateOne({
            _id: req.user._id
        },{
            $push: {
                device: device._id
            }
        })
       

        res.status(201).send({
            success: true,
            message: 'Device Created Successfully',
            device
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in creating product',
            error
        })
    }
}

export const getAllDeviceController = async (req, res) => {
    try {
        const device = await deviceModel
            .find({})
            .populate('category')
            .populate('companies')
            .sort({ createdAt: -1 });
        res.send({
            success: true,
            totalCount: device.length,
            message: 'All Device',
            device
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting Device',
            error
        })
    }
}

export const getSingleDeviceController = async (req, res) => {
    try {
        const device = await deviceModel
            .findOne({ slug: req.params.slug })
            .populate('category')
            .populate('companies')
        res.status(200).send({
            success: true,
            message: 'Single Device fetched',
            device
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting single Device',
            error
        })
    }
}

export const deleteDeviceController = async (req, res) => {
    try {
        const device = await deviceModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            message: 'Device deleted succesfully',
            device
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleting Device',
            error
        })
    }
}

export const updateDeviceController = async (req, res) => {
    try {
        const { devicename, slug, deviceSpecification, deviceSerialNum, category } =
            req.fields;
        //validation
        switch (true) {
            case !devicename:
                return res.status(500).send({ error: "Device Name is Required" });
            case !deviceSpecification:
                return res.status(500).send({ error: "Device Specification is Required" });
            case !deviceSerialNum:
                return res.status(500).send({ error: "Price is Required" });
            case !category:
                return res.status(500).send({ error: "Category is Required" });
        }

        const device = await deviceModel.findByIdAndUpdate(
            req.params.id,
            { ...req.fields, slug: slugify(devicename) },
            { new: true }
        );

        await device.save();
        res.status(201).send({
            success: true,
            message: "Device Updated Successfully",
            device,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updating Device",
        });
    }
}