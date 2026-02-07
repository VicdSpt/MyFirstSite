import { motion } from "motion/react";
import SectionFullStackBxl from "./SectionFullStackBxl";
import SectionAboutMe from "./SectionAboutMe";
import SectionSkills from "./SectionSkills";
import SectionContact from "./SectionContact";

function MainHomePage() {
  return (
    <div>
      {/* Hero - smooth fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <SectionFullStackBxl />
      </motion.div>

      {/* About - slide from left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <SectionAboutMe />
      </motion.div>

      {/* Skills - slide from right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <SectionSkills />
      </motion.div>

      {/* Contact - fade up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <SectionContact />
      </motion.div>
    </div>
  );
}

export default MainHomePage;
