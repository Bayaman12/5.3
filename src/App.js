import React, { useState } from 'react';
import Count from "./Count";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 5);
  const decrement = () => setCount(count - 5);

  return (
    <div className="App">
      <h1>Счётчик: {count}</h1>
      <Button onClick={increment} label="+5" />
      <Button onClick={decrement} label="-5" />
    </div>
  );
}

export default App;
