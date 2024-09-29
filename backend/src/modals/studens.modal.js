import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    schoolName: {
        type: Schema.Types.ObjectId,
        ref: "School"
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
    },
    password: {
        type: String,
    }

})