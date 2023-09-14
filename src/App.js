import React from 'react';
import Navbar from './components/Navbar';
import Education from './components/Education.jsx';
import Projects from './components/Projects';
import Home from './components/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {SchoolProjects} from './components/SchoolProjects.jsx';
import { OtherProjects } from './components/OtherProjects';




function App() {
  return (
    <BrowserRouter>
    < Navbar />
    <Routes>
      <Route path = "/" element ={<Home/>}  />
      <Route path = "/Projects" element = {<Projects/>} />
      <Route path = "/Education" element = {<Education/>} /> 
      <Route path = "/Projects/SchoolProjects" element = {<SchoolProjects/>}/>  
      <Route path = "/Projects/OtherProjects" element = {<OtherProjects/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

