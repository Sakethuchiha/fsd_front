import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Navbar from './components/Navbar';
import './App.css';

import Aboutus from './pages/Aboutus';

import Footer from './components/Footer';
import Home from './pages/Home';




function App() {
  return (
    <Router>
      <>
        <div className='bg-[#E9EBE7] '>
        <Navbar />
     
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/Aboutus" element={<Aboutus />} />
            
          
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
