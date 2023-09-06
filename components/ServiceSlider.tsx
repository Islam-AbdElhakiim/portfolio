// import Swiper core and required modules
"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";
import Router from 'next/router';

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { serviceData } from "@/constants";
import { RxArrowTopRight } from "react-icons/rx";
import { useRef, useState } from "react";

const ServiceSlider = () => {
  const [sliderReset, isSliderReset] = useState(false);
  Router.events.on('routeChangeStart', (url, ...props) => {
    isSliderReset(true);
  })

  return (
    <Swiper
      modules={[Navigation, Pagination, FreeMode]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween:5
        },
        640: {
          slidesPerView: 3,
          spaceBetween:15
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      navigation={{ prevEl: '.prev', nextEl: '.next', }}


      className={` sm:h-[320px] md:h-[380px] ${sliderReset && 'overflow-hidden'}`}
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index} className="group">
          <div className="h-[160px] flex gap-6 p-4 rounded-x bg-[rgba(65,47,123,0.15)] sm:h-full sm:flex-col  lg:py-6 l sm:justify-between">
            <div>
              <span className="text-accent text-4xl">{service.icon}</span>
            </div>
            <div className="flex flex-col">
            {service.title}
            <p className="">{service.description}</p>

            </div>

            <RxArrowTopRight
              className={`mt-3 text-[26px] group-hover:text-accent next group-hover:rotate-45 cursor-pointer transition-all ${
                index == serviceData.length - 1 &&
                "-rotate-45 group-hover:-rotate-[135deg] prev"
              }`}
              // onClick={() => swiper.slideNext()}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
