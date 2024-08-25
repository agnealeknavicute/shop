import Slider from "react-slick";
import sliderImg from "./img/Снимок экрана 2024-08-21 в 14.33.00.png";
import React from "react";
import { motion } from "framer-motion";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  let display = window.innerWidth > 768 ? "flex" : "none";
  return (
    <div
      className={className}
      style={{
        ...style,
        height: "100%",
        alignItems: "center",
        display: display,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  let display = window.innerWidth > 768 ? "flex" : "none";

  return (
    <div
      className={className}
      style={{
        ...style,
        height: "95%",
        marginBottom: "20px",
        alignItems: "center",
        display: display,
      }}
      onClick={onClick}
    />
  );
}

export default function SliderCom() {
  let a = [];
  for (let i = 0; i <= 9; i++) {
    a.push(i);
  }

  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const slider = React.useRef<Slider>(null);

  return (
    <section className="md:px-6 py-5">
      <h1 className="py-2 text-2xl uppercase font-bold">our top pics</h1>
      <Slider className="md:w-4/5 w-[98%] mx-auto" ref={slider} {...settings}>
        {a.map((slide, index) => (
          <motion.div whileHover={{ scale: 1.01 }} className="cursor-pointer">
            <img key={index} src={sliderImg} alt="" />
            <p className="text-center font-light md:text-sm text-xs">
              item title
            </p>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
