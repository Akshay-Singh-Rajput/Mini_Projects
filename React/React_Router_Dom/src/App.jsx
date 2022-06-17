import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home_Page } from './pages/Home_Page';
import { Some_Page } from './pages/Some_Page';
import { Detail_Page } from './pages/Detail_Page';
import { Child_Detail_Page } from './pages/Child_Detail_Page';
import { Not_Found_Page } from './pages/Not_Found_Page';
import { AuthProvider } from "./contextApi/AuthProvider";

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/some" style={ { marginleft: 10 } } >Some</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={
          <AuthProvider redirectTo="/login">
            <Home_Page />
          </AuthProvider>
        } />
        <Route path='/some' element={ <Some_Page /> } />
        <Route path='/:id' element={ <Detail_Page /> }>
          <Route path='info' element={ <Child_Detail_Page /> } />
          <Route path='*' element={ <Not_Found_Page /> } />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
/*  
      <Routes>
  <Route path='/' element={ <Home_Page /> } />
        <Route path='some' element={ <Some_Page /> } />
         <Route path='/:id'>
          <Route index element={ <Detail_Page /> } />
          <Route path='info' element={ <Child_Detail_Page /> } />
          <Route path='*' element={ <Not_Found_Page /> } />
        </Route>
      </Routes>
      
*/