import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./screens/Home";
import { Router,Routes,Route } from 'react-router-dom';
import Contacts from './screens/Contacts';
import About from './screens/About';
import Programs from './screens/Programs';
import EduContent from './screens/EduContent';
import Dashboard from './screens/Dashboard';
import Mumbai from './screens/Mumbai';
import Thane from './screens/Thane';
import Pune from './screens/Pune';
function App() {
  return (
    <div>
 
    
  
       <Routes>
          <Route exact path="*" element={ <Home/> } />
          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/contacts" element ={<Contacts />}> </Route>
          <Route exact path = "/programs" element={<Programs />} />
          <Route exact path = "/educontent" element={<EduContent />} />
          <Route exact path ="/dashboard" element={<Dashboard />} />
          <Route exact path ="/mumbai" element={<Mumbai />} />
          <Route exact path ="/thane" element={<Thane />} />
          <Route exact path ="/Pune" element={<Pune />} />
        </Routes> 
    </div>


 )}
export default App

//  {/* <Route exact path='/login' element={<Login/>} />
//<Route exact path='/signup' element={<Signup/>} />
//<Route exact path='/myOrder' element={<MyOrder />} /> */}