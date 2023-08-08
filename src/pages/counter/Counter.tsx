import { useCounter } from 'hooks/useCounter';

const Counter = () => {
  const { count, decrement, increment } = useCounter();

  return (
    <div>
      <p data-testid='count-display'>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
