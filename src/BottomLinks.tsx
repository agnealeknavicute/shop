import { MdOutlineStars } from "react-icons/md";

const dataExample = [
  {
    title: "Support",
    links: [
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
      { title: "sizeGuide", link: "#" },
    ],
  },
];

export default function BottomLinks() {
  return (
    <section className="bg-stone-200">
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-3 px-8 py-4">
          {dataExample.map((data) => (
            <div className="text-left my-4">
              <h1 className="font-bold text-lg uppercase py-3 ">
                {data.title}
              </h1>
              {data.links.map((link) => (
                <a href={link.link} className="">
                  <p className="py-[2px] cursor-pointer hover:text-red-600">
                    {link.title}
                  </p>
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineStars size={150} className="text-stone-400" />
        </div>
      </div>
    </section>
  );
}
