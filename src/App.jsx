import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  const Preloader = () => (
    <div className="preloader">
      <h2>Loading...</h2>
    </div>
  );

  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Element name="home"><Home /></Element>} />
          <Route path="/about" element={<Element name="about"><About /></Element>} />
          <Route path="/projects" element={<Element name="projects"><Projects /></Element>} />
          <Route path="/contact" element={<Element name="contact"><Contact /></Element>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
