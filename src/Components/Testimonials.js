import React from "react";
import { RiDoubleQuotesL } from 'react-icons/ri';
import CommonTitle from "./CommonTitle";

const Testimonials = () => {
  const testimonials = [
    {
      id: "1",
      about:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://svcstrg.cld.navitime.jp/imgfile/02301_t9355_01.jpg", // Replace with the actual image URL
      name: "One",
    },
    {
      id: "2",
      about:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing,    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Money makes your life easier. If you're lucky to have it, you're lucky.",
      image: "https://svcstrg.cld.navitime.jp/imgfile/02301_t9355_01.jpg", // Replace with the actual image URL
      name: "Two",
    },
    {
      id: "3",
      about:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consecteturre magna aliqua.It is usually people in the money business and international trade that are really rich.",
      image: "https://svcstrg.cld.navitime.jp/imgfile/02301_t9355_01.jpg", // Replace with the actual image URL
      name: "Three",
    },
    
  ];

  return (
    <section id="clients" className="relative font-poppins md:py-16 py-10">
      <div className="text-center">
        <CommonTitle title="What People are saying about us" />
        <p className="text-dimWhite md:text-lg text-base">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 sm:mt-16 bg-white pb-16">
  {testimonials.map((item) => {
    const { id, about, name, title, image } = item;
    return (
      <div
        key={id}
        className="flex flex-col gap-10 feature-card rounded-2xl px-5 sm:px-10 md:px-6 py-10 ss:py-14 lg:px-10"
      >
              <RiDoubleQuotesL className="text-5xl text-secondary" />
              <p className="leading-normal text-base text-dimWhite">
                {about}
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 object-cover rounded-full object-top"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-dimWhite text-sm font-[500]">{title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute w-[20%] h-[40%] rounded-full right-0 bottom-0 blue__gradient"></div>
    </section>
  );
};

export default Testimonials;
