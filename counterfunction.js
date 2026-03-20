import { useState } from "react";

function Counter() {
  // Step 1: Declare state
  const [count, setCount] = useState(100);

  // Step 2: Function to handle button click
  function handleClick() {
    setCount(count + 1);
  }

  // Step 3: Return UI
  return (
    <>
      <h2>Counter Function</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default Counter;