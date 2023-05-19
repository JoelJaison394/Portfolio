import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import donbosco from '../assets/education/DonBosco-logo.94e4fe7746d2135d4a76.png'
import sahrdaya from '../assets/education/Sahrdaya-logo.b08496d520294613fc6a.png'

const Education = () => {
  const educationItems = [
    {
      title: 'B.Tech Engineering (CS)',
      institution: 'Sahrdaya College of Engineering and Technology',
      year: 'Present',
      logo:sahrdaya , 
      isCurrent: true,
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Don Bosco Higher Secondary School, Irinjalakuda',
      year: '2019-2021',
      logo: donbosco, 
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-gray-100" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className={`p-6 rounded-lg shadow ${
                  item.isCurrent ? 'bg-blue-200' : 'bg-white'
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-10 h-10 mr-4 rounded-full"
                  />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-700 mb-1">{item.institution}</p>
                <p className="text-gray-700">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;





