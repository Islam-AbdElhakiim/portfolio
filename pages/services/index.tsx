"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "@/utils";

const Services = () => {
  return (
    <section className="w-full h-full">
      <div className="w-full h-[calc(100vh-120px-70px)] mt-[130px] flex flex-col justify-center items-end px-5 lg:mx-auto  lg:max-w-[85%] lg:flex-row xl:max-w-[60%] gap-10">
        {/* left => Text */}
        <motion.div
          className="flex flex-col w-full h-[40%] text-center lg:text-start lg:w-[40%] lg:h-[70%]"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="font-extrabold text-[32px]">My Services</h1>
          <p>
          I always try to control the full design cycle, starting from the Idea, through crafting the UI & User Flows to the fully well-served implementation<span className="text-accent text-2xl">.</span>
          </p>
        </motion.div>

        {/* right => Swapper */}
        <motion.div 
          className="w-full h-[40%] sm:h-[60%] lg:w-[60%] lg:h-[70%]"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          >
          <ServiceSlider />
        </motion.div>

        {/* Planet */}
        <div className="hidden xl:block absolute -bottom-10 -right-10 mix-blend-color-dodge ">
          <Image
            src="/circles.png"
            alt="Circles Image"
            width={300}
            height={300}
            draggable="false"
          />
        </div>
        {/* Bulb */}
        <div className="hidden xl:block absolute -bottom-16 -left-36 mix-blend-color-dodge ">
          <Image
            src="/bulb.png"
            alt="Circles Image"
            width={260}
            height={260}
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
