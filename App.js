
import './App.css';
import NavBar from './NavBar';


import Formcommunity from './src/formcommunity';
import RegisterPage from './src/registerpage';
import Formuser from './src/formuser';
import Home from './src/Home';
import { BrowserRouter as Router,Route,Switch,Link,Redirect, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/formuser' element={<Formuser/>}/>
      <Route path='/formcommunity' element={<Formcommunity/>}/>
      <Route path='/registerpage' element={<RegisterPage/>}/>
    </Routes>
    </>

  );
  
};

export default App;
