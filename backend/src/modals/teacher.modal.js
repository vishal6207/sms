import mongoose, { Schema } from "mongoose";

const teacherSchema = mongoose.Schema({
    teacherName: {
        type: String,
        required: true
    },
    schoolName: {
        type: Schema.Types.ObjectId,
        ref: "School"
    }
})