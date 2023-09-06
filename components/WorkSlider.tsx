// import Swiper core and required modules
"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { workSlides } from "@/constants";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils";
import { usePathname } from "next/navigation";
import Router from 'next/router';
import { useState } from "react";

const WorkSlider = () => {
  const [sliderReset, isSliderReset] = useState(false);
  Router.events.on('routeChangeStart', (url, ...props) => {
    isSliderReset(true);
  })
 
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={15}
      pagination={{ clickable: true }}
      className={`h-[210px] md:h-[300] ${sliderReset && 'overflow-hidden'}`}
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index} className="max-h-full">
          <div className="grid grid-rows-1 grid-cols-1 rounded-xl max-h-full">
              <div
                key={index}
                className="rounded-lg cursor-pointer relative group"
              >
                <Image
                  src={slide.path}
                  alt={slide.title}
                  width={300}
                  height={300}
                  className=" rounded-lg object-cover"
                />
                <a
                  href={slide.url}
                  target="_blank"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex justify-center items-center font-bold text=[23px] bg-gradient-to-r from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.3)] uppercase font-sora"
                >
                  <span className=" translate-y-[300%] group-hover:translate-y-0 transition-transform duration-300">Live</span>
                  <span className="translate-y-[700%] group-hover:translate-y-0 transition-transform duration-300">&#160;&#160;Project</span>
                  <motion.span className="translate-y-[1000%] group-hover:translate-y-0 transition-transform duration-300">
                    <RxArrowRight />
                  </motion.span>
                </a>
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
