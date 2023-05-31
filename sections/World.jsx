"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

const World = () => (
  <section className="px-12 py-6 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-8 mx-auto w-full justify-center items-center "
    >
      <p className="text-center text-[16px] font-thin text-gray-300 ">
        |People Over The World
      </p>
      <motion.div
        variants={fadeIn("right", "spring", 0.777, 0.987)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="h-5/6 w-5/6  "
      >
        <div className="mb-[35px]">
          <p className="font-extrabold text-6xl md:text-[60px] text-white text-center ">
            Track People Around The World And Invite Them to Play With You
          </p>
        </div>
        <div className="relative">
          <img
            src="/map.png"
            alt="peopledAllOverTheWorld"
            className="w-full h-full object-cover"
          />

          <div className=" absolute bottom-[10%] left-[10%] md:w-20 md:h-20 w-12 h-12  rounded-full  shadow-2xl shadow-blue-600 ">
            <img src="/people-01.png" alt="person-01" className="relative " />
          </div>
          <div className=" absolute top-[25%] right-[50%] md:w-20 md:h-20 w-12 h-12  rounded-full shadow-2xl shadow-red-600 ">
            <img src="/people-03.png" alt="person-01" />
          </div>
          <div className=" absolute bottom-[35%] right-[33%] md:w-20 md:h-20 w-12 h-12  rounded-full shadow-2xl shadow-green-600 ">
            <img src="/people-02.png" alt="person-01" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
