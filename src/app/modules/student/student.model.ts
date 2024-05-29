import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentModel,
  TUserName,
} from './student.interface';
import { Model } from 'mongoose';
import bcrypt from "bcrypt";
import config from '../../config';

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContractNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContractNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contractNo: { type: String, required: true },
  address: { type: String, required: true },
});




const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  // password: { type: String, required: true, max: [20, "Password not more then 20 character"] },
  name: {
    type: userNameSchema,
    required: true,
  },
  email: { type: String, required: true },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  contractNo: { type: String, required: true },
  emergencyNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'block'],
    default: 'active',
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
},{
  toJSON: { virtuals: true } as any,
  // toObject: { virtuals: true } as any,
});


// ! virtual 
studentSchema.virtual('fullName').get(function(){ return`${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`});
// studentSchema.virtual('fullName').get(function() {
//   return `${this.name.firstName} ${this.name.middleName || ''} ${this.name.lastName}`.trim();
// });


// ! hashing password and save into db 

// studentSchema.pre('save', async function () {
//   // console.log(this, 'pre hook: we will save data.');

//   // hashing password and save into db
//   this.password = await bcrypt.hash(
//     this.password,
//     Number(config.bcrypt_salt_rounds),
//   );
// });

// studentSchema.post('save', async function(doc,next){
//   doc.password= "",
//   next()
// })

// userSchema.pre('save', async function () {
//   // console.log(this, 'pre hook: we will save data.');

//   // hashing password and save into db
//   this.password = await bcrypt.hash(
//     this.password,
//     Number(config.bcrypt_salt_rounds),
//   );
// });


// ! Query middleware
studentSchema.pre('find', function(next){
  this.find({isDeleted: {$ne: true}})
next()
})
studentSchema.pre('findOne', function(next){
  this.find({isDeleted: {$ne: true}})
next()
})

studentSchema.pre('aggregate', function(next){
  this.pipeline().unshift({$match: {isDeleted : {$ne: true}}})
  next()
})



// ! creating a custom static method

studentSchema.statics.isUserExists = async function(id){
  const existingUser = await Student.findOne({id});
  return existingUser;
}



// !custom instance method
// studentSchema.methods.isUserExist = async function(id:string){
//   const existingUser = await Student.findOne({id});
//   return existingUser;
// }

// studentSchema.methods.isUserExist = async function(id: string){
//   const existingUser = await Student.findOne({id});
//   return existingUser;
// }
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
