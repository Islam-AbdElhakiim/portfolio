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
//data
import { testimonialData } from "@/constants";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Router from 'next/router';
import { useState } from "react";

const TestimonialsSlider = () => {
  const [sliderReset, isSliderReset] = useState(false);
  Router.events.on('routeChangeStart', (url, ...props) => {
    isSliderReset(true);
  })
  return (
    <Swiper

      modules={[Navigation, Pagination]}
      spaceBetween={0}
      freeMode={false}
      // dots
      pagination={true}
      // arrows
      navigation={true}
      className={` w-full mt-5 h-[330px] md:h-[300px] ${sliderReset && 'overflow-hidden'} `}
    >
      {testimonialData.map((testimonial, index) => (
        <SwiperSlide key={index} className="px-16 sm:px-10 lg:px-2  relative w-1/2">
          <div className="flex flex-col items-center h-full sm:h-max md:flex-row  sm:px-20 sm:absolute sm:top-1/2 sm:-translate-y-1/2">
            {/* Avatar */}
            <div className="flex flex-col relative justify-center items-center md:flex-1 after:w-[1px] after:h-full after:bg-white/30 after:absolute after:right-0 font-sora md:mr-10 after:hidden md:after:block">
              <Image
                src={testimonial.image}
                alt={testimonial.name + "image"}
                width={75}
                height={75}
              />
              <h2 className="text-xl">{testimonial.name}</h2>
              <p className="uppercase text-[12px]">{testimonial.position}</p>
            </div>
            {/* Quote Text */}
            <div className="flex flex-col justify-center items-center md:items-end md:flex-[2] text-justify ">
              <FaQuoteLeft className="text-white/30 text-[30px] mb-5" />
              <p className=" leading-6 tracking-tight ">{testimonial.message}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider;
