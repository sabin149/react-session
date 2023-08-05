import { getRequiredMessage } from 'utils/GetRequiredValidationMsg';
import { object, string, TypeOf } from 'zod';

const UserSchema = object({
  username: string().nonempty(getRequiredMessage('Username')).max(32, 'Name must be less than 100 characters!'),
  emailAddress: string().nonempty(getRequiredMessage('Email')).email('Email is invalid!'),
  age: string().nonempty(getRequiredMessage('Age')),
  gender: string().nonempty(getRequiredMessage('Gender')),
  mobileNumber: string()
    .nonempty(getRequiredMessage('Mobile Number'))
    .min(10, 'Mobile Number must be 10 digits!')
    .max(10, 'Mobile Number must be 10 digits!'),
  status: string().nonempty(getRequiredMessage('Status'))
});
export default UserSchema;

export type TUserSchema = TypeOf<typeof UserSchema>;
