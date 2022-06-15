import './App.css'
import Login from './Login';
import Signup from './Signup';
import { TabItem, Tabs } from './tab';

function App() {

  return (
    <div className="App">
      <Tabs defaultIndex="1" onTabClick={ console.log }>
        <TabItem label="Login" index="1">
          <Login />
        </TabItem>
        <TabItem label="Signup" index="2">
          < Signup />
        </TabItem>
      </Tabs>,
    </div>
  )
}

export default App
