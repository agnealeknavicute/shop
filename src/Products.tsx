import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import sliderImg from "./img/Снимок экрана 2024-08-21 в 14.33.00.png";

export default function Products() {
  const [activeSize, setActiveSize] = useState<null | string>(null);
  const [activeColor, setActiveColor] = useState<null | string>(null);
  let a = [];
  for (let i = 0; i <= 11; i++) {
    a.push(i);
  }

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Red", "Blue", "Black", "Gray"];
  return (
    <section className="text-left px-5 py-10">
      <p>home / tshirts</p>
      <h1 className="uppercase font-semibold text-[40px] sm:text-[50px] lg:text-[60px]">
        tshirts
      </h1>
      <div className="flex py-4">
        <div className="mr-5">
          <Menu>
            <MenuButton
              variant="outline"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {activeColor ? activeColor : "Color"}
            </MenuButton>
            <MenuList>
              {colors.map((c) => (
                <MenuItem onClick={() => setActiveColor(c)}>{c}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
        <div className="mr-5">
          <Menu>
            <MenuButton
              variant="outline"
              className="rounded-none"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {activeSize ? activeSize : "Sizes"}
            </MenuButton>
            <MenuList>
              {sizes.map((s) => (
                <MenuItem onClick={() => setActiveSize(s)}>{s}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {a.map((slide, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer mb-4"
          >
            <img className="mx-auto" key={index} src={sliderImg} alt="" />
            <p className="text-center font-light md:text-sm text-xs">
              item title
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
