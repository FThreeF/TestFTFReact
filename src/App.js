import { useState } from 'react';
import './App.css';



function App() {
  const [count, setCount] = useState(0);




  const Increment = () => {
    console.log("Increment");
    setCount(count + 1);
  }

  const Decrement = () => {
    console.log("Decrement");
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increment}>Click Increment</button>
      <button onClick={Decrement}>Click Decrement</button>
    </div>
  );
}

export default App;
