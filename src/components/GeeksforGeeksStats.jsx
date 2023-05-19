import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const GeeksforGeeksStats = () => {
  const [profileData, setProfileData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://magnificent-cyan-tights.cyclic.app/profile/joeljaison394");
        const data = response.data;
        setProfileData(data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const handleHover = (e) => {
    e.target.classList.add("hover:bg-gray-300");
  };

  const handleHoverExit = (e) => {
    e.target.classList.remove("hover:bg-gray-300");
  };

  return (
    <div className="py-4 w-full flex-col justify-center">
      <h2 className="text-2xl font-bold text-center mb-4">GeeksforGeeks Stats</h2>
      {isFetching ? (
        <p className="text-center">Loading...</p>
      ) : profileData && profileData.error ? (
        <p className="text-center">Profile Not Found</p>
      ) : (
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            key="statsGrid"
          >
            <motion.div
              className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              <h3 className="text-xl font-bold">Solved</h3>
              <p className="text-3xl font-bold">{profileData.solvedProblemsCount}</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              <h3 className="text-xl font-bold">Coding Score</h3>
              <p className="text-3xl font-bold">{profileData.overallScore}</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              <h3 className="text-xl font-bold">Rank</h3>
              <p className="text-3xl font-bold">{profileData.rank}</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              <h3 className="text-xl font-bold">Institution</h3>
              <p className="text-lg">{profileData.institution}</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              <h3 className="text-xl font-bold">Longest Streak</h3>
              <p className="text-lg">{profileData.longestStrek}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default GeeksforGeeksStats;
