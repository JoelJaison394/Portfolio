import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none'
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='w-full h-auto flex flex-col md:flex-row justify-center p-4'
    >
      <div className='w-full md:w-7/12 text-center md:text-left mb-4 md:mb-0'>
        <p className='text-3xl text-black'>joel.dev</p>
      </div>
      <div className='w-full md:w-5/12 flex flex-wrap justify-around md:justify-around text-xl'>
        <NavLink to='/' style={navLinkStyles}>
          <li>home</li>
        </NavLink>
        <NavLink to='about' style={navLinkStyles}>
          <li>about</li>
        </NavLink>
        <NavLink to='projects' style={navLinkStyles}>
          <li>project</li>
        </NavLink>
        <NavLink to='contact' style={navLinkStyles}>
          <li>contact</li>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Navbar;

