import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentService.createStudentInDb(student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudentsFromDB = async(req: Request, res: Response) => {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
        success: true,
        message: "All data successfully retrieve",
        data: result
    })
}

const getStudentById = async(req: Request, res: Response) => {
    const id = req.params.studentId
    const result = await StudentService.getStudentById(id);
    res.status(200).json({
        success: true,
        message: "Single student retrieve successfully",
        data: result
    })
}

export const StudentController = {
    createStudent,
    getAllStudentsFromDB,
    getStudentById
}
