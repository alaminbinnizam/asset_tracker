import {
    comparePassword,
    hashPassword
} from "../helpers/authHelper.js";
// import authMiddleware from '../middlewares/authMiddleware.js'
import companiesModel from "../models/companiesModel.js";
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
    try {
        const { company, email, password, phone, address, answer } = req.body;
        //validations
        if (!company) {
            return res.send({ message: "company Name is Required" });
        }
        if (!email) {
            return res.send({ message: "Email is Required" });
        }
        if (!password) {
            return res.send({ message: "Password is Required" });
        }
        if (!phone) {
            return res.send({ message: "Phone no is Required" });
        }
        if (!address) {
            return res.send({ message: "Address is Required" });
        }
        if (!answer) {
            return res.send({ message: "Answer is Required" });
        }
        //check user
        const exisitingUser = await companiesModel.findOne({ email });
        //exisiting user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Registered please login",
            });
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new companiesModel({
            company,
            email,
            phone,
            address,
            password: hashedPassword,
            answer,
        }).save();

        res.status(201).send({
            success: true,
            message: "Company Registered Successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Errro in Registeration",
            error,
        });
    }
};

//login controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }
        //check user
        const user = await companiesModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registerd",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                _id: user._id,
                company: user.company,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};
//for testing
export const testController = (req, res) => {
    try {
        res.send('Protected Route');
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
}

//forgotPasswordController
export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;
        if (!email) {
            res.status(400).send({
                message: 'Email is required'
            })
        }
        if (!answer) {
            res.status(400).send({
                message: 'answer is required'
            })
        }
        if (!newPassword) {
            res.status(400).send({
                message: 'New Password is required'
            })
        }

        //check email or answer

        const user = await companiesModel.findOne({ email, answer });

        if (!user) {
            res.status(404).send({
                success: false,
                message: 'Wrong Email or Answer'
            })
        }

        const hashed = await hashPassword(newPassword)
        await companiesModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            success: true,
            message: 'Password reset successfully'
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong',
            error
        })
    }
}
