import React from "react";
import profileIMG from "../assets/profiles/profile-home.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaDev, FaLinkedin } from "react-icons/fa";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import AchievementCarousel from "../components/AchievementCarousel ";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import GitHubStats from "../components/GitHubStats";
import GeeksforGeeksStats from "../components/GeeksforGeeksStats";
import TechSection from "../components/TechSection";
import RatingSection from "../components/RatingSection";

const Home = () => {
  return (
    <>
      <div className="bg_color flex flex-col justify-center items-center md:flex-row md:justify-around">
        <section className="py-12 px-4 md:px-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold">
                I am a MERN Stack Developer
              </h1>
              <p className="text-lg mt-4">
                I have a strong passion for creating innovative and
                user-friendly web applications
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mt-8"
          >
            <a
              href="https://github.com/your-github-link"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://dev.to/your-dev-to-link"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaDev className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/your-linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mt-8"
          >
            <a
              href="/assets/JoelJaison-Resume.pdf"
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
              download
            >
              Download Resume
            </a>
          </motion.div>
        </section>

        <section className="py-12 px-4 md:px-0 md:w-1/2">
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
                <img
                  src={profileIMG}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <TechStack />
      <Education />
      <AchievementCarousel />
      <BlogSection />
      <TechSection/>
      <div className="w-full h-auto flex justify-center">
        <GitHubStats />
      </div>
      <div className="w-full h-auto flex justify-center">
        <GeeksforGeeksStats />
      </div>
      <RatingSection/>

      <Footer />
    </>
  );
};

export default Home;
