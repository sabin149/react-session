import { Box, Container, Divider, Heading, VStack } from '@chakra-ui/react';

const ParentOneChildChild = ({ name }: { name: string }) => {
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
        <Box>Name - {name}</Box>
      </VStack>
    </Container>
  );
};

export default ParentOneChildChild;
