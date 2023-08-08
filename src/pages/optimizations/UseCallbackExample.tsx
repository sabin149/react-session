import { Box } from '@chakra-ui/react';
import UseCallbackChild from 'components/optimizations/UseCallbackChild';
import { useState } from 'react';

// Parent Component
function UseCallbackExample() {
  const [count, setCount] = useState<number>(0);

  // // Define the callback function using useCallback
  // const handleClick = useCallback(() => {
  //   console.log('Button clicked');
  //   setCount((prevCount) => prevCount + 1);
  // }, []); // No dependencies, function will never change

  const handleClick = () => {
    console.log('Button clicked');
    setCount((prevCount) => prevCount + 1);
  };

  console.log('Parent Component render');

  return (
    <Box display={'flex'} height={'100%'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <UseCallbackChild onClick={handleClick} />
    </Box>
  );
}

export default UseCallbackExample;
