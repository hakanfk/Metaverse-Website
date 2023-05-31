"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="relative py-8 px-12"
  >
    <div className="footer-gradient" />
    <div className=" w-full flex flex-col mx-auto gap-8 px-12 ">
      <div className=" flex items-center justify-around flex-wrap gap-5 ">
        <h4 className="font-bold text-[44px] text-white ">
          Enter The Metaverse
        </h4>
        <button
          type="button"
          className="flex rounded-[28px] bg-cyan-700 w-[90px] h-[60px] items-center justify-center blur
          hover:blur-none hover:scale-125
        "
        >
          <img src="/headset.svg" alt="headset" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[37px] h-[2px] bg-white opacity-10 " />
        <div className="flex flex-row justify-between w-full px-12">
          <p className="text-white text-[33px] font-thin">Metaversus</p>
          <div className="flex flex-row gap-8">
            <img
              src="/instagram.svg"
              alt="instagram"
              className="w-[30px] h-[30px] "
            />
            <img
              src="/facebook.svg"
              alt="instagram"
              className="w-[30px] h-[30px] "
            />
            <img
              src="/linkedin.svg"
              alt="instagram"
              className="w-[30px] h-[30px] "
            />
            <img
              src="/twitter.svg"
              alt="instagram"
              className="w-[30px] h-[30px] "
            />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
