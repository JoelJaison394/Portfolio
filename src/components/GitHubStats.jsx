import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const GitHubStats = () => {
  const [contributions, setContributions] = useState([]);
  const [commits, setCommits] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [issues, setIssues] = useState(0);
  const [stars, setStars] = useState(0);
  const [isFetching, setIsFetching] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    axios
      .get("https://api.github.com/users/JoelJaison394")
      .then((response) => {
        const user = response.data;

        setCommits(user.total_commits);
        setFollowers(user.followers);
        setIssues(user.public_repos);
        setStars(user.public_repos);
        setIsFetching(false);
      });
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleHover = (e) => {
    e.target.classList.add("hover:bg-gray-300");
  };

  const handleHoverExit = (e) => {
    e.target.classList.remove("hover:bg-gray-300");
  };

  return (
    <div ref={ref} className="py-4">
      <h2 className="text-2xl font-bold text-center mb-4">GitHub Stats</h2>
      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 justify-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <h3 className="text-xl font-bold">Commits</h3>
          <p className="text-3xl font-bold">{isFetching ? "-" : commits}</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <h3 className="text-xl font-bold">Followers</h3>
          <p className="text-3xl font-bold">{isFetching ? "-" : followers}</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <h3 className="text-xl font-bold">Issues</h3>
          <p className="text-3xl font-bold">{isFetching ? "-" : issues}</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <h3 className="text-xl font-bold">Stars</h3>
          <p className="text-3xl font-bold">{isFetching ? "-" : stars}</p>
        </motion.div>
        <motion.div
          className="col-span-2 md:col-span-4 lg:col-span-6 p-2 bg-gray-200 rounded-lg"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <GitHubCalendar username="JoelJaison394" fullYear={false} responsive={true} tooltips={true} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GitHubStats;

