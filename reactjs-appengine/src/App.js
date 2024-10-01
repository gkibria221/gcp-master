import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Dashboard</h1>
        <p>Button clicked {count} times</p>
        <button onClick={incrementCount}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
