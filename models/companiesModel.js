import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    employee: [{
      type: mongoose.Types.ObjectId,
      ref: "Employee"
    }],
    category: [{
      type: mongoose.Types.ObjectId,
      ref: "Category"
    }],
    device: [{
      type: mongoose.Types.ObjectId,
      ref: "Device"
    }],
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("companies", userSchema);