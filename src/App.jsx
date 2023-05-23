import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import './Preloader.css'
import Navbar from './components/Navbar';
const About = React.lazy(() => import('./pages/About'))
import Home from './pages/Home'
const Projects = React.lazy(() => import('./pages/Projects'))
const Contact = React.lazy(() => import('./pages/Contact'))

const App = () => {
  const Preloader = () => (
    <div className="preloader">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
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
