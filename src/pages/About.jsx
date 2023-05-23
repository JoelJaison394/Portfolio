import React from "react";
import profileIMG from "../assets/profiles/profile-home.png";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Hobbies from "../components/Hobbies";
import DreamCompanies from "../components/DreamCompanies";
import Footer from "../components/Footer";
import PodcastSection from "../components/PodcastSection";


const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const detailsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const certificateData = [
    {
      id: 1,
      title: "Google Cloud Resource Management",
      issuer: "Google",
      date: "2023",
      image: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555018/Screenshot_2023-05-18_202335_g7nblk.png",
    },
    {
      id: 2,
      title: "Database Management",
      issuer: "MongoDB",
      date: "2023",
      image: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555018/Screenshot_2023-05-18_202413_wpqp3a.png",
    },
    {
      id: 3,
      title: "Javascript-[intermediate]",
      issuer: "HackerRank",
      date: "2022",
      image: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555019/Screenshot_2023-05-18_202444_ci778a.png",
    },
    {
      id: 4,
      title: "Responsive web designing",
      issuer: "Freecode Camp",
      date: "2021",
      image: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555018/Screenshot_2023-05-18_204354_veb1qf.png",
    },
    {
      id: 5,
      title: "Javascript Beginner",
      issuer: "Skill Up",
      date: "2022",
      image: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555018/Screenshot_2023-05-18_204417_sz65eb.png",
    },
  ];

  const certificateVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-auto ml-auto mr-auto p-2">
      <section className="py-12 bg_color">
        <div className="container mx-auto">
          <InView as="div" threshold={0.2}>
            {({ ref, inView }) => (
              <motion.img
                ref={ref}
                src="https://res.cloudinary.com/dxraggwp4/image/upload/v1684555099/profile-home_ujoau0.png"
                alt="Main Image"
                className="mx-auto w-64 h-auto rounded-full"
                variants={imageVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
            )}
          </InView>

          <InView as="div" threshold={0.2}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className="mt-8 text-center"
                variants={detailsVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.div className="relative z-10 bg-white p-8 rounded-lg shadow-md">
                  <p className="text-lg text-gray-800">
                    Hello there! My name is Joel Jaison, and I'm a dedicated web
                    developer with a passion for creating exceptional online
                    experiences.
                  </p>
                  <p className="text-lg text-gray-800 mt-4">
                    As a junior developer, I approach every project with
                    enthusiasm and a thirst for knowledge. I'm constantly
                    refining my coding skills and staying up-to-date with the
                    latest web development trends.
                  </p>
                  <p className="text-lg text-gray-800 mt-4">
                    Currently, I'm actively seeking an internship opportunity
                    where I can contribute my skills and further grow as a
                    professional developer. In my spare time, I'm also exploring Rust to broaden my programming skills., because I
                    believe in constantly challenging myself to learn new
                    technologies.
                  </p>
                  <p className="text-lg text-gray-800 mt-4">
                    Although I may not be a competitive bodybuilder, I
                    definitely have a competitive spirit when it comes to
                    programming. I thrive on pushing boundaries and finding
                    innovative solutions to complex problems.
                  </p>
                  <p className="text-lg text-gray-800 mt-4">
                    If you're looking for a web developer who brings a blend of
                    creativity, technical expertise, and a touch of humor to the
                    table, look no further. I'm confident in my ability to
                    deliver outstanding results and exceed expectations.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      <section className="py-12 bg_color">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Certificates
          </h2>
          <InView as="div" threshold={0.2}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={certificateVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {certificateData.map((certificate) => (
                  <motion.div
                    key={certificate.id}
                    className="bg-white p-4 rounded-lg shadow-md"
                    variants={cardVariants}
                  >
                    <div className="mb-4">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="mx-auto h-40 w-40 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600">{certificate.issuer}</p>
                    <p className="text-gray-600">{certificate.date}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      <Hobbies />
      <div className="w-full ml-auto mr-auto">
        <DreamCompanies />
      </div>

      <PodcastSection />

      <Footer />
    </div>
  );
};

export default About;
