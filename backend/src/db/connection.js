import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log("Mongodb connected ! Host: ==> ", connectionInstance.connection.host)
    } catch (error) {
        console.log("Mongodb connection Failed !", error)
    }
}