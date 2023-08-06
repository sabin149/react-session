import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import ParentOne from 'components/home/ParentOne';
import ParentTwo from 'components/home/ParentTwo';
import ParentOneChild from 'components/home/ParentOneChild';
import ParentTwoChild from 'components/home/ParentTwoChild';
import { useState, useMemo } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  //   solved the rerendering issues
  const memoName = useMemo(() => name, [name]);
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
          <ParentOne />
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
          <ParentTwo name={memoName} setName={setName} />
          <br />
          <ParentOneChild name={memoName} />
        </Container>
      </VStack>
    </Box>
  );
};

export default Home;
