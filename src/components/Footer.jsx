import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const navLinkStyles = {
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.3s',
    '&:hover': {
      color: 'gray-300',
    },
  };

  return (
    <InView as="div" onChange={(inView) => console.log(inView)} threshold={0.2}>
      <motion.footer
        className="bg-gray-900 py-8 px-4 text-white"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <nav className="mb-4 md:mb-0 flex flex-wrap justify-center md:justify-start">
            <NavLink
              to="/"
              className="mr-4 mb-2 md:mb-0"
              style={navLinkStyles}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="mr-4 mb-2 md:mb-0"
              style={navLinkStyles}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="mr-4 mb-2 md:mb-0"
              style={navLinkStyles}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="mr-4 mb-2 md:mb-0"
              
              style={navLinkStyles}
            >
              Contact
            </NavLink>
          </nav>
          <div className="text-center md:text-left">
            <p className="text-white mb-2">
              "Code is like humor. When you have to explain it, it’s bad."
            </p>
            <p className="text-white text-sm">&copy; 2023 joeljaison.me , All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </InView>
  );
};

export default Footer;

