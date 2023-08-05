import { Box, Container, Divider, FormControl, FormLabel, Heading, VStack, Input } from '@chakra-ui/react';
import React from 'react';

interface IParentTwoProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const ParentTwo = ({ name, setName }: IParentTwoProps) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
        <Box>Name - {name}</Box>
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
