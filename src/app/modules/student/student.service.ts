import { Student } from "./student.interface"
import { StudentModel } from "./student.model"

const createStudentInDb = async(payLoad: Student) => {
    const result = await StudentModel.create(payLoad);
    return result;
}

const getAllStudentsFromDB = async() => {
    const result = await StudentModel.find();
    return result;
}

const getStudentById = async(id: string) => {
    const result = await StudentModel.findOne({id});
    return result;
}

export const StudentService = {
    createStudentInDb,
    getAllStudentsFromDB,
    getStudentById
}