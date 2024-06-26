"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        const result = yield student_service_1.StudentService.createStudentInDb(student);
        res.status(200).json({
            success: true,
            message: 'Student created successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllStudentsFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_service_1.StudentService.getAllStudentsFromDB();
    res.status(200).json({
        success: true,
        message: "All data successfully retrieve",
        data: result
    });
});
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.studentId;
    const result = yield student_service_1.StudentService.getStudentById(id);
    res.status(200).json({
        success: true,
        message: "Single student retrieve successfully",
        data: result
    });
});
exports.StudentController = {
    createStudent,
    getAllStudentsFromDB,
    getStudentById
};
