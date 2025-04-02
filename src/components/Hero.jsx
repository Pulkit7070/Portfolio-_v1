import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import herobg from "../assets/herobg.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Social Icons - Now properly positioned and clickable */}
      

      {/* Left Content: Name & Intro */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Left: Circle & Line */}
        <div className="flex flex-col justify-center items-center mt-[40px]">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-[40vh] h-[14vh] violet-gradient" />
        </div>

        {/* Middle: Text */}
<div className="max-w-2xl mt-[40px]"> 
  <h1 className={`${styles.heroHeadText} text-xl text-white`}>
    Hi, I am <span className="text-[#a38bd7]">Pulkit</span>
  </h1>
  <p
    className={`${styles.heroSubText} text-white-100`}
    style={{ fontSize: "20px", marginTop: "12px" }} 
  >
    I build web applications, design user interfaces, and explore machine learning.
  </p>
</div>
        <div className="absolute top-[1px] right-[5px] mb-5 flex gap-6 z-10">
        <a href="https://drive.google.com/file/d/1L-lDw5xORaofTZa2Fp6SMuEtzCpnDkYu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div className="text-gray-300 text-2xl hover:scale-110 transition duration-300 cursor-pointer">CV</div>
        </a>
        <a href="https://www.linkedin.com/in/pulkit-saraf-893213290/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#0077B5] text-2xl hover:scale-110 transition duration-300 cursor-pointer" />
        </a>
        <a href="https://github.com/Pulkit7070" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-300 text-2xl hover:scale-110 transition duration-300 cursor-pointer" />
        </a>
        <a href="https://x.com/PulkitSaraf7" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-[#1DA1F2] text-2xl hover:scale-110 transition duration-300 cursor-pointer" />
        </a>
      </div>
      </div>

      {/* 🌟 Right Side: Animated Blob SVG */}
      <motion.div
        className="absolute right-0 bottom-[-50px] w-[600px] h-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            fill="#ff66b2"
            animate={{
              d: [
                "M36.4,-52.7C50.8,-46,69.8,-39.4,77.8,-25.4C85.7,-11.4,82.6,10,72.6,24.5C62.5,38.9,45.6,46.4,30.2,54.7C14.7,63,0.6,72,-17.5,75.3C-35.6,78.6,-57.8,76.1,-69.1,62.3C-80.5,48.6,-80.9,23.7,-80.3,-1.3C-79.7,-26.3,-78.1,-52.7,-64.3,-61.2C-50.5,-69.6,-25.2,-60.1,-5,-54.4C15.2,-48.7,30.3,-46,36.4,-52.7Z",
                "M50.2,-63.5C64.2,-53.7,74.2,-35.9,74.7,-18.9C75.2,-2,66.3,14.2,57.7,29.4C49.1,44.6,40.8,58.9,28.3,67.1C15.8,75.4,-1,77.6,-17.1,74.5C-33.1,71.3,-48.5,62.7,-62.5,49.4C-76.4,36.1,-89,18,-88.4,0.6C-87.8,-16.8,-74.1,-33.5,-60.4,-44.9C-46.7,-56.3,-33,-62.4,-18.7,-67.4C-4.4,-72.4,10.6,-76.4,25.6,-72.8C40.7,-69.2,55.7,-58,50.2,-63.5Z"
              ],
              fill: ["#ff66b2", "#915eff"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            transform="translate(100 100)"
          />
        </svg>
      </motion.div> 

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center sm:bottom-10 xs:bottom-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
