import banner3Img from "./img/image (3).png";

export default function Banner3() {
  return (
    <section className="py-5">
      <div className="lg:grid hidden grid-cols-2">
        <div className="mb-14 relative">
          <img src={banner3Img} alt="" />
          <div className="absolute text-white bottom-[15%] md:top-[15%] px-1 md:text-right text-left left-0 md:right-0 ">
            <p className="text-2xl">already have more details and</p>
            <p className=" pb-2 leading-none text-[60px] uppercase font-semibold">
              amazing idea?
            </p>
          </div>
        </div>
        <div className="mt-14 relative">
          <img src={banner3Img} alt="" />
          <div className="absolute text-white bottom-[15%] md:top-[30%] px-1 md:text-left text-right left-0 md:right-0 ">
            <p className="text-2xl leading-none">proceed to the page of</p>
            <p className=" pb-2 leading-none text-[60px] uppercase font-semibold">
              collaboration
            </p>
            <div className="uppercase cursor-pointer w-40 text-[15px] sm:w-32 px-5 sm:text-xs md:text-xl md:w-60  py-1 md:py-4 text-center float-start bg-red-800 text-white">
              build your own
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block relative">
        <img src={banner3Img} className="w-full " alt="" />
        <div className="absolute  top-10 text-white px-1   ">
          <div className="flex items-center">
            <p className="sm:text-2xl xs:text-lg text-xs mr-2">
              already have more details and
            </p>
            <p className="  sm:leading-none text-[14px] xs:text-[15px] sm:text-[40px] uppercase font-semibold">
              amazing idea?
            </p>
          </div>
          <div className="flex items-center">
            <p className="sm:text-2xl xs:text-lg text-xs leading-none mr-2">
              proceed to the page of
            </p>
            <p className="  sm:leading-none text-[14px] xs:text-[15px] sm:text-[40px] uppercase font-semibold">
              collaboration
            </p>
          </div>

          <div className="uppercase sm:mt-8 xs:mt-4 mt-2 float-start cursor-pointer sm:text-[20px]  px-3 xs:px-5 text-[10px] xs:text-xs sm:w-60 w-42 py-2 xs:py-4 text-center bg-red-800  text-white">
            build your own
          </div>
        </div>
      </div>
    </section>
  );
}
