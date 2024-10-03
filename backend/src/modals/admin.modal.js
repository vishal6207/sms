import mongoose, { Schema } from "mongoose"


const adminSchema = new mongoose.Schema({
    name: {
        type: String
    },

    password: {
        type: String
    },

    schoolName: {
        type: Schema.Types.ObjectId,
        ref: "School"
    },
})

export const Admin = mongoose.model("Admin", adminSchema)

