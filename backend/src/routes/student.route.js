import { Router } from 'express';
import { createStudent, removeStudent } from '../controller/student.controller.js';

const router = Router();

// Route for creating a new student
router.route('/create').post(createStudent);

// Route for removing a student
router.route('/:studentId').delete(removeStudent);

export default router;
