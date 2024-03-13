import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 10) setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={addValue}>Add value to {counter}</button>
      <button onClick={reset}>Reset</button>
      <button onClick={removeValue}>Remove value from {counter}</button>
      <h1>Counter {counter}</h1>
    </>
  );
}

export default App;
