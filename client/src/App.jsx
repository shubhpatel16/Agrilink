import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import FarmerDashboard from "./FarmerDashboard";
import Navbar from "./components/NavBar";

function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>        
        <Route path='/farmerdashboard' element={<FarmerDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App