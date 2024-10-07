import mongoose, { Schema } from "mongoose";

const schoolAdminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: "School"
    },
    password: {
        type: String,
        required: true
    }
})


export const SchoolAdmin = mongoose.model("SchoolAdmin", schoolAdminSchema)