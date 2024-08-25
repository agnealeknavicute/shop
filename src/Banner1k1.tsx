import { motion } from "framer-motion";
import bannerImg from "./img/Снимок экрана 2024-08-21 в 13.04.07.png";

export default function Banner1k1() {
  return (
    <section className="py-5">
      <div className="grid grid-rows-1 grid-cols-2 grid-flow-col ">
        <div className="relative ">
          <img src={bannerImg} alt="" className="w-full" />
          <div className="absolute sm:text-right text-left top-[20%] sm:top-[10%] md:top-[20%] text-white sm:right-0 left-0">
            <p className=" leading-3 tracking-widest sm:leading-8">
              totally brand new
            </p>

            <h1 className="font-semibold leading-1 uppercase text-sm sm:text-xl md:text-[40px] lg:text-[54px]">
              jacket with logo
            </h1>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="uppercase cursor-pointer w-2/3 ld:w-24 text-xs sm:w-32 px-2 sm:px-5 sm:text-xs md:w-36 mt-1 md:mt-4 py-2 ld:py-1 md:py-2 text-center sm:float-end float-start bg-slate-50 text-black"
            >
              order now
            </motion.div>
          </div>
        </div>
        <div className="relative ">
          <img src={bannerImg} alt="" className="w-full" />
          <div className="absolute sm:text-left text-right top-[20%] md:top-[50%] text-white sm:left-0 right-0">
            <p className=" leading-3 tracking-widest sm:leading-8">
              this is our
            </p>

            <h1 className="font-semibold leading-1 uppercase text-sm sm:text-xl md:text-[40px] lg:text-[60px]">
              new partner
            </h1>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="uppercase cursor-pointer w-[100%] ld:w-24 text-xs sm:w-32 px-1 sm:px-3  sm:text-xs md:w-36 mt-1 md:mt-4 py-2 ld:py-1 md:py-2 text-center float-start bg-slate-50 text-black"
            >
              visit the page
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
