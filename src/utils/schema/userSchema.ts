import { getRequiredMessage } from 'utils/GetRequiredValidationMsg';
import { object, string, TypeOf } from 'zod';

const userSchema = object({
  username: string().nonempty(getRequiredMessage('Username')).max(32, 'Name must be less than 100 characters!'),
  emailAddress: string().nonempty(getRequiredMessage('Email')).email('Email is invalid!'),
  age: string().nonempty(getRequiredMessage('Age')),
  gender: string().nonempty(getRequiredMessage('Gender')),
  mobileNumber: string().nonempty(getRequiredMessage('Phone Number')).max(10, 'Phone Number must be 10 digits!'),
  status: string().nonempty(getRequiredMessage('Status'))
});
export default userSchema;

export type TUserSchema = TypeOf<typeof userSchema>;
