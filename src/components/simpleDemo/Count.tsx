import { Heading } from '@chakra-ui/react';

const Count = (props: { count: number }) => {
  return <Heading as={'h6'}>Count: {props.count}</Heading>;
};

export default Count;
