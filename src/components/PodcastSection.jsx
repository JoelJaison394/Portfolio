import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const PodcastSection = () => {
  const [isInView, setIsInView] = useState(false);


  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ellipsisVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <InView as="div" threshold={0.2} onChange={setIsInView}>
          <motion.div
            className="mt-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="relative z-10 bg-white p-8 rounded-lg shadow-md">
              <motion.h2 className="text-3xl font-bold text-gray-800 mb-4">
                Podcasts
              </motion.h2>
              <motion.p className="text-lg text-gray-800 mt-4">
                Coming Soon
                <motion.span
                  className="inline-block ml-1"
                  variants={ellipsisVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  ...
                </motion.span>
              </motion.p>
            </motion.div>
          </motion.div>
        </InView>
      </div>
    </section>
  );
};

export default PodcastSection;

