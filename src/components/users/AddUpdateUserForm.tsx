import { Center, Heading } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import UserForm from 'components/users/UserForm';
import useTitle from 'hooks/useTitile';
import { useEffect } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import UserSchema, { TUserSchema } from 'utils/schema/userSchema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast/headless';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { addUser, getUserById, updateUser } from 'redux/slice/userSlice';
import { SUCCESS } from 'redux/constant/constant';

const AddUpdateUserForm = ({ isEditing, userId }: { isEditing: boolean; userId?: string }) => {
  useTitle('Add User');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addUserStatus, updateUserStatus, userByIdStatus, userData } = useAppSelector((state) => state.user);

  const methods = useForm<TUserSchema>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: '',
      emailAddress: '',
      mobileNumber: '',
      age: '',
      gender: '',
      status: ''
    }
  });

  const { handleSubmit, reset, setValue } = methods;

  const onSubmitHandler: SubmitHandler<TUserSchema> = (data) => {
    if (!isEditing) {
      const payloadData = {
        ...data,
        id: Math.floor(Math.random() * 100000000)
      };
      dispatch(addUser(payloadData));
    } else if (isEditing && userId) {
      const payloadData = {
        ...data,
        id: parseInt(userId)
      };
      dispatch(updateUser(payloadData));
    }
  };

  useEffect(() => {
    if (isEditing && userByIdStatus === SUCCESS) {
      setValue('username', userData?.name);
      setValue('emailAddress', userData?.email);
      setValue('mobileNumber', userData?.phoneNumber);
      setValue('age', userData?.age?.toString());
      setValue('gender', userData?.gender);
      setValue('status', userData?.status);
    }
  }, [isEditing, setValue, userData, userByIdStatus]);

  useEffect(() => {
    if (addUserStatus === SUCCESS || updateUserStatus === SUCCESS) {
      reset();
      navigate('/users');
      toast.success('User Added Successfully!');
    }
  }, [addUserStatus, navigate, reset, updateUserStatus]);

  useEffect(() => {
    dispatch(getUserById(userId ?? ''));
  }, [dispatch, userId]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <Center
          sx={{
            height: '100vh',
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
