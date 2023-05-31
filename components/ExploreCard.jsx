/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, active, index, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${active === id ? "flex-[7]" : "flex-[2]"} 
    flex items-center justify-center h-[700px] transition-[flex] duration-[1s] ease-out-flex  cursor-pointer `}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-full h-full object-cover rounded-3xl "
    />
    {active !== id ? (
      <h3 className="font-bold text-white absolute bottom-20 text-[20px] -rotate-90 ">
        {title}
      </h3>
    ) : (
      <div className="flex flex-col justify-center items-center absolute bottom-0 bg-[rgba(0,0,0,0.5)]  w-full h-1/4  ">
        <div className=" glassmorphism h-[60px] w-[60px] rounded-xl flex justify-center items-center ">
          <img
            src="/headset.svg"
            alt="lol"
            className="object-contain text-center h-3/4 w-3/4 "
          />
        </div>
        <p className="font-normal text-white text-[15px] leading-[18px] mt-3 ">
          Enter the Metaverse
        </p>
        <p className="font-extrabold text-white text-[23px] leading-[23px] mt-3 ">
          {title}
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
