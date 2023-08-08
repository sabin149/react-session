import { Box, Button, Container } from '@chakra-ui/react';
import MemoChild from 'components/optimizations/MemoChild';
import { useState, useEffect } from 'react';

export default function MemoExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  useEffect(() => {
    console.log(count, 'count');
  }, [count]);

  return (
    <Container maxW={'5xl'} mt={'2.5'}>
      <Button onClick={() => handleIncrement()} colorScheme='blue' mr={'2'} mb={'2'}>
        Increment
      </Button>
      <Button onClick={() => handleDecrement()} colorScheme='messenger' mb={'2'}>
        Decrement
      </Button>

      <Container maxW={'5xl'} mt={'2.5'}>
        <h2>Count - {count}</h2>

        <MemoChild name={'John'} />
      </Container>
    </Container>
  );
}
