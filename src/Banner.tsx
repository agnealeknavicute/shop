import { motion } from "framer-motion";
import bannerImg from "./img/Снимок экрана 2024-08-21 в 13.04.07.png";

export default function Banner() {
  return (
    <section>
      <div className="sm:grid grid-rows-2 grid-cols-3 grid-flow-col ">
        <div className="row-span-2 relative col-span-2">
          <img src={bannerImg} alt="" className="w-full" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute cursor-pointer top-[15%] sm:top-1/3 text-white xl:left-1/3 lg:left-12 sm:left-1/4 left-[10%]"
          >
            <h1 className="font-semibold leading-1 uppercase text-[30px] sm:text-xl md:text-[40px] lg:text-[60px]">
              new collection
            </h1>
            <p className="text-left leading-3 sm:leading-8">only online</p>

            <div className="uppercase z-90 hover:cursor-pointer w-40 text-[15px] sm:w-32 px-5 sm:text-xs md:w-36 mt-4 py-1 md:py-2 float-end bg-slate-50 text-black">
              learn more
            </div>
          </motion.div>
        </div>
        <div className="sm:block hidden">
          <img src={bannerImg} alt="" />
        </div>
        <div className="sm:block hidden">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
}
