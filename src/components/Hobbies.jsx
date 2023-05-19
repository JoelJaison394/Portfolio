import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import API from '../assets/achivements/API.jpeg';
import Writter from '../assets/achivements/writter.png';
import Drawing from '../assets/achivements/drawing.jpg';

const Hobbies = () => {
  const hobbiesData = [
    {
      id: 1,
      title: "Teaching",
      description: "I like to teach tech-related things to others in a practical way",
      image: API,
    },
    {
      id: 2,
      title: "Writing Blogs",
      description: "I enjoy documenting the things I learn by writing blogs",
      image: Writter,
    },
    {
      id: 3,
      title: "Drawing",
      description: "I love spending my free time with pencil and paper",
      image: Drawing,
    }
  ];

  const hobbiesVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hobbiesData.map((hobby) => (
            <InView key={hobby.id} threshold={0.2}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  className="relative overflow-hidden bg-white rounded-lg shadow-md"
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="aspect-w-3 aspect-h-2">
                    <motion.img
                      src={hobby.image}
                      alt={hobby.title}
                      className="object-cover w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {hobby.title}
                      </h3>
                      <p className="text-gray-300">{hobby.description}</p>
                    </div>
                  </div>
                  {/* Caption for small devices */}
                  <div className="lg:hidden bg-black bg-opacity-75 text-white absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-lg font-semibold mb-2">{hobby.title}</h3>
                    <p className="text-gray-300">{hobby.description}</p>
                  </div>
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
