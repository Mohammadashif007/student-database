import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

router.post("/create-student", StudentController.createStudent );
router.get("/", StudentController.getAllStudentsFromDB);
router.get("/:studentId", StudentController.getStudentById);
router.put("/:studentId", StudentController.updateStudentField)
router.delete("/:studentId", StudentController.deleteStudentById);

export const StudentRoutes = router;