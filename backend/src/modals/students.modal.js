import mongoose, { Schema } from "mongoose";

const PreviousEducationDetailsSchema = new Schema({
    previousSchoolAttended: {
        type: String,
        required: true
    },
    previousSchoolAddress: {
        type: String,
        required: true
    },
    purposeOfLeaving: {
        type: String,
        required: true
    }
});

const ParentGuardianDetailsSchema = new Schema({
    parentGuardianName: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true
    }
});

const AdditionalInformationSchema = new Schema({
    teacherCertificate: {
        type: String,
        required: true
    },
    physicallyHandicapped: {
        type: String,
        required: true
    },
    classId: {
        type: String,
        required: true
    },
    sectionId: {
        type: String,
        required: true
    },
    dormitoryRequired: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
    dormitoryRoomNumber: {
        type: String,
        required: true
    },
    anyAdditionalInformation: {
        type: String,
        required: false
    }
});

const StudentSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    schoolName: {
        type: Schema.Types.ObjectId,
        ref: "School"
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    dateOfBirthCertificate: {
        type: Date,
        required: true
    },
    previousEducationDetails: PreviousEducationDetailsSchema,
    parentGuardianDetails: ParentGuardianDetailsSchema,
    transportRequired: {
        type: String,
        required: true
    },
    additionalInformation: AdditionalInformationSchema
});

export const Student = mongoose.model('Student', StudentSchema);


