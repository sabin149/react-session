import { Box, Container, VStack } from '@chakra-ui/react';
import ParentOne from 'components/home/ParentOne';
import ParentTwo from 'components/home/ParentTwo';
import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');

  const handleNameChange = (name: string) => {
    setName(name);
  };

  return (
    <Box mt={9}>
      <VStack rowGap={3}>
        <Container
          maxW={'5xl'}
          sx={{
            p: 10,
            border: '2px solid blue',
            my: 5
          }}
        >
          <ParentTwo handleChange={handleNameChange} />
          <br />
          <ParentOne name={name} />
        </Container>
      </VStack>
    </Box>
  );
};

export default Home;
