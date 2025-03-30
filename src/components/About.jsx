import React from "react";
import Tilt from "react-parallax-tilt"; 

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.05}
      transitionSpeed={450}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h2 className="text-[20px] font-bold text-white text-center">
            {title}
          </h2>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-6">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have a strong foundation in computer science with hands-on experience
        in web development, backend systems, and machine learning. My skills
        span HTML, CSS, JavaScript, Python, MySQL, C, and C++, and I’ve been
        expanding my expertise in backend development and AI-driven
        applications. I enjoy breaking down complex problems, optimizing
        systems, and building solutions that work at scale. Always exploring
        new technologies, I’m looking for opportunities to apply my skills,
        refine my backend and ML knowledge, and contribute to impactful
        projects.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
