import React, { useState } from "react";

export default function SimpleButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
