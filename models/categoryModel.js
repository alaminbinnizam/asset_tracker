import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    deviceCategory: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase: true
    },
    companies: [{
        type: mongoose.Types.ObjectId,
        ref: "companies"
    }],
})

export default mongoose.model('Category', categorySchema)