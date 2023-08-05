import { Box, Container, Divider, FormControl, FormLabel, Heading, VStack, Input } from '@chakra-ui/react';
import { useUserStore } from 'store/userStore';

const ParentTwoChild = () => {
  const user = useUserStore((state) => state.userInfo);
  const setUser = useUserStore((state) => state.setUserInfo);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ name: e.target.value });
  };
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
          ParentTwoChild
        </Heading>
        <Divider />
        <Box>Name - {user.name}</Box>
        <Container maxW='2xl' mt={2.5}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' onChange={handleNameChange} />
          </FormControl>
        </Container>
      </VStack>
    </Container>
  );
};

export default ParentTwoChild;
