import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentInDb = async (payLoad: TStudent) => {
  // ! custom static method;
  if (await Student.isUserExists(payLoad.id)) {
    throw new Error('User already exists');
  }
  const result = await Student.create(payLoad);
  return result;

  // !build in instance method;
  //   const student = new Student(payLoad);
  //   if (await student.isUserExists(payLoad.id)) {
  //     throw new Error('User already exists');
  //   }
  //   const result = student.save();
  //   return result;

 
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getStudentById = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([
    {$match: {id: id}}
  ])
  return result;
};

const deleteStudentById = async (id: string) => {
  const result = await Student.updateOne({ id }, {isDeleted: true});
  return result;
};

// ! update
const updateStudentFieldById = async (id: string, field:any) => {
  const updateObject = field;
  // const updateObject = { [field]: field };
  console.log("field",field);
  console.log("console from",updateObject);
  const result = await Student.findOneAndUpdate( {id} , updateObject , { new: true });
  // const result = await Student.findByIdAndUpdate( {_id:id} , updateObject , { new: true });
  return result;
};


export const StudentService = {
  createStudentInDb,
  getAllStudentsFromDB,
  getStudentById,
  deleteStudentById,
  updateStudentFieldById
};
