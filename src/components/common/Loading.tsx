import { useEffect, useState } from 'react';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';
import { loadingMessages } from 'data/LoadingDataMsgs';

const Loading = () => {
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
      <VStack spacing={4}>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        <Text fontSize='xl'>{loadingMessage}</Text>
      </VStack>
    </Box>
  );
};

export default Loading;
