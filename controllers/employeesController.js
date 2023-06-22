import slugify from "slugify";
import employeesModel from "../models/employeesModel.js";
import companiesModel from "../models/companiesModel.js";


export const createEmployeesController = async (req, res) => {
    try {
        const { employeeId, name, slug, email, position, department, device, address } = req.fields;
        //validation
        switch (true) {
            case !employeeId:
                return res.status(500).send({ error: 'Device Name is required' });

            case !name:
                return res.status(500).send({ error: 'Employee Name is required' });

            case !email:
                return res.status(500).send({ error: 'Employee Email is required' });

            case !position:
                return res.status(500).send({ error: 'Employee Position is required' });

            case !department:
                return res.status(500).send({ error: 'Employee Department is required' });

            case !device:
                return res.status(500).send({ error: 'Device is required' });

            case !address:
                return res.status(500).send({ error: 'Employee Address is required' });

        }

        const employee = new employeesModel({ ...req.fields, slug: slugify(name), companies: req.user._id });
        //saving device data

        //one to many relationship
       const employees =  await employee.save();
        await companiesModel.updateOne({
            _id: req.user._id
        },{
            $push: {
                employee: employees._id
            }
        })

        res.status(201).send({
            success: true,
            message: 'Employee Created Successfully',
            employees
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in creating Employee',
            error
        })
    }
}

export const getAllEmployeesController = async (req, res) => {
    try {
        const employee = await employeesModel
            .find({})
            .populate('device')
            .populate('companies')
            .sort({ createdAt: -1 });
        res.send({
            success: true,
            totalCount: employee.length,
            message: 'All employees',
            employee
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting Employee',
            error
        })
    }
}

export const getSingleEmployeeController = async (req, res) => {
    try {
        const employee = await employeesModel
            .findOne({ slug: req.params.slug })
            .populate('device')
            .populate('companies')
        res.status(200).send({
            success: true,
            message: 'Single employee fetched',
            employee
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting single employee',
            error
        })
    }
}

// export const deleteDeviceController = async (req, res) => {
//     try {
//         const device = await deviceModel.findByIdAndDelete(req.params.id);
//         res.status(200).send({
//             success: true,
//             message: 'Device deleted succesfully',
//             device
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: 'Error in deleting Device',
//             error
//         })
//     }
// }

export const updateEmployeeController = async (req, res) => {
    try {
        const { employeeId, name, slug, email, position, department, device, address } =
            req.fields;
        //validation
        switch (true) {
            case !employeeId:
                return res.status(500).send({ error: 'Device Name is required' });

            case !name:
                return res.status(500).send({ error: 'Employee Name is required' });

            case !email:
                return res.status(500).send({ error: 'Employee Email is required' });

            case !position:
                return res.status(500).send({ error: 'Employee Position is required' });

            case !department:
                return res.status(500).send({ error: 'Employee Department is required' });

            case !device:
                return res.status(500).send({ error: 'Device is required' });

            case !address:
                return res.status(500).send({ error: 'Employee Address is required' });
        }

        const employee = await employeesModel.findByIdAndUpdate(
            req.params.id,
            { ...req.fields, slug: slugify(name) },
            { new: true }
        );

        await employee.save();
        res.status(201).send({
            success: true,
            message: "Employee Updated Successfully",
            employee,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in employee Device",
        });
    }
}
// deleting employee
export const deleteEmployeeController = async (req, res) => {
    try {
        const employee = await employeesModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            message: 'Employee deleted succesfully',
            employee
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleting Employee',
            error
        })
    }
}