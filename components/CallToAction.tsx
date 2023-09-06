import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
const CallToAction = () => {
  return (
    <div className="mx-auto">
      <Link
        href="/work"
        className="relative group bg-circleStar bg-cover bg-no-repeat w-[120px] h-[120px] md:w-[185px] md:h-[185px] flex justify-center items-center"
      >
        <Image
          src="/rounded-text.png"
          alt="work-stamp image"
          // width={141}
          // height={148}
          fill
          className="animate-spin-slow p-4 md:p-6"
        />
        <HiArrowRight className="absolute top-1/2 left-1/2 text-4xl -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300 " />
      </Link>
    </div>
  );
};

export default CallToAction;
