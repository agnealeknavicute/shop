import categImg from "./img/Снимок экрана 2024-08-21 в 16.45.17.png";
import { motion } from "framer-motion";
const categories = [
  { img: categImg, title: "TShirts" },
  { img: categImg, title: "TShirts" },
  { img: categImg, title: "TShirts" },
  { img: categImg, title: "TShirts" },
  { img: categImg, title: "TShirts" },
  { img: categImg, title: "TShirts" },
];

export default function Categories() {
  return (
    <section className="lg:px-40 md:px-24 px-0">
      <h1 className="py-2 uppercase font-bold">our top pics</h1>
      <div className="grid gap-1 grid-cols-2 sm:grid-cols-4 ">
        {categories.map((categ, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="relative cursor-pointer"
          >
            <img className="w-full" src={categ.img} alt="" />
            <div className="absolute z-20 top-2/3 bg-white/90 py-1 px-5 md:px-8 lg:px-16 md:py-2">
              <p className="font-light text-lg md:text-xs xl:text-base">
                {categ.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
