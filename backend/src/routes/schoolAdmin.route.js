import { Router } from "express";
import { loginSchoolAdmin } from "../controller/schoolAdmin.controller.js";

const router = Router()

router.route("/login").post(loginSchoolAdmin)

export default router


