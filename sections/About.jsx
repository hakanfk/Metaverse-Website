/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className="relative z-10 md:px-6 md:py-12 py-4 flex flex-col justify-center items-center ">
    <div className="gradient-02 z-20" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col md:mx-auto w-full justify-center items-center z-20"
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-secondary-white text-[39px] font-extrabold "
      >
        About Metaversus
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="text-secondary-white text-[18px] font-normal mx-6 text-center lg:mx-[400px] mt-6 "
      >
        To help you get a sense of how vague and complex a term “the metaverse”
        can be, here's an exercise: Mentally replace the phrase “the metaverse”
        in a sentence with “cyberspace.” Ninety percent of the time, the meaning
        won't substantially change. That's because the term doesn't really refer
        to any one specific type of technology, but rather a broad (and often
        speculative) shift in how we interact with technology. And it's entirely
        possible that the term itself will eventually become just as antiquated,
        even as the specific technology it once described becomes commonplace.
        really refer to any one specific type of technology, but rather a broad
        (and often speculative) shift in how we interact with technology. And
        it's entirely possible that the term itself will eventually become just
        as antiquated, even as the specific technology it once described becomes
        commonplace.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.9, 1)}
        src="/arrow-down.svg"
        alt="arrow"
        className=" mt-8"
      />
    </motion.div>
  </section>
);

export default About;
