// need one
// const UseCallbackExample = () => {
//   return <div>UseCallbackExample</div>;
// };
import React, { useState, useCallback } from 'react';

// Child Component
const ChildComponent: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  console.log('Child Component render');
  return <button onClick={onClick}>Click me</button>;
};

// Parent Component
function UseCallbackExample() {
  const [count, setCount] = useState<number>(0);

  // // Define the callback function using useCallback
  // const handleClick = useCallback(() => {
  //   console.log('Button clicked');
  //   setCount((prevCount) => prevCount + 1);
  // }, []); // No dependencies, function will never change

  // Define the callback function using useCallback
  const handleClick = () => {
    console.log('Button clicked');
    setCount((prevCount) => prevCount + 1);
  }; // No dependencies, function will never change

  console.log('Parent Component render');

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

// export default ParentComponent;

export default UseCallbackExample;
