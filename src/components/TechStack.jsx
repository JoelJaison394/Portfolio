import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaServer, FaDatabase, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const TechStack = () => {
  const [hoveredStack, setHoveredStack] = useState(null);

  const stackItems = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaServer /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ];

  const handleStackHover = (index) => {
    setHoveredStack(index);
  };

  const handleStackLeave = () => {
    setHoveredStack(null);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white shadow-md rounded-lg m-4 p-4 flex items-center cursor-pointer"
              onMouseEnter={() => handleStackHover(index)}
              onMouseLeave={handleStackLeave}
            >
              <span className="text-2xl mr-2">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
              {hoveredStack === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center"
                >
                  <span className="text-5xl">{item.icon}</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
