import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=joeljaison394')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
      

      
  }, []);

  const handleInView = (inView) => {
    setIsVisible(inView);
  };

  const blogVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const blogItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Blogs</h2>
        <InView as="div" onChange={handleInView} threshold={0.2}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={blogVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {blogs.map((blog) => (
              <motion.a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={blogItemVariants}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {blog.social_image && (
                  <div className="mb-4">
                    <img src={blog.social_image} alt={blog.title} className="rounded-lg w-full" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </InView>
      </div>
    </section>
  );
};

export default BlogSection;
