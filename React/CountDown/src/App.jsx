import { useEffect } from 'react';
import { useId, useState } from 'react';
import './App.css';
import { CountDown } from './components/CountDown';

function App() {
  const [ Time, setTime ] = useState({
    hrs: 0,
    min: 1,
    sec: 1
  });


  const handleChange = (e) => {
    setTime({
      ...Time,
      [ e.target.name ]: e.target.value
    });
  };



  return (
    <div className="App">
      <h1>Counter</h1>
      <div className='InputForm'>
        <label htmlFor="">{ "Hours" }</label>
        <input type="Number" name='hrs' onChange={ handleChange } placeholder="00" />
        <label htmlFor="">{ "Minutes" }</label>
        <input type="Number" name='min' onChange={ handleChange } placeholder="01" />
        <label htmlFor="">{ "Seconds" }</label>
        <input type="Number" name='sec' onChange={ handleChange } placeholder="00" />
      </div>

      <CountDown hours={ Time.hrs ? Time.hrs : 0 } minutes={ Time.min ? Time.min : 0 } seconds={ Time.sec ? Time.sec : 0 } />
    </div>
  );
}

export default App;
