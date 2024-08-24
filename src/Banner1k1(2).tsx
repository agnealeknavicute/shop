import React from "react";
import bannerImg from "./img/Снимок экрана 2024-08-21 в 13.04.07.png";
import { motion } from "framer-motion";
export default function Banner1k1sec() {
  return (
    <section>
      <section>
        <div className="sm:grid grid-rows-1 grid-cols-2 grid-flow-col ">
          <div className="relative">
            <img src={bannerImg} alt="" className="w-full" />
            <div className="absolute sm:top-1/3 top-[10%] text-white xl:left-[20%] lg:left-[5%] left-[10%]">
              <h1 className="font-semibold leading-1 uppercase text-[30px] sm:text-xl md:text-[40px] lg:text-[56px]">
                new collection
              </h1>
              <p className="text-left leading-3 sm:leading-8">only online</p>

              <div className="uppercase cursor-pointer w-40 text-[15px] sm:w-32 px-5 sm:text-xs md:w-36 mt-4 py-1 md:py-2 float-end bg-slate-50 text-black">
                learn more
              </div>
            </div>
          </div>
          <div className="relative sm:block hidden">
            <img src={bannerImg} alt="" className="w-full" />
          </div>
        </div>
      </section>
    </section>
  );
}
