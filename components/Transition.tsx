"use client";

import { transitionVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { Fragment } from "react";

const Transition = ({children}: {children?: React.ReactNode}) => {
  return (
    <Fragment key="route_transition_animator">
      <motion.div
        className="fixed top-0 bottom-0 w-screen h-screen right-full z-50 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        animate="animate"
        exit="exit"
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 w-screen h-screen right-full z-40 bg-[#3b2d71]"
        variants={transitionVariants}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        initial="initial"
        animate="animate"
        // exit="exit"
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 w-screen h-screen right-full z-30 bg-[#4b3792]"
        variants={transitionVariants}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        initial="initial"
        animate="animate"
        // exit="exit"
      ></motion.div>
      {/* {children} */}
    </Fragment>
  );
};

export default Transition;
