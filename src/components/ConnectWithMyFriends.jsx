import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const FriendCard = ({
  name,
  stack,
  contactInfo,
  hasPortfolio,
  portfolioLink,
  linkedinLink,
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
          className="bg-white rounded-lg shadow-md p-4"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-2">Stack: {stack}</p>
          <p className="text-gray-600 mb-4">Contact: {contactInfo}</p>
          {hasPortfolio && (
            <a
              href={portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 transition-colors"
            >
              Go to Portfolio
            </a>
          )}
          {!hasPortfolio && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 transition-colors"
            >
              Connect with LinkedIn
            </a>
          )}
        </motion.div>
      )}
    </InView>
  );
};

const ConnectWithFriends = () => {
  const friendsData = [
    {
      id: 1,
      name: "Vivek K J",
      stack: "Front-end Development",
      contactInfo: "vivekkj2004@gmail.com",
      hasPortfolio: true,
      portfolioLink: "https://vivekkj.codes",
      linkedinLink: "https://www.linkedin.com/in/vivekkj2004",
    },
    {
      id: 2,
      name: "Leonard K B",
      stack: "Front-end Development",
      contactInfo: "leonardkb9@gmail.com",
      hasPortfolio: true,
      portfolioLink: "https://leonard12f3.github.io/leonardsstudio/index.html",
      linkedinLink: "https://www.linkedin.com/in/leonardkb9",
    },
    {
      id: 3,
      name: "Rahul A B",
      stack: "Full stack Web Development",
      contactInfo: "rahulbushi69@gmail.com",
      hasPortfolio: true,
      portfolioLink: "https://www.rahulab.live/",
      linkedinLink: "https://www.linkedin.com/in/rahul-a-b-0044b1232/ ",
    },
    {
      id: 4,
      name: "Haris Josin Peter",
      stack: "Mobile App Development",
      contactInfo: "harisjosinpeter@gmail.com",
      hasPortfolio: false,
      linkedinLink: "https://www.linkedin.com/in/harisjosinpeter",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Connect with Friends
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {friendsData.map((friend) => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              stack={friend.stack}
              contactInfo={friend.contactInfo}
              hasPortfolio={friend.hasPortfolio}
              portfolioLink={friend.portfolioLink}
              linkedinLink={friend.linkedinLink}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectWithFriends;
