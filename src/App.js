import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About us</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;