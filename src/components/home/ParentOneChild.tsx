import { Container, Heading, VStack } from '@chakra-ui/react';
import ParentOneChildChild from './ParentOneChildChild';

const ParentOneChild = ({ name }: { name: string }) => {
  return (
    <Container
      maxW={'5xl'}
      sx={{
        p: 5,
        border: '1px solid gray'
      }}
    >
      <VStack mb={2}>
        <Heading as='h4' size='md'>
          ParentOneChild
        </Heading>
      </VStack>
      <ParentOneChildChild name={name} />
    </Container>
  );
};

export default ParentOneChild;
