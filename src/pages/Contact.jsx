import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Footer from "../components/Footer";
import ConnectWithFriends from "../components/ConnectWithMyFriends";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://magnificent-cyan-tights.cyclic.app/api/contact",
        {
          name,
          email,
          message,
        }
      );

      if (response.status === 200) {
        setSuccessMessage(
          "Your message has been sent. We will get back to you soon!"
        );
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <section className="min-h-screen flex items-center py-12 bg_color">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <InView
            as="div"
            onChange={(inView) => {
              console.log("Form is in view:", inView);
            }}
          >
            <motion.div
              className="max-w-md mx-auto bg-white p-6 rounded shadow"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3 }}
            >
              {successMessage && (
                <div className="bg-green-200 text-green-800 px-4 py-2 rounded mb-4">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-200 text-red-800 px-4 py-2 rounded mb-4">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </InView>
        </div>
      </section>
      <ConnectWithFriends/>
      <Footer />
    </>
  );
};

export default ContactPage;
