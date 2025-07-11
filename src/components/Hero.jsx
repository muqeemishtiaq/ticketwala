import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ArrowLeft = ({ onClick }) => (
  <button onClick={onClick} className="absolute z-10 top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full">
    <ChevronLeft className="text-black w-4 h-4" />
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button onClick={onClick} className="absolute z-10 top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full">
    <ChevronRight className="text-black w-4 h-4" />
  </button>
);

const Hero = ({ events = [] }) => {
  if (!Array.isArray(events) || events.length === 0) return null;

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <>
      <div className="p-3 bg-[#1D1E20] rounded-3xl">
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="p-2 bg-black rounded-2xl ">
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-2xl"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-2xl object-cover w-full max-h-[500px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h2 className="text-xl font-bold truncate">{event.title}</h2>
                  <div className="text-sm flex justify-between">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-[#1D1E20] rounded-2xl p-4 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="#"
            className="bg-[#2ECC71] text-black font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#2ECC71] transition duration-300 flex items-center justify-center"
          >
            Events
          </a>
          <a
            href="#"
            className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:text-[#2ECC71] transition duration-300 flex items-center justify-center"
          >
            Workshops & Classes
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
