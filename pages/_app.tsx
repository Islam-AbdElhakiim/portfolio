import Layout from "@/components/layout";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import { usePathname } from "next/navigation";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  const route = usePathname();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={route} className=" h-full">
          <Component {...pageProps} />
          <Transition />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default MyApp;
