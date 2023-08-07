import { Box, Container, Divider, Heading, VStack } from '@chakra-ui/react';
// import { useUserStore } from 'store/userStore';

const ParentOneChildChild = ({ name }: { name: string }) => {
  // const userInfo = useUserStore((state) => state.userInfo);
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
          ParentOneChildsChild
        </Heading>
        <Divider />
        {/* //! Props Driling */}
        <Box> Name - {name}</Box>
        {/*//! From Zustand store */}
        {/* <Box> Name - {userInfo.name}</Box> */}
      </VStack>
    </Container>
  );
};

export default ParentOneChildChild;
