import { Container, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

function UseMemoExample() {
  const [limit, setLimit] = useState<number>(10);

  // Generate an array of even numbers up to the given limit
  const generateEvenNumbers = (max: number): number[] => {
    console.log(`Generating even numbers up to ${max}`);
    const evenNumbers: number[] = [];
    for (let i = 2; i <= max; i += 2) {
      evenNumbers.push(i);
    }
    return evenNumbers;
  };

  const evenNumbers = generateEvenNumbers(limit);
  // Memoize the even number list using useMemo

  // const evenNumbers1 = useMemo(() => {
  //   return generateEvenNumbers(limit);
  // }, [limit]); // Recalculate only if 'limit' changes

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(event.target.value));
  };

  console.log('Component render');

  return (
    <Container maxW={'5xl'} mt={2}>
      <h1>Even Number List</h1>
      <Input placeholder='Basic usage' type='number' value={limit} onChange={handleLimitChange} />
      <p>
        Even numbers up to {limit}: {evenNumbers.join(', ')}
      </p>
    </Container>
  );
}

export default UseMemoExample;
