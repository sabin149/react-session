import { Box, Container, Divider, FormControl, FormLabel, Heading, VStack, Input } from '@chakra-ui/react';
import React from 'react';

interface IParentTwoProps {
  handleChange: (name: string) => void;
}

const ParentTwo = ({ handleChange }: IParentTwoProps) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
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
          ParentTwo
        </Heading>
        <Divider />

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

export default ParentTwo;
