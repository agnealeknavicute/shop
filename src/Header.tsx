import React, { useState } from "react";
import "./App.css";
import logo from "./img/5920245425921705729.jpg";
import { Divider, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 5 },
    closed: { opacity: 0 },
  };

  const a = [];

  for (var i = 1; i <= 3; i++) {
    a.push(i);
  }
  return (
    <header className="  ">
      <div className="border-t-black w-[100vw] absolute border-t-[8px]" />
      <div className="max-w-[1475px] lg:w-4/5 hidden mx-auto md:grid cgrid h-18  items-center">
        {a.map((i) => (
          <>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="lg:mx-3 py-4 text-center mx-2 hover:cursor-pointer "
            >
              <h1 className="font-light uppercase xl:text-sm text-xs">
                Biznesam
              </h1>
              <p className="font-semibold xl:text-xs text-[8px]">
                korporativais davanas
              </p>
            </motion.div>
            <Divider className="block md:hidden" />
          </>
        ))}
        <div className="md:block hidden self-start">
          <img src={logo} alt="" className="w-full" />
        </div>
        {a.map((i) => (
          <>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="lg:mx-3 py-2 text-center mx-2 hover:cursor-pointer "
            >
              <h1 className="font-light uppercase xl:text-sm text-xs">
                Biznesam
              </h1>
              <p className="font-semibold xl:text-xs text-[8px]">
                korporativais davanas
              </p>
            </motion.div>
            <Divider className="block md:hidden" />
          </>
        ))}
      </div>
      <div className="md:hidden sm:h-20 h-12">
        <div className="flex sm:h-16 h-10 items-center">
          <img src={logo} alt="" className="sm:h-16 h-10 ml-10" />
          <Spacer />
          <div
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="px-8 mt-3 font-semibold uppercase"
          >
            Menu
          </div>
        </div>

        <motion.div
          className="absolute z-20 w-[75%] right-[15px] bg-white"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          {a.map((i) => (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={
                  isOpen
                    ? "lg:mx-3 py-2 text-center mx-2 hover:cursor-pointer md:cursor-default md:text-left"
                    : "lg:mx-3 py-2 text-center mx-2 md:text-left"
                }
              >
                <h1 className="font-light uppercase xl:text-sm text-xs">
                  Biznesam
                </h1>
                <p className="font-semibold xl:text-xs text-[8px]">
                  korporativais davanas
                </p>
              </motion.div>
              <Divider className="block md:hidden" />
            </>
          ))}
          {a.map((i) => (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={
                  isOpen
                    ? "lg:mx-3 py-2 text-center mx-2 hover:cursor-pointer md:cursor-default md:text-left"
                    : "lg:mx-3 py-2 text-center mx-2 md:text-left"
                }
              >
                <h1 className="font-light uppercase xl:text-sm text-xs">
                  Biznesam
                </h1>
                <p className="font-semibold xl:text-xs text-[8px]">
                  korporativais davanas
                </p>
              </motion.div>
              <Divider className="block md:hidden" />
            </>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
