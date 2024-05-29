import Joi from 'joi';


const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .min(4)
      .max(9)
      .trim()
      .required()
      .regex(/^[A-Z][a-zA-Z]*$/, 'Capitalized first letter')
      .messages({
        'string.min': 'Min value must have 4 characters',
        'string.max': 'Max value must have 9 characters',
        'string.pattern.name': '{#label} must start with a capital letter',
      }),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required().messages({
      'any.required': 'Last Name is required',
    }),
  });

  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'any.required': "Father's Name is required",
    }),
    fatherOccupation: Joi.string().required().messages({
      'any.required': "Father's occupation is required",
    }),
    fatherContactNo: Joi.string().required().messages({
      'any.required': "Father's contact number is required",
    }),
    motherName: Joi.string().required().messages({
      'any.required': "Mother's name is required",
    }),
    motherOccupation: Joi.string().required().messages({
      'any.required': "Mother's occupation is required",
    }),
    motherContactNo: Joi.string().required().messages({
      'any.required': "Mother's contact number is required",
    }),
  });

  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().messages({
      'any.required': "Local guardian's name is required",
    }),
    occupation: Joi.string().required().messages({
      'any.required': "Local guardian's occupation is required",
    }),
    contactNo: Joi.string().required().messages({
      'any.required': "Local guardian's contact number is required",
    }),
    address: Joi.string().required().messages({
      'any.required': "Local guardian's address is required",
    }),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'any.required': 'Student ID is required',
    }),
    name: userNameValidationSchema.required().messages({
      'any.required': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    gender: Joi.string().valid('male', 'female').required().messages({
      'any.required': 'Gender is required',
      'any.only': 'Gender must be either "male" or "female"',
    }),
    dateOfBirth: Joi.string().required().messages({
      'any.required': 'Date of Birth is required',
    }),
    contractNo: Joi.string().required().messages({
      'any.required': 'Contact number is required',
    }),
    emergencyNo: Joi.string().required().messages({
      'any.required': 'Emergency number is required',
    }),
    bloodGroup: Joi.string()
      .valid('O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-')
      .messages({
        'any.only':
          'Blood Group must be one of ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]',
      }),
    presentAddress: Joi.string().required().messages({
      'any.required': 'Present address is required',
    }),
    permanentAddress: Joi.string().required().messages({
      'any.required': 'Permanent address is required',
    }),
    guardian: guardianValidationSchema.required().messages({
      'any.required': 'Guardian field is required',
    }),
    localGuardian: localGuardianValidationSchema.required().messages({
      'any.required': 'Local guardian field is required',
    }),
    profileImage: Joi.string().optional(),
    isActive: Joi.string()
      .valid('active', 'block')
      .default('active')
      .messages({
        'any.only': 'Student activity must be either "active" or "block"',
      }),
  });

  export default studentValidationSchema;

