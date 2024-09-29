import mongoose from "mongoose";

const schoolSchema = mongoose.Schema({

    schoolName: {
        type: String,
        required: true

    }
})

const School = mongoose.model("School", schoolSchema)

