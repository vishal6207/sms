import mongoose, { Schema } from "mongoose";

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    schoolName: {
        type: Schema.Types.ObjectId,
        ref: "School"
    }
})

export const Teacher = mongoose.model("Teacher", teacherSchema)
