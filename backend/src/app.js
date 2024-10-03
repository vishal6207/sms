import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();

//Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// Applicatoin routes
import schoolAdminRouter from "./routes/schoolAdmin.route.js";
import adminRouter from "./routes/admin.route.js"
import studentRouter from "./routes/student.route.js"
import teacherRouter from "./routes/teacher.route.js"
import parentRouter from "./routes/parent.route.js"
import userRouter from "./routes/users.route.js"

//Common route for login 

app.use("/api/v1/users", userRouter)


//Routes for all roles : Admin, SchoolAdmin, Teacher, Student, Parent
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/school-admin", schoolAdminRouter)
app.use("/api/v1/student", studentRouter)
app.use("/api/v1/teacher", teacherRouter)
app.use("/api/v1/parent", parentRouter)



export { app }