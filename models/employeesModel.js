import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        employeeId: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        position: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        device: {
            type: mongoose.ObjectId,
            ref: 'Device',
            required: true
        },
        address: {
            type: {},
            required: true,
        },
        companies: {
            type: mongoose.Types.ObjectId,
            ref: "companies"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);