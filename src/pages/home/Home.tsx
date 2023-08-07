import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import ParentOne from 'components/home/ParentOne';
import ParentTwo from 'components/home/ParentTwo';
import { useState, useMemo } from 'react';

const Home = () => {
  const [name, setName] = useState('');

  const memoName = useMemo(() => name, [name]);

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
          <Heading as='h4' size='md' mb={2}>
            Home Page
          </Heading>

          <ParentTwo name={memoName} setName={setName} />
          <br />
          <ParentOne name={memoName} />
        </Container>
      </VStack>
    </Box>
  );
};

export default Home;
