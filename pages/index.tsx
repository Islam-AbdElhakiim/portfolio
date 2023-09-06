// "use client";
import Avatar from "@/components/Avatar";
import CallToAction from "@/components/CallToAction";
import ParticlesWrapper from "@/components/ParticlesWrapper";
import { fadeIn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";

const Home = () => {
  return (
    <motion.section className=" h-full bg-primary flex flex-col justify-center px-10 xl:pt-20 xl:px-[20%] xl:justify-start xl:flex-row ">
      {/* Text */}
      <div className="font-bold flex flex-col items-center xl:items-start justify-center mt-16">
        {/* Title */}
        <div className=" h1 xl:w-8/12">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-3xl text-left md:text-center lg:text-4xl lg:text-left xl:text-6xl"
          >
            Transforming Ideas Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
        </div>

        {/* Description */}
        <div className=" -mt-5 font-semibold max-w-[500px] xl:mt-0 xl:w-1/2" >
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-left md:text-center stroke-black "

          >
            Building something from scratch is one of the most rewarding experinces you can have." -unknown
          </motion.p>
        </div>
        {/* Projects */}
        <div className="projects mt-10 z-20">
          <CallToAction />
        </div>
      </div>

      {/* Explosion Image */}
      <div className=" w-[1280px] h-full absolute bottom-0 right-0 ">
        <div className="bg-none xl:bg-explosion w-full h-full mix-blend-color-dodge opacity-50 bg-right bg-no-repeat relative "></div>
      </div>

      {/* Avatar Image */}
      <motion.div
        className="hidden xl:block absolute right-24 -bottom-10 z-20"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        transition={{duration:1, ease:'easeInOut'}}
        animate="show"
        exit='hidden'
      >
        <Avatar />
      </motion.div>

      {/* Particles */}
      <ParticlesWrapper />
    </motion.section>
  );
};

export default Home;
