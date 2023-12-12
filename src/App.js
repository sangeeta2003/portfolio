// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router className="flex h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path ="/skills" element={<Skills/>}/>
        
<Route path="/contact" element={<Contact />} />

        {/* Add routes for other pages (Skills, Projects, etc.) */}
      </Routes>
    </Router>
  );
};

export default App;
