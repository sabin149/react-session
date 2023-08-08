import { Box, Button, Container } from '@chakra-ui/react';
import { useReducer } from 'react';

// Define the state type
type State = {
  count: number;
};

// Define the action type
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function UseReducerExample() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Container maxW={'5xl'} mt={'2.5'}>
      <Box my={'2.5'}>
        <h2>Count - {state.count}</h2>
      </Box>
      <Button onClick={() => dispatch({ type: 'increment' })} colorScheme='blue' mr={'2'} mb={'2'}>
        Increment
      </Button>
      <Button onClick={() => dispatch({ type: 'decrement' })} colorScheme='messenger' mb={'2'} mr={2}>
        Decrement
      </Button>
      <Button onClick={() => dispatch({ type: 'reset' })} colorScheme='red' mb={'2'}>
        Reset
      </Button>
    </Container>
  );
}

export default UseReducerExample;
