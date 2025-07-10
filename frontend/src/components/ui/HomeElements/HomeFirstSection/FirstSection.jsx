import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { firstSectionStyles } from "./FirstSection.styles";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const HomeFirstSection = () => {
  return (
    <section className={firstSectionStyles.heroSection}>
      <motion.div
        className={firstSectionStyles.heroContent}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.span
          className={firstSectionStyles.subtitle}
          variants={fadeUp}
          custom={1}
        >
          Design Your Dream PC
        </motion.span>

        <motion.h1
          className={firstSectionStyles.mainTitle}
          variants={fadeUp}
          custom={2}
        >
          Build The Perfect
          <br />
          PC For Your Needs
        </motion.h1>

        <motion.p
          className={firstSectionStyles.description}
          variants={fadeUp}
          custom={3}
        >
          Customize, configure, and compare PC builds with our powerful,
          easy-to-use platform. Take control of your next PC build experience.
        </motion.p>

        <motion.div
          className={firstSectionStyles.buttonGroup}
          variants={fadeUp}
          custom={4}
        >
          <Link to={"/configurator"}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRightAlt />}
              sx={firstSectionStyles.primaryButton}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building
            </Button>
          </Link>

          <Link to={"/builds"}>
            <Button
              variant="outlined"
              size="large"
              sx={firstSectionStyles.secondaryButton}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Recommended Builds
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className={firstSectionStyles.buildCard}
        style={firstSectionStyles.bgimage}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <div className={firstSectionStyles.cardContent}>
          <h3 className={firstSectionStyles.cardSubtitle}>Gaming Build</h3>
          <h2 className={firstSectionStyles.cardTitle}>
            Ultimate Gaming Rig 2023
          </h2>
          <p className={firstSectionStyles.cardPrice}>Starting at $1,299</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeFirstSection;
