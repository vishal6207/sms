import { Router } from "express";
import { loginParent } from "../controller/parent.controller.js";

const router = Router()

router.route("/login").post(loginParent)

export default router