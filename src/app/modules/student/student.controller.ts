import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentValidationSchema from './student.zod.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // ! creating a schema validation using joi

    const student = req.body;

    const parsedData = studentValidationSchema.parse(student);
    console.log(parsedData);
    const result = await StudentService.createStudentInDb(parsedData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const getAllStudentsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All data successfully retrieve',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await StudentService.getStudentById(id);
    res.status(200).json({
      success: true,
      message: 'Single student retrieve successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const deleteStudentById = async(req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await StudentService.deleteStudentById(id);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: result
    })
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      data: error
    })
  }
}


// ! update 
const updateStudentField = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    // console.log(req.body);
    const updatedField= req.body;
    // console.log("field:",field, "value:",value);
    // console.log(studentId);
    const result = await StudentService.updateStudentFieldById(studentId, updatedField);
    res.status(200).json({
      success: true,
      message: 'Student field updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};


export const StudentController = {
  createStudent,
  getAllStudentsFromDB,
  getStudentById,
  deleteStudentById,
  updateStudentField
};
