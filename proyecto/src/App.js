import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './Screens/Home';
import { Contacto } from './Screens/Contacto';

function App() {
  return (
    <div>
     
      <Router> 
        <NavBar></NavBar>
      <Routes>
        <Route path='/home/*' element={<Home></Home>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
