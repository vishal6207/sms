import { Router } from 'express'
import { loginTeacher } from '../controller/teacher.controller.js'

const router = Router()


router.route("/login").post(loginTeacher)

export default router