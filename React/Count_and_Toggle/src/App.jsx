import { useState } from 'react';
import './App.css';
import { Toggle } from './Toggle';

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <div className="App">
      <h1>count is: { count }</h1>
      <button type="button" disabled={count < 1} onClick={ () => setCount((count) => count - 1) }>
        Dec
      </button>
      <button type="button" onClick={ () => setCount((count) => count + 1) }>
        Inc
      </button>
      <Toggle />
    </div>
  );
}

export default App;
