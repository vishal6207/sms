import mongoose from "mongoose"

const parentSchema = new mongoose.Schema({
    parentName: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true
    },
    schoolName: {
        type: Schema.Types.ObjectId,
        ref: "School"
    },
    contactNo: {
        type: String
    },
    password: {
        type: String,
    }
})

export const Parent = mongoose.modal("Parent", parentSchema)