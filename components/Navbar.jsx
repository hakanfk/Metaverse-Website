/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-8 relative"
  >
    <div className="absolute w-1/2 inset-0 gradient-01  " />
    <div className="w-full 2xl:max-w-[1280px] flex mx-auto justify-between gap-8 ">
      <img src="/search.svg" alt="search" className="w-6 h-6 object-contain" />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
        METAVERSUS
      </h2>
      <img src="/menu.svg" className="w-6 h-6 object-contain " />
    </div>
  </motion.nav>
);

export default Navbar;
