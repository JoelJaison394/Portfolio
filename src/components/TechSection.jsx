import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const TechSection = () => {
  const techStack = [
    {
      tech: "Blockchain",
      resources: [
        {
          name: "gamified solidity learning",
          link: "https://cryptozombies.io/en/course/",
        },
        {
          name: "Solidity Official Documentation",
          link: "https://docs.soliditylang.org/en/latest/",
        },
      ],
      opinion:
        "Blockchain is an emerging field of scope with numerous advancements and concepts to learn.",
    },
    {
      tech: "Rust",
      resources: [
        {
          name: "The Rust Programming Language Book",
          link: "https://doc.rust-lang.org/book/",
        },
        {
          name: "Rust Crash Course by Traversy Media",
          link: "https://www.youtube.com/watch?v=zF34dRivLOw",
        },
      ],
      opinion:
        "Rust enables me to develop high-performance and safe systems-level applications.",
    },
    {
      tech: "TensorFlow",
      resources: [
        {
          name: "TensorFlow Documentation",
          link: "https://www.tensorflow.org/api_docs",
        },
        {
          name: "TensorFlow Tutorials",
          link: "https://www.tensorflow.org/tutorials",
        },
      ],
      opinion:
        "TensorFlow empowers me to build and deploy machine learning models with ease.",
    },

  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Tech I'm Currently Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((item, index) => (
            <InView key={index} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="bg-white shadow-md rounded-lg p-4"
                >
                  <h3 className="text-xl font-bold mb-2">{item.tech}</h3>
                  <p className="mb-4">{item.opinion}</p>
                  <h4 className="font-bold mb-2">Resources:</h4>
                  <ul className="list-disc ml-6">
                    {item.resources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
