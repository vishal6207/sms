import expressAsyncHandler from "express-async-handler"



const loginSchoolAdmin = expressAsyncHandler(async (req, res) => {
    res.send("school admin login")
})

export { loginSchoolAdmin }