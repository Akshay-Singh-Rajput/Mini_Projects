import { FileDrop } from './FileDrop';

function App() {

  return (
    <div className="App">
      <FileDrop handleDrop={ console.log } />
    </div>
  );
}

export default App;
