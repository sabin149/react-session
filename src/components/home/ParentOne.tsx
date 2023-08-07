import { Container, Heading, VStack } from '@chakra-ui/react';
import ParentOneChild from './ParentOneChild';

const ParentOne = ({ name }: { name: string }) => {
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
          ParentOne
        </Heading>
      </VStack>
      <ParentOneChild name={name} />
    </Container>
  );
};

export default ParentOne;
