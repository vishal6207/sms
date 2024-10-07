import mongoose, { Schema } from "mongoose"


const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
    },

    password: {
        type: String
    },
})

export const Admin = mongoose.model("Admin", adminSchema)

