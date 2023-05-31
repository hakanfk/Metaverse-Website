/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="sm:pl-16 sm:py-16 xs:py-8 py-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col mx-auto 2xl:max-w-[1280px] w-full"
    >
      <div className="flex justify-center items-center  flex-col relative z-10 mr-[58px] ">
        <motion.h1
          variants={textVariant(1.1)}
          className="font-bold text-white  md:leading-[114px] uppercase text-3xl md:text-[104px] "
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.3)}
          className="justify-center items-center"
        >
          <h1 className="font-bold text-white leading-[114px] uppercase text-4xl md:text-[104px]">
            Madness
          </h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.6, 0.3)}
        className="relative w-full md:-mt-[20px] mt-10 lg:-mt-[12px] "
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px] " />
        <img
          src="/cover.png"
          alt="cover"
          className="relative w-[75%] md:w-full sm:h-[500px] h-full md:h-[350px] object-cover rounded-tl-[140px] z-10  "
        />
        <a href="#explore">
          <div className="flex justify-end w-full z-10 -mt-[150px] pr-[40px] relative">
            <img
              src="/stamp.png"
              alt="start"
              className="w-[100px] h-[100px] object-contain "
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
