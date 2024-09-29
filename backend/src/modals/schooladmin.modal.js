import mongoose, { Schema } from "mongoose";

const schoolAdminSchema = mongoose.Schema({
    schoolAdminName: {
        type: String,
        required: true
    },
    schoolName: {
        type: Schema.Types.ObjectId,
        ref: "School"
    },
    contactNo: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
})


export const SchoolAdmin = mongoose.modal("SchoolAdmin", schoolAdminSchema)