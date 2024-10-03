import expressAsyncHandler from "express-async-handler"
import { ApiError } from "../utils/ApiError.js"
const loginUser = expressAsyncHandler(async (req, res) => {

    const { name, passowrd } = req.body

    if (!name && !passowrd) {
        throw new ApiError(400, 'All fields are required')
    }

    const exitedUser = await
        res.send("helo")

})

export { loginUser }