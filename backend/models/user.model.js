import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    role: String,
    status: String,
    salary: Number,
    joinedAt: Date
})

const userModel = mongoose.model("USER", userSchema)

export default userModel;