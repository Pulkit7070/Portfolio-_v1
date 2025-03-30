import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball"; // Ensure correct import
import { textVariant } from "../utils/motion"; // Ensure this function exists
import { styles } from "../styles"; // Ensure correct import
import { motion } from "framer-motion"; 

const Tech = () => {
  console.log("Technologies Data:", technologies); // Debugging

  return (
    <div className="flex flex-col ">
      {/* Motion Header Section */}
      <motion.div variants={textVariant()} className="text-left">
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>

      {/* Technologies Grid */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
