import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import leetcodeLogo from "../assets/leeetcode.webp";

const DSAStats = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full sm:w-[360px] flex justify-center"
    >
      <Tilt
        options={{ max: 45, scale: 1.05, speed: 450 }}
        className="w-full bg-tertiary p-5 rounded-2xl shadow-card flex flex-col relative"
      >
        {/* LeetCode Logo */}
        <a
          href="https://leetcode.com/u/Pulkit7070/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-10 h-10"
        >
          <img src={leetcodeLogo} alt="LeetCode" className="w-full h-full object-contain" />
        </a>

        <div className="flex justify-center items-start">
          <div>
            <h3 className="text-white font-bold text-[24px] text-center">LeetCode Mastery</h3>
            <div className="mt-4 text-center">
              <p className="text-white text-[16px]">
                <strong>Problems Conquered:</strong> 84 problems
              </p>
              <p className="text-white text-[16px]">
                <strong>Longest Streak:</strong> 48 days 
              </p>
              <p className="text-white text-[16px]">
                <strong>Daily Challenge Streak:</strong> 57 days 
              </p>
              <p className="text-white text-[14px] mt-2 italic">
                "Every problem solved is a step closer to mastery."
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const DSA = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-6 text-center">
        <p className={styles.sectionSubText}>My Problem-Solving Journey</p>
        <h2 className={styles.sectionHeadText}>DSA & Algorithmic Thinking</h2>
      </motion.div>
      
      {/* Centering the card */}
      <div className="mt-20 flex justify-center items-center">
        <DSAStats />
      </div>
    </>
  );
};

export default SectionWrapper(DSA, "");
