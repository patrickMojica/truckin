import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import  Home from './components/pages/Home';
import Footer from './components/Footer';
import ServiceArea from './components/pages/ServiceArea';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' exact element={<ServiceArea />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App;
