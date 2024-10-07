import mongoose, { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    school: {
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


export const Student = mongoose.model("Student", studentSchema)
