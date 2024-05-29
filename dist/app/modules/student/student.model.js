"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
// const userNameSchema = new Schema<UserName>({
//   firstName: { type: String, required: true },
//   middleName: { type: String },
//   lastName: { type: String, required: true },
// });
// const guardianSchema = new Schema<Guardian>({
//   fatherName: { type: String, required: true },
//   fatherOccupation: { type: String, required: true },
//   fatherContactNo: { type: String, required: true },
//   motherName: { type: String, required: true },
//   motherOccupation: { type: String, required: true },
//   motherContactNo: { type: String, required: true },
// });
// const localGuardianSchema = new Schema<LocalGuardian>({
//   name: { type: String, required: true },
//   occupation: { type: String, required: true },
//   contactNo: { type: String, required: true },
//   address: { type: String, required: true },
// });
// const studentSchema = new Schema<Student>({
//   id: { type: String, required: true },
//   name: {
//     type: userNameSchema,
//     required: true
//   },
//   email: { type: String, required: true },
//   gender: {
//     type: String,
//     enum: ['male', 'female'],
//     required: true
//   },
//   dateOfBirth: { type: String, required: true },
//   contractNo: { type: String, required: true },
//   emergencyNo: { type: String, required: true },
//   bloodGroup: {
//     type: String,
//     enum: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
//   },
//   presentAddress: { type: String, required: true },
//   permanentAddress: { type: String, required: true },
//   guardian: {
//     type: guardianSchema,
//     required: true
//   },
//   localGuardian: {
//     type: localGuardianSchema,
//     required: true
//   },
//   profileImage: { type: String },
//   isActive: {
//     type: String,
//     enum: ['active', 'block'],
//     default: "active"
//   },
// });
const userNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: [true, "First Name is required"] },
    middleName: { type: String },
    lastName: { type: String, required: [true, "Last Name is required"] },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: [true, "Fathers Name is required"] },
    fatherOccupation: { type: String, required: [true, "Fathers occupation is required"] },
    fatherContactNo: { type: String, required: [true, "Fathers contactNo is required"] },
    motherName: { type: String, required: [true, "mother name is required"] },
    motherOccupation: { type: String, required: [true, "mother occupation is required"] },
    motherContactNo: { type: String, required: [true, "mother contact is required"] },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Local guardian name is required"] },
    occupation: { type: String, required: [true, "local guardian occupation is required"] },
    contactNo: { type: String, required: [true, "local guardian contactno is required"] },
    address: { type: String, required: [true, "local guardian address is required"] },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String, required: [true, "Student id is required"], unique: true },
    name: {
        type: userNameSchema,
        required: [true, "Name is required"]
    },
    email: { type: String, required: [true, "Email is required"] },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: "Gender is required"
        },
        required: true
    },
    dateOfBirth: { type: String, required: [true, "Date of Birth is required"] },
    contractNo: { type: String, required: [true, "contactNo is required"] },
    emergencyNo: { type: String, required: [true, "Emergency No is required"] },
    bloodGroup: {
        type: String,
        enum: {
            values: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
            message: "Blood Group is required"
        },
    },
    presentAddress: { type: String, required: [true, "Present address is required"] },
    permanentAddress: { type: String, required: [true, "Permanent  is required"] },
    guardian: {
        type: guardianSchema,
        required: [true, "Guardian field is required"]
    },
    localGuardian: {
        type: localGuardianSchema,
        required: [true, "localGuardian field is required"]
    },
    profileImage: { type: String },
    isActive: {
        type: String,
        enum: {
            values: ['active', 'block'],
            message: "Student activity is required"
        },
        default: "active"
    },
});
exports.StudentModel = (0, mongoose_1.model)('Student', studentSchema);
