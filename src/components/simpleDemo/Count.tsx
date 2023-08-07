import { Heading } from '@chakra-ui/react';

const Count = ({ count }: { count: number }) => {
  return <Heading as={'h6'}>Count: {count}</Heading>;
};

export default Count;
