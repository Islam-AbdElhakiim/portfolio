import { Sora } from "next/font/google";
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

//components
import StainSpot from "@/components/StainSpot";
import Navbar from "@/sections/Navbar";
import Header from "@/sections/Header";
import Transition from "@/components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Islam Abdelhakiim",
  description: "An Engineer you can trust!",
};

export default function Layout({ children }: { children: any }) {
  const route = usePathname();

  return (
    <div
      className={`page bg-site bg-cover bg-no-repeat text-white ${sora.variable}`}
    >
      <StainSpot />
      <Header />
      <Navbar />
      {children}
    </div>
  );
}
