"use client";
import { useState } from "react";
import { aboutData } from "../../constants";
import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils";
import WorkSlider from "@/components/WorkSlider";

const Work = () => {
  const [aboutDataIndex, setAboutDataIndex] = useState(1);
  return (
    <section className="w-full h-full">
      <div className="w-full h-[calc(100vh-120px-70px)] mt-[130px] flex flex-col justify-center px-5 lg:mx-auto  lg:max-w-[85%] lg:flex-row xl:max-w-[60%] gap-10 items-center lg:items-end">
        {/* left => Text */}
        <motion.div
          className="flex flex-col w-full h-[40%] text-center lg:text-start lg:w-[40%] lg:h-[70%]"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
       <h1 className="font-extrabold text-[32px] mb-5">
         My Work<span className="text-accent">.</span>
       </h1>
       <p className="px-2">
         Because I don&apos;t have the right to publish my major works, I&apos;ve created some live templates for portfolio purposes, and they&apos;re always under development<span className="text-accent text-2xl">.</span>
       </p>
        </motion.div>

        {/* right => Swapper */}
        <motion.div 
          className="w-[300px] h-[60%]"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          >
          <WorkSlider />
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
      </div>
    </section>
  );
};

export default Work;

// <section className="w-full h-full">
//   <motion.div
//     variants={fadeIn("down", 0.2)}
//     initial="hidden"
//     animate="show"
//     exit="hidden"
//     className="w-full h-[calc(100vh-120px-70px)] mt-[130px] border px-10 flex flex-col justify-center items-end mx-auto md:max-w-[60%] xl:flex-row"
//   >
//     {/* Text  => Left*/}
//     <div className="w-full h-[40%] flex flex-col justify-center items-center xl:justify-start xl:items-start xl:w-[40%] xl:h-[70%]">
//       <h1 className="font-extrabold text-[32px] mb-5">
//         My Work<span className="text-accent">.</span>
//       </h1>
//       <p className="px-2">
//         Because I don&apos;t have the right to publish my major works, I&apos;ve created some live templates for portfolio purposes, and they&apos;re always under development<span className="text-accent text-2xl">.</span>
//       </p>
//     </div>

//     {/* Swapper => Right*/}
//     <div className="w-full xl:w-[60%] xl:h-[70%]">
//       <WorkSlider />
//     </div>
//   </motion.div>
//   {/* Planet */}
//   <div className="hidden xl:block absolute -bottom-10 -right-10 mix-blend-color-dodge ">
//     <Image
//       src="/circles.png"
//       alt="Circles Image"
//       width={300}
//       height={300}
//       draggable="false"
//     />
//   </div>
// </section>
