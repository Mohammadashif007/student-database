import { string } from 'joi';
import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContractNo: string;
  motherName: string;
  motherOccupation: string;
  motherContractNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contractNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  // password: string,
  name: TUserName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contractNo: string;
  emergencyNo: string;
  bloodGroup?: 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'block';
  isDeleted: boolean
};

// !creating static

export interface StudentModel extends Model<TStudent> {
  isUserExists(id:string): Promise<TStudent | null>
}


// !custom method
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;

// export type StudentMethod = {
//   isUserExist(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
