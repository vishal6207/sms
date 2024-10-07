import mongoose, { Schema } from "mongoose";

const teacherSchema = mongoose.Schema({
    teacherName: {
        type: String,
        required: true
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: "School"
    }
})

export const Teacher = mongoose.model("Teacher", teacherSchema)
