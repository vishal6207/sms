import expressAsyncHandler from "express-async-handler";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { SchoolAdmin } from "../modals/schooladmin.modal.js";
import { Student } from "../modals/students.modal.js";
import { Teacher } from "../modals/teacher.modal.js";
import { Parent } from "../modals/parent.modal.js";
import { School } from "../modals/school.modal.js";

// User Modal Mapping
const UserModal = {
    admin: SchoolAdmin,
    student: Student,
    teacher: Teacher,
    parent: Parent,
};

const generateAccessAndRefereshTokens = async (userId) => {
}


const loginUser = expressAsyncHandler(async (req, res) => {
    const { username, password, role } = req.body;

    // Validate input
    if (!username || !password || !role) {
        throw new ApiError(400, "All fields are required (name, password, role)");
    }

    // Validate role
    if (!UserModal[role]) {
        throw new ApiError(400, "Invalid role provided");
    }

    // Query the correct user model based on role
    const userModel = UserModal[role];
    const existingUser = await userModel.findOne({
        username: username,
        password: password
    }).populate('school').select("-password")


    console.log(existingUser)


    // Handle case when no user is found
    if (!existingUser) {
        throw new ApiError(401, "Invalid credentials or user not found");
    }

    // Success Response
    return res.status(200).json(
        new ApiResponse(200, existingUser, "Login successful")
    );
});

export { loginUser };
