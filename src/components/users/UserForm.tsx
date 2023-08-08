import { FormControl, FormLabel, FormHelperText, Stack, Input, Container, CardBody, Card, Select, Button } from '@chakra-ui/react';
import { useFormContext, Controller } from 'react-hook-form';
import { TUserSchema } from 'utils/schema/userSchema';

const UserForm = () => {
  const {
    control,
    formState: { errors, isSubmitting }
  } = useFormContext<TUserSchema>();

  return (
    <Container maxW='2xl' mt={5}>
      <Card>
        <CardBody>
          <Stack>
            <Controller
              control={control}
              name='username'
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type='text' {...field} className='username' />
                  <FormHelperText color='red'>{errors.username && errors.username.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name='emailAddress'
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input type='email' {...field} className='email' />
                  <FormHelperText color='red'>{errors.emailAddress && errors.emailAddress.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name='mobileNumber'
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input type='number' {...field} className='mobile' />
                  <FormHelperText color='red'>{errors.mobileNumber && errors.mobileNumber.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name='age'
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Age</FormLabel>
                  <Input type='number' {...field} className='age' />
                  <FormHelperText color='red'>{errors.age && errors.age.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name='gender'
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select placeholder='Select Gender' {...field} className='gender'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </Select>
                  <FormHelperText color='red'>{errors.gender && errors.gender.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name='status'
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Status</FormLabel>
                  <Select placeholder='Select Status' {...field} className='status'>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </Select>
                  <FormHelperText color='red'>{errors.status && errors.status.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Button type='submit' colorScheme='blue' mt='2' isLoading={isSubmitting}>
              Submit
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UserForm;
