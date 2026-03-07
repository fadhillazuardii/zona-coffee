import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="md:py-20 py-40">
      <h1 className="text-amber-900 text-5xl text-center">About Us</h1>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-2xl text-amber-900"
        >
          Passion for Perfect Brew
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          Founded in 2010, Bean Haven started as a small coffee cart in the
          heart of the city. Our founder, Jane Doe, had a vision to bring the
          finest, ethically sourced coffee to our community. What began as a
          love for the perfect cup of joe has grown into a thriving business,
          but our core values remain the same. We believe that great coffee is
          an art form. From carefully selecting the best beans from sustainable
          farms around the world to meticulously roasting them to perfection,
          every step in our process is crafted with love and expertise.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
