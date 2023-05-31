"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { exploreWorlds, startingFeatures } from "../constants";
import { StartSteps } from "../components";

const GetStarted = () => (
  <section className="px-16 py-4 ">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-row w-full justify-around "
    >
      <motion.div
        className=" flex-1 object-contain "
        variants={planetVariants("left")}
      >
        <img src="/get-started.png" alt="getStarted" />
      </motion.div>
      <motion.div
        className=" flex-1 ml-8 mt-6 "
        variants={fadeIn("right", "tween", 0.5, 1)}
      >
        <p className=" font-extralight text-gray-300 text-[16px] ">
          |How Metaversus Works
        </p>
        <p className=" font-extrabold text-white text-[44px] text-start ">
          {" "}
          Get Started With <br /> Just a Few <br /> Clicks{" "}
        </p>
        {startingFeatures.map((item, index) => {
          return <StartSteps key={index} number={index} title={item} />;
        })}
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
