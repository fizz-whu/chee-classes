import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Instructor from './pages/Instructor';
import Pricing from './pages/Pricing';
import Community from './pages/Community';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
