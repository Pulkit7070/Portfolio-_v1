import React from 'react';
import { styles } from '../styles';
import herobg from "../assets/herobg.jpg";
import ComputersCanvas from './canvas/Computers';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Top Content: Name & Intro */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Left: Circle & Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-[30vh] h-[7vh] violet-gradient" />
        </div>

        {/* Right: Text */}
        <div className="max-w-2xl">
          <h1 className={`${styles.heroHeadText} text-xl text-white`}>
            Hi, I am <span className="text-[#a38bd7]">Pulkit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ fontSize: '20px' }}>
            I build web applications, design user interfaces, and explore
            machine learning
          </p>
        </div>
      </div>

      {/* ✅ Wrapping ComputersCanvas in a centered flex container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <ComputersCanvas />
      </div>

      {/* ✅ Scroll Indicator - Moved lower only for small screens */}
      <div className="absolute bottom-10 w-full flex justify-center items-center sm:bottom-10 xs:bottom-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
