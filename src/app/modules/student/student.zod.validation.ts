import { z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z.string().min(1, { message: "First Name is required!" }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: "Last Name is required!" })
  });
  
  const guardianValidationSchema = z.object({
    fatherName: z.string().min(1, { message: "Father Name field is required!" }),
    fatherOccupation: z.string().min(1, { message: "Father Occupation field is required!" }),
    fatherContractNo: z.string().min(1, { message: "Father Contact No field is required!" }),
    motherName: z.string().min(1, { message: "Mother Name field is required!" }),
    motherOccupation: z.string().min(1, { message: "Mother Occupation field is required!" }),
    motherContractNo: z.string().min(1, { message: "Mother Contact No field is required!" })
  });
  
  const localGuardianValidationSchema = z.object({
    name: z.string().min(1, { message: "Local Guardian Name field is required!" }),
    occupation: z.string().min(1, { message: "Occupation field is required!" }),
    contractNo: z.string().min(1, { message: "Contact No is required!" }),
    address: z.string().min(1, { message: "Address is required!" })
  });
  
  const studentValidationSchema = z.object({
    id: z.string().min(1, { message: "Student ID is required!" }),
    // password: z.string().min(1, { message: "password is required!" }).max(20),
    name: userNameValidationSchema,
    email: z.string().email({ message: "Invalid Email!" }),
    gender: z.enum(['male', 'female'], { required_error: "Gender is required!" }),
    dateOfBirth: z.string().min(1, { message: "Date of Birth is required!" }),
    contractNo: z.string().min(1, { message: "Contact No is required!" }),
    emergencyNo: z.string().min(1, { message: "Emergency No is required!" }),
    bloodGroup: z.enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']).optional(),
    presentAddress: z.string().min(1, { message: "Present Address is required!" }),
    permanentAddress: z.string().min(1, { message: "Permanent Address is required!" }),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImage: z.string().optional(),
    isActive: z.enum(['active', 'block']).default('active'),
    isDeleted: z.boolean()
  });


export default studentValidationSchema;