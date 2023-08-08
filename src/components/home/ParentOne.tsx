import { Container, Divider, Heading, VStack } from '@chakra-ui/react';
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
      <VStack>
        <Heading as='h4' size='md'>
          ParentOne
        </Heading>
        <Divider />
        <ParentOneChild name={name} />
      </VStack>
    </Container>
  );
};

export default ParentOne;
