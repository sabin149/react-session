import { TUserSchema } from 'utils/schema/userSchema';

export interface IUserResponseItem {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  phoneNumber: string;
  status: string;
}

export interface IUserDto {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
  phoneNumber: string;
  status: string;
}

export interface IUserInfo extends TUserSchema {
  id: number;
}

export function UserInfoToApiMapper(userInfo: IUserInfo): IUserDto {
  return {
    id: userInfo.id,
    name: userInfo.username,
    email: userInfo.emailAddress,
    age: parseInt(userInfo.age),
    gender: userInfo.gender,
    phoneNumber: userInfo.mobileNumber,
    status: userInfo.status
  };
}
