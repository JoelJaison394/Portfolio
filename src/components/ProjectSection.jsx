import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import owliee from '../assets/projects/owliee.png';
import volunteer from '../assets/projects/slice 6.png';
import bytes from '../assets/projects/byte-bites.png';
import netflix from '../assets/projects/netflix.png';
import eGuide from '../assets/projects/E-Guide.png';
import tekwiza from '../assets/projects/tekwiza.png';

const ProjectCard = ({
  image,
  title,
  description,
  viewCodeLink,
  liveLink,
  isComingSoon = false,
  hasLiveDemo = true,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <InView as="div" threshold={0.2}>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="relative">
            {isComingSoon && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center rounded-lg">
                <span className="text-white text-lg font-semibold">
                  Coming Soon
                </span>
              </div>
            )}
            <img
              src={image}
              alt={title}
              className="w-64 h-40 object-cover rounded-lg mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex space-x-4">
            <a
              href={viewCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 transition-colors"
            >
              View Code
            </a>
            {hasLiveDemo ? (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 transition-colors"
              >
                Live Demo
              </a>
            ) : (
              <button className="bg-gray-300 text-gray-500 rounded-md px-4 py-2 cursor-not-allowed" disabled>
                Live Demo
              </button>
            )}
          </div>
        </motion.div>
      )}
    </InView>
  );
};

const ProjectPage = () => {
  const coreProjects = [
    {
      id: 1,
      title: 'Be A Volunteer',
      description: 'Be a Volunteer" is a comprehensive platform designed to connect volunteers and NGOs (Non-Governmental Organizations), bringing volunteer events to everyone. The project includes both a web application and a mobile app, offering convenient access to volunteer opportunities and serving as a marketing platform for NGOs.The project aims to bridge the gap between volunteers and NGOs by offering a centralized platform where users can discover volunteer opportunities and connect with organizations working towards social causes',
      coverImage: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555116/Slice_6_isoqjy.png",
      codeLink: 'https://github.com/JoelJaison394/Byte-Bites',
      liveLink: 'https://github.com/JoelJaison394/Byte-Bites',
      isComingSoon: true,
      hasLiveDemo: false,
    },
    {
      id: 2,
      title: 'Byte Bites',
      description: 'Byte Bites" is a dynamic and feature-rich blogging platform designed to provide an engaging and user-friendly space for content creators to share their thoughts, ideas, and expertise. With a focus on simplicity and accessibility, Byte Bites aims to empower bloggers and readers alike to explore, discover, and interact within a vibrant community',
      coverImage: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555115/byte-bites_ht3ce7.png",
      codeLink: 'https://github.com/JoelJaison394/Byte-Bites',
      liveLink: 'https://github.com/JoelJaison394/Byte-Bites',
      isComingSoon: true,
      hasLiveDemo: false,
    },
  ];

  const petProjects = [
    {
      id: 1,
      title: 'Owliee',
      description: 'Owliee" is a simple and elegant website designed to showcase the writings, books, and book reviews of my friend. The website serves as a digital platform where visitors can explore and appreciate my friends literary works, get insights into her published books, and read her thoughtful book reviews',
      coverImage: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555118/owliee_lzlr8k.png",
      codeLink: 'https://github.com/JoelJaison394/Owliee',
      liveLink: 'https://joeljaison.live/',
      isComingSoon: false,
      hasLiveDemo: true,
    },
    {
      id: 2,
      title: 'Netflix-Clone',
      description: 'This is a dynamic and immersive Netflix clone that offers an extensive collection of movies and TV shows for users to stream online. Inspired by the popular streaming platform, provides a seamless and user-friendly experience, allowing users to discover, watch, and enjoy their favorite movies and TV series from the comfort of their own homes',
      coverImage: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555118/netflix_qilfbm.png",
      codeLink: 'https://github.com/JoelJaison394/Netflix_Clone',
      liveLink: 'https://netflix-clone-fb10a.web.app/',
      isComingSoon: false,
      hasLiveDemo: true,
    },
  ];

  const academicProjects = [
    {
      id: 1,
      title: 'Waste Management Portal',
      description: 'This is an innovative waste management portal designed to streamline the process of waste collection and disposal. The platform allows users to report and request waste collection services from their households, while administrators can efficiently manage and coordinate the collection process. WasteAway aims to promote proper waste management practices and contribute to a cleaner and healthier environment.',
      coverImage: 'academic-project1.png',
      codeLink: 'https://github.com/JoelJaison394/Waste-Management-Portal',
      liveLink: 'https://github.com/JoelJaison394/Waste-Management-Portal',
      isComingSoon: false,
      hasLiveDemo: false,
    },
    {
        id: 2,
        title: 'E-Guide',
        description: '"e-Guide" is an online platform designed to provide a comprehensive collection of resources for B-Tech students in the Computer Science (CS) branch under the Kerala Technological University (KTU) curriculum. The primary objective of e-Guide is to offer an extensive range of study materials, including textbooks, PDFs, previous year question papers, and other relevant resources to assist students in their academic journey.',
        coverImage: "https://res.cloudinary.com/dxraggwp4/image/upload/v1684555117/E-Guide_seabfh.png",
        codeLink: 'https://github.com/JoelJaison394/E-guide',
        liveLink: 'https://example.com/project6',
        isComingSoon: true,
        hasLiveDemo:false,
      },
  ];

  return (
    <section className="py-12 bg_color">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Core Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coreProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.coverImage}
              title={project.title}
              description={project.description}
              viewCodeLink={project.codeLink}
              liveLink={project.liveLink}
              isComingSoon={project.isComingSoon}
              hasLiveDemo={project.hasLiveDemo}
            />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-4 text-center">
          Pet Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {petProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.coverImage}
              title={project.title}
              description={project.description}
              viewCodeLink={project.codeLink}
              liveLink={project.liveLink}
              isComingSoon={project.isComingSoon}
              hasLiveDemo={project.hasLiveDemo}
            />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-4 text-center">
          Academic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {academicProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.coverImage}
              title={project.title}
              description={project.description}
              viewCodeLink={project.codeLink}
              liveLink={project.liveLink}
              isComingSoon={project.isComingSoon}
              hasLiveDemo={project.hasLiveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
