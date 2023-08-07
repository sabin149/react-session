import { Box, Button } from '@chakra-ui/react';
import Count from 'components/simpleDemo/Count';
import { useState, useEffect } from 'react';

const SimpleDemo = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };

  // useEffect(() => {
  //   // Code to be executed after every render
  //   // You can perform side effects or handle component state here
  //   // The returned function (cleanup function) will be called when the component is unmounted or before the next effect runs
  //   console.log('Component mounted');

  //   return () => {
  //     // Used to cancel subscriptions, timers, or any other cleanup tasks
  //     console.log('Component will unmount');
  //   };
  // }, []);

  return (
    <Box display={'flex'} height={'100%'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={2}>
      <Count count={count} />
      <Button colorScheme='green' onClick={handleIncrement}>
        Increment
      </Button>
    </Box>
  );
};

export default SimpleDemo;
