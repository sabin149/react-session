import { Button } from '@chakra-ui/react';

// Child Component
const UseCallbackChild = ({ onClick }: { onClick: () => void }) => {
  console.log('Child Component render');
  return (
    <Button onClick={onClick} colorScheme='purple'>
      Click me
    </Button>
  );
};

export default UseCallbackChild;
