import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    devicename: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    deviceSpecification: {
        type: String,
        required: true
    },
    deviceSerialNum: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
        required: true
    },
    companies: {
        type: mongoose.Types.ObjectId,
        ref: "companies"
    },
    employee: { 
        type: mongoose.ObjectId,  
        ref: 'Employees',
        required: true
    },
    // status: {
    //     type: String,
    //     default: 'Not Process',
    //     enum: ["Not Process", "Handed", "Repairing"]
    // }
}, { timestamps: true });

export default mongoose.model('Device', deviceSchema)