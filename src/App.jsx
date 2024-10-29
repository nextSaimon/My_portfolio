import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Profile />
          <About />
          <Experience />
          <Contact />
        </>} />
      </Routes>
      <Routes>
        <Route path='/project' element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
