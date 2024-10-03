import mongoose from "mongoose";

const schoolSchema = mongoose.Schema({

    schoolName: {
        type: String,
        required: true

    }
})

export const School = mongoose.model("School", schoolSchema)


