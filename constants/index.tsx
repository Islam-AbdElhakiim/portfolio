import { ReactElement } from "react";
// #region icons
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoFacebook,
  BiSolidMouseAlt,
  BiLogoTailwindCss,
  BiSolidCoinStack,
} from "react-icons/bi";

import {
  FaAngular,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiDotnet,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { AiFillMediumSquare } from "react-icons/ai";
import { PiNumberFiveBold } from "react-icons/pi";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import { TbBrandFramerMotion, TbSql } from "react-icons/tb";

// #endregion
import { aboutDataType, navDataType, socialLinksType } from "../types";

// nav data
export const navData: navDataType[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// Social Link
export const socialLinks: socialLinksType[] = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/islam-abdelhakiim21/",
    icon: <BiLogoLinkedin />,
  },
  {
    name: "Github",
    path: "https://github.com/Islam-AbdElhakiim",
    icon: <BiLogoGithub />,
  },
  {
    name: "Mostaql",
    path: "https://mostaql.com/u/Mr_Admin/reviews",
    icon: <AiFillMediumSquare />,
  },
  {
    name: "Khamsat",
    path: "https://khamsat.com/user/mr-admin/reviews",
    icon: <PiNumberFiveBold />,
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/IslamAbdelhakiim/",
    icon: <BiLogoFacebook />,
  },
];

//About Data
export const aboutData: aboutDataType[] = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End",
        _icons: [
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <FaAngular />,
          <TbBrandFramerMotion />,
          <BiLogoTailwindCss />,
        ],
      },
      {
        title: "UI/UX Design",
        _icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: "Back-End",
        _icons: [
          <FaNodeJs />,
          <SiExpress />,
          <SiMongodb />,
          <SiDotnet />,
          <TbSql />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Front-end developer",
        company: "Link Development",
        stage: "2022 - 2023",
        url: "https://linkdevelopment.com/",
      },
      {
        //2021 - 2022 iti, 2020 - 2021 mts
        title: "Full-Stack developer",
        company: "ITI",
        stage: "2021 - 2022",
        url: "https://iti.gov.eg/iti/home",
      },
      {
        title: "Front-end developer",
        company: "Nafeza",
        stage: "2020 - 2021",
        url: "https://www.nafeza.gov.eg/en",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Professional web development & business intelligence diploma",
        company: "ITI",
        url: "https://iti.gov.eg/iti/home",
        stage: "2022",
      },
      {
        title: "Advanced frontend nano-degree",
        stage: "2021",
        company: "EgFWD",
        url: "https://egfwd.com/",
      },
      {
        title: "Web Development MEAN Stack",
        stage: "2018",
        company: "NTI",
        url: "https://www.nti.sci.eg/",
      },
      // {
      //   title: "Microsoft certified dynamics 365 developer (CRM) ",
      //   company: "Microsoft",
      //   stage: "2023",
      //   url: "https://www.nti.sci.eg/",
      // },
    ],
  },
];

// Service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Brand is just a perception, and I believe perception will match reality over time.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Design can be art. can be aesthetics. it'sso simple, that's why it's so complicated.",
  },
  {
    icon: <RxDesktop />,
    title: "Front-End",
    description:
      "Not only the design, clean code always looks like it was written by someone who cares.",
  },
  {
    icon: <BiSolidCoinStack />,
    title: "Back-End",
    description:
      "it's not only about building a product that meets requirements, but a product will last!",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "as I believe it's not someone's mission, it's all of us's mission, even the UI/UX designers ",
  },
];

// Work data
export const workSlides = {
  slides: [
    {
      title: "title",
      path: "/car.png",
      url: "google.com",
    },
    {
      title: "title",
      path: "/metaverse.png",
      url: "https://www.google.com",
    },
    {
      title: "title",
      path: "/reads.png",
      url: "google.com",
    },
  ],
};

// testimonial data
export const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Patrick",
    position: "Client",
    message:
      "I highly recommend working with Islam, his technical prowess and commitment to excellence are truly commendable",
  },
  {
    image: "/t-avt-2.png",
    name: "Gamila",
    position: "Client",
    message:
      "We hired Islam to redesign, rebuild and relaunch our website. The process has been extremely collaborative and the communication is great.",
  },
  {
    image: "/t-avt-3.png",
    name: "Majed",
    position: "Client",
    message:
      "Very quick turnaround. Excellent communication skills. Premium work. Islam is a highly capable developer with an eye for design and an appreciation for UX/UI.",
  },
];
