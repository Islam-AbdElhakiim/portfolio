"use client";
import { navData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="fixed w-full h-[70px] flex flex-col items-center justify-end bottom-0 z-20 lg:w-16 lg:h-max lg:right-[2%] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
      <div className="flex lg:flex-col justify-around p-5 gap-6 bg-white/10 lg:rounded-full lg:text-[22px] text-[28px] w-full md:w-1/2 lg:w-full max-w-full">
        {navData &&
          navData.map((link, index) => (
            <Link
            key={link.name + 'nav'}
              className={`${
                path === link.path && "text-accent"
              } hover:text-accent transition-colors duration-300 relative group`}
              href={link.path}
            > 
              {link.icon}
              <div className="absolute flex opacity-0 flex-col items-center justify-end bottom-0 left-1/2 font-sora -translate-x-1/2 pb-6 lg:flex-row lg:justify-between lg:pr-8 lg:right-0 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:translate-x-0 lg:pb-0 lg:left-auto  group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <div className="p-1 rounded-sm bg-white text-accent text-[12px]">
                  {link.name}
                </div>
                <div className="border-solid border-[18px] border-transparent border-t-white -mt-2 lg:border-[14px] lg:border-l-white lg:border-t-transparent lg:mt-0 lg:-ml-[5px] "></div>
              </div>
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
