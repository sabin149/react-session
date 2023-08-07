import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import ParentThree from 'components/home/ParentThree';
import ParentTwo from 'components/home/ParentTwo';
import ParentOne from 'components/home/ParentOne';
import ParentTwoChild from 'components/home/ParentTwoChild';
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
            border: '2px solid green'
          }}
        >
          <Heading as='h4' size='md' mb={2}>
            Using Zustand
          </Heading>
          <ParentThree />
          <br />
          <ParentTwoChild />
        </Container>
        <Container
          maxW={'5xl'}
          sx={{
            p: 10,
            border: '2px solid blue',
            my: 5
          }}
        >
          <Heading as='h4' size='md' mb={2}>
            Using useState props drillig and lifting state
          </Heading>
          <ParentOne name={name} />
          <br />
          <ParentTwo changeName={handleNameChange} />
        </Container>
      </VStack>
    </Box>
  );
};

export default Home;
