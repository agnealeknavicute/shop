import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import producImg from "./img/Снимок экрана 2024-08-24 в 22.20.16.png";
import Slider from "react-slick";

export default function Product() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="lg:px-20 md:px-10 px-2 mb-10">
      <div className="md:grid  gap-4 grid-cols-2  ">
        <div className="lg:grid hidden  gap-1 grid-cols-5 row-span-4 ">
          <div className="col-span-1 ">
            <img className="mb-1" src={producImg} alt="" />
            <img className="mb-1" src={producImg} alt="" />
            <img className="mb-1" src={producImg} alt="" />
            <img className="mb-1" src={producImg} alt="" />
          </div>
          <div className="col-span-4 row-span-5">
            <img className="w-full" src={producImg} alt="" />
          </div>
        </div>
        <div className="lg:hidden mb-6 md:mb-0 block">
          <Slider
            className=""
            arrows={window.innerWidth > 768 ? true : false}
            {...settings}
          >
            <div>
              <img className="mb-1 mx-auto" src={producImg} alt="" />
            </div>
            <div>
              <img className="mb-1 mx-auto" src={producImg} alt="" />
            </div>
            <div>
              <img className="mb-1 mx-auto" src={producImg} alt="" />
            </div>
            <div>
              <img className="mb-1 mx-auto" src={producImg} alt="" />
            </div>
            <div>
              <img className="mb-1 mx-auto" src={producImg} alt="" />
            </div>
          </Slider>
        </div>
        <div className="p-5">
          <div className="text-left md:text-base lg:text-lg text-xs">
            <div className="text-item md:text-base lg:text-lg text-xs pb-2 ">
              <span>Comfort:</span> Soft, breathable fabrics
            </div>
            <div className="text-item pb-2 ">
              <span>Style:</span> Trendy and expressive designs
            </div>
            <div className="text-item pb-2 ">
              <span>Durability:</span> Strong stitching, long-lasting
            </div>
            <div className="text-item pb-2 ">
              <span>Fit:</span> Tailored for proper sizing
            </div>
            <div className="text-item pb-2 ">
              <span>Versatility:</span> Suitable for various occasions
            </div>
          </div>
          <div className="container lg:text-lg text-base px-2">
            <p className="pb-8  ">
              Building a strong community is essential to our mission. We
              believe in the power of community and strive to create a
              supportive network where athletes can share their experiences,
              offer mutual support, and celebrate each other's successes. Our
              community initiatives include sponsorships, events, and
              partnerships with sports organizations. Through these efforts, we
              foster a sense of belonging and encouragement among athletes,
              helping them to reach new heights together.
            </p>

            <div className="action-bar">
              <NumberInput className="mr-4" defaultValue={1} min={1} max={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <button className="action-button">SAŅEMT PIEDĀVĀJUMU</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
