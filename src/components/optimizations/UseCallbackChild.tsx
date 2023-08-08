import { Button, Container } from '@chakra-ui/react';

const UseCallbackChild = ({
  name,
  quantity,
  onIncrement,
  onDecrement
}: {
  name: string;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  console.log(`Rendering Item: ${name}`); // Adding console log

  return (
    <Container maxW={'5xl'} mt={'2.5'}>
      <h2>
        {name} - {quantity}
      </h2>
      <Button onClick={onIncrement} colorScheme='blue' mr={'2'} mb={'2'}>
        Increment
      </Button>
      <Button onClick={onDecrement} colorScheme='messenger' mb={'2'}>
        Decrement
      </Button>
    </Container>
  );
};

export default UseCallbackChild;
