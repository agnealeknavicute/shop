import React from "react";
import { GiTeamIdea } from "react-icons/gi";
import { GiGearHammer } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineStars } from "react-icons/md";

export default function RedLine() {
  return (
    <section className="w-full max-w-[1475px] mx-auto bg-red-800 ">
      <div className="md:flex uppercase lg:text-base text-xs items-center text-white/95 font-bold justify-center py-8">
        <div className="relative w-32 text-center lg:w-44 mx-2">
          <GiTeamIdea size={56} className="text-red-700" />
          <p className="lg:absolute top-1/2 lg:left-10">innovation</p>
        </div>
        <div className="relative w-32 text-center lg:w-44 mx-2">
          <GiGearHammer size={56} className="text-red-700" />
          <p className="lg:absolute top-1/2 lg:left-10">customization</p>
        </div>
        <div className="relative w-32 text-center lg:w-44 mx-2">
          <FaRecycle size={56} className="text-red-700" />
          <p className="lg:absolute top-1/2 lg:left-10">sustainability</p>
        </div>
        <div className="relative w-32 text-center lg:w-44 mx-2">
          <FaPeopleGroup size={56} className="text-red-700" />
          <p className="lg:absolute top-1/2 lg:left-10">community</p>
        </div>
        <div className="relative w-32 text-center lg:w-44 mx-2">
          <MdOutlineStars size={56} className="text-red-700" />
          <p className="lg:absolute top-1/2 lg:left-10">excellence</p>
        </div>
      </div>
    </section>
  );
}
