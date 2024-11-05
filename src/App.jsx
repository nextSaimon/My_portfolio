import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Profile />
              <About />
              <Experience />
              <Contact />
            </>
          }
        />
        <Route path='/project' element={<Project />} />
        <Route path='*' element={<ErrorPage />} />  // Catch-all route for undefined paths
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
