import './App.scss';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Layout from './Components/Layout/index'
import Home from './Components/Home/index'
import About from './Components/About/index'
import Contact from './Components/Contact/index'
import Projects from './Components/Projects/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="project" element={<Projects />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
