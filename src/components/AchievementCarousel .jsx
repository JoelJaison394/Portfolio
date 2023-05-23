import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AchievementCarousel = () => {
  const achievements = [
    {
      id: 1,
      image:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684554983/API_x5ixiw.jpg" ,
      caption: 'Postman Student Expert',
    },
    {
        id: 2,
        image:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684554983/api-1_tkhlby.jpg",
        caption: 'My first class as a tutor',
      },
      {
        id: 3,
        image:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684554983/minor-project_l8hndg.jpg",
        caption: 'First Prize for Minor Project in sem-1',
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684554984/zypher_dgqpmg.jpg",
        caption: 'Fourth place in Zypher Hackathon',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
        <InView as="div" onChange={(inView) => setIsVisible(inView)} threshold={0.2}>
          <Slider {...settings}>
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="carousel-slide px-4"
                variants={slideVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
              >
                <img
                  src={achievement.image}
                  alt={achievement.caption}
                  className="w-full max-h-80 object-cover rounded-lg"
                />
                <p className="carousel-caption">{achievement.caption}</p>
              </motion.div>
            ))}
          </Slider>
        </InView>
      </div>
    </section>
  );
};

export default AchievementCarousel;
