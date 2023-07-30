import { TUserSchema } from 'utils/schema/userSchema';

export interface IUserResponseItem {
  userId: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  phoneNumber: string;
  status: string;
}

export interface IUserDto {
  userId: number;
  name: string;
  email: string;
  age: number;
  phoneNumber: string;
  status: string;
}

export interface IUserInfo extends TUserSchema {
  userId: number;
}

export function UserInfoToApiMapper(userInfo: IUserInfo): IUserDto {
  return {
    userId: userInfo.userId,
    name: userInfo.username,
    email: userInfo.emailAddress,
    age: parseInt(userInfo.age),
    phoneNumber: userInfo.mobileNumber,
    status: userInfo.status
  };
}
