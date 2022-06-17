import './App.css';
import { useEffect, useState } from 'react';
import { ModalDialog } from './ModalDialog';

function App() {
  const [ isOpen, setIsOpen ] = useState(true);
  const show = () => {

    ModalDialog.show({
      title: 'Hello, world!',
      closeOnClick: true, //true = click outside to close, false = don't close on outside click
      content: <img src="https://www.pngmart.com/files/12/Funny-Boy-Emoji-PNG-Transparent-Image.png" style={ { width: "50%" } } />
    });
  };
  useEffect(() => {
    show();
  }, [ isOpen ]);
  return (
    <div className="App">
      <button onClick={ () => setIsOpen(!isOpen) }>Show Modal</button>
      <ModalDialog />

    </div>
  );
}

export default App;
