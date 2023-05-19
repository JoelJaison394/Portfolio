import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarRating from "./StarRating";

const RatingSection = () => {
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [allRatingsVisible, setAllRatingsVisible] = useState(false);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await axios.get("https://magnificent-cyan-tights.cyclic.app/api/ratings");
      setRatings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitRating = async () => {
    if (rating === 0 || !username || !email) {
      alert("Please provide a rating, username, and email.");
      return;
    }

    try {
      await axios.post("https://magnificent-cyan-tights.cyclic.app/api/ratings", { rating, username, email });
      setRating(0);
      setUsername("");
      setEmail("");
      fetchRatings();
    } catch (error) {
      console.log(error);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const revealAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const latestRatings = ratings.slice(0, 3);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Rate Me</h2>
        <p className="text-gray-500 text-center mb-6">Tell me what you think about my services.</p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={revealAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center mb-4">
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
              <button onClick={submitRating} className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit Rating
              </button>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              {latestRatings.map((rating) => (
                <motion.div
                  key={rating._id}
                  initial="hidden"
                  animate="visible"
                  variants={revealAnimation}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-4 mb-4 border border-gray-300 rounded">
                    <StarRating rating={rating.rating} readonly />
                    <p className="text-gray-600 mt-2">
                      Rated by <span className="font-bold">{rating.username}</span> ({rating.email})
                    </p>
                  </div>
                </motion.div>
              ))}
              {allRatingsVisible ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={revealAnimation}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-bold mb-4">All Ratings:</h3>
                  {ratings.map((rating) => (
                    <div key={rating._id} className="p-4 mb-4 border border-gray-300 rounded">
                      <StarRating rating={rating.rating} readonly />
                      <p className="text-gray-600 mt-2">
                        Rated by <span className="font-bold">{rating.username}</span> ({rating.email})
                      </p>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.button
                  onClick={() => setAllRatingsVisible(true)}
                  className="mt-4 underline text-blue-500"
                  initial="hidden"
                  animate="visible"
                  variants={revealAnimation}
                  transition={{ duration: 0.5 }}
                >
                  Show All Ratings
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;





