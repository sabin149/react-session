import { Center, Heading } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import UserForm from 'components/users/UserForm';
import useTitle from 'hooks/useTitile';
import { useAddUser, useUpdateUser } from 'queries/users/UserCommand';
import { useEffect } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import UserSchema, { TUserSchema } from 'utils/schema/userSchema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useGetUserById } from 'queries/users/UserQuery';

const initialDefaultValues = {
  username: '',
  emailAddress: '',
  mobileNumber: '',
  age: '',
  gender: '',
  status: ''
};

const AddUpdateUserForm = ({ isEditing, userId }: { isEditing: boolean; userId?: string }) => {
  useTitle('Add User');
  const navigate = useNavigate();
  const addUserData = useAddUser();
  const oneUserData = useGetUserById(userId);
  const updateUserData = useUpdateUser();
  const methods = useForm<TUserSchema>({
    resolver: zodResolver(UserSchema),
    defaultValues: initialDefaultValues
  });

  const { handleSubmit, reset, setValue } = methods;

  const onSubmitHandler: SubmitHandler<TUserSchema> = (data) => {
    if (!isEditing) {
      const payloadData = {
        ...data,
        id: Math.floor(Math.random() * 100000000)
      };
      addUserData.mutate(payloadData);
    } else if (isEditing && userId) {
      const payloadData = {
        ...data,
        id: parseInt(userId)
      };
      updateUserData.mutate(payloadData);
    }
  };

  useEffect(() => {
    if (isEditing && oneUserData.isSuccess) {
      setValue('username', oneUserData.data?.name);
      setValue('emailAddress', oneUserData.data?.email);
      setValue('mobileNumber', oneUserData.data?.phoneNumber);
      setValue('age', oneUserData.data?.age.toString());
      setValue('gender', oneUserData.data?.gender);
      setValue('status', oneUserData.data?.status);
    }
  }, [isEditing, oneUserData.data, oneUserData.isSuccess, setValue]);

  useEffect(() => {
    if (oneUserData.isError) {
      toast.error('Something went wrong! Please try again.');
    }
  }, [oneUserData.isError]);

  useEffect(() => {
    if (addUserData.isSuccess || updateUserData.isSuccess) {
      toast.success(`User ${isEditing ? 'updated' : 'added'} successfully!`, { duration: 100000 });
      reset();
      navigate('/users');
    }
  }, [addUserData.isSuccess, isEditing, navigate, reset, updateUserData.isSuccess]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <Center
          sx={{
            mt: '10',
            flexDirection: 'column'
          }}
        >
          <Heading as='h1' size='lg'>
            {isEditing ? 'Update User' : 'Add User'}
          </Heading>
          <UserForm />
        </Center>
      </form>
    </FormProvider>
  );
};

export default AddUpdateUserForm;
