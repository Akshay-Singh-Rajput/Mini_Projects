import './App.css'
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

function App() {

  return (
    <div className="App">
      <Accordion defaultIndex="1" onItemClick={ console.log }>
        <AccordionItem label="A" index="1">
          Lorem ipsum
        </AccordionItem>
        <AccordionItem label="B" index="2">
          Dolor sit amet
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App
