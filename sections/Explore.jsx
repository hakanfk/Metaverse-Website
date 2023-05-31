'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants'

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className="px-6 py-6 mt-[100px] "
      id="explore"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col mx-auto w-full 2xl:max-w-[1280px] justify-center items-center "
      >
        <motion.p className="text-secondary-white font-extrabold text-[24px] ">
          |The World
        </motion.p>
        <motion.p className="text-secondary-white font-extrabold text-[44px] text-center mt-6">
          Choose The World You Want <br className="" /> to Explore
        </motion.p>
        <div className="flex flex-row min-h-[70vw] gap-9 mt-11">
          {exploreWorlds.map((world, index) => {
            return (
              <ExploreCard index={index} key={world.id} {...world} active={active} handleClick={setActive}
              />
            )
          })}
        </div>
      </motion.div>
    </section>

  )
}

export default Explore;
