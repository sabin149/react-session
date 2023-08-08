import { Container, Divider, FormControl, FormLabel, Heading, VStack, Input } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from 'redux/slice/nameSlice';

const ParentTwo = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeName(e.target.value));
    },
    [dispatch]
  );

  return (
    <Container
      maxW={'5xl'}
      sx={{
        p: 5,
        border: '1px solid gray'
      }}
    >
      <VStack>
        <Heading as='h4' size='md'>
          ParentTwo
        </Heading>
        <Divider />
        <Container maxW='2xl' mt={2.5}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' onChange={handleChange} />
          </FormControl>
        </Container>
      </VStack>
    </Container>
  );
};

export default ParentTwo;
