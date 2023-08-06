import { Box, Container, Divider, Heading, VStack } from '@chakra-ui/react';
import { useUserStore } from 'store/userStore';

const ParentOne = () => {
  const user = useUserStore((state) => state.userInfo);
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
          ParentOne
        </Heading>
        <Divider />
        <Box>Name - {user.name}</Box>
      </VStack>
    </Container>
  );
};

export default ParentOne;
