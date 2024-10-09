import { Student } from "../modals/students.modal.js";
// Function to create a new student
const createStudent = async (req, res) => {
    try {
        const {
            fullName,
            schoolName,
            address,
            city,
            nationality,
            phoneNumber,
            email,
            class: studentClass,
            dateOfBirthCertificate,
            previousEducationDetails,
            parentGuardianDetails,
            transportRequired,
            additionalInformation
        } = req.body;

        // Validate required fields
        if (!fullName || !address || !city || !nationality || !phoneNumber || !email || !studentClass || !dateOfBirthCertificate || !transportRequired) {
            return res.status(400).json({ message: 'All required fields must be provided.' });
        }

        // Validate previous education details
        if (!previousEducationDetails || !previousEducationDetails.previousSchoolAttended || !previousEducationDetails.previousSchoolAddress || !previousEducationDetails.purposeOfLeaving) {
            return res.status(400).json({ message: 'All previous education details are required.' });
        }

        // Validate parent guardian details
        if (!parentGuardianDetails || !parentGuardianDetails.parentGuardianName || !parentGuardianDetails.rollNumber) {
            return res.status(400).json({ message: 'All parent guardian details are required.' });
        }

        // Validate additional information
        if (!additionalInformation || !additionalInformation.teacherCertificate || !additionalInformation.physicallyHandicapped || !additionalInformation.classId || !additionalInformation.sectionId || !additionalInformation.dormitoryRequired || !additionalInformation.house || !additionalInformation.dormitoryRoomNumber) {
            return res.status(400).json({ message: 'All additional information fields are required.' });
        }

        // Create a new student instance
        const newStudent = new Student({
            fullName,
            schoolName,
            address,
            city,
            nationality,
            phoneNumber,
            email,
            class: studentClass,
            dateOfBirthCertificate,
            previousEducationDetails,
            parentGuardianDetails,
            transportRequired,
            additionalInformation
        });

        // Save the student to the database
        await newStudent.save();

        // Send a success response
        return res.status(201).json({ message: 'Student created successfully.', student: newStudent });
    } catch (error) {
        console.error('Error creating student:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};


// Function to remove a student
const removeStudent = async (req, res) => {
    try {
        const { studentId } = req.params;

        // Validate that studentId is provided
        if (!studentId) {
            return res.status(400).json({ message: 'Student ID is required.' });
        }

        // Find and remove the student from the database
        const deletedStudent = await Student.findOneAndDelete({ studentId });

        // Check if a student was found and deleted
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found.' });
        }

        // Send success response
        return res.status(200).json({ message: 'Student removed successfully.', student: deletedStudent });
    } catch (error) {
        console.error('Error removing student:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};


export { createStudent, removeStudent };
