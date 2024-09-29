import { Router } from "express";
import { loginStudent } from "../controller/student.controller.js";

const router = Router()

router.route("/login").post(loginStudent)


export default router