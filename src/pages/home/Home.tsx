import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import ParentTwo from 'components/home/ParentTwo';
import ParentOne from 'components/home/ParentOne';
import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState<string>('');
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
          <ParentOne name={name} />
          <br />
          <ParentTwo changeName={handleNameChange} />
        </Container>
      </VStack>
    </Box>
  );
};

export default Home;
