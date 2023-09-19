import React from "react";
import Countdown from "react-countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "./SliderData";

function SliderContents() {
  const Completionist = () => <span>Offer Expired!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex space-x-6">
          <div>
            <span className="text-h2FontSize font-semiBolded text-textColor">
              0{days}
            </span>
            <span className="text-tinyFontSize text-titleColor tracking-wide font-mediumWeight">
              Day
            </span>
          </div>
          <div>
            <span className="text-h2FontSize font-semiBolded text-textColor">
              {hours}
            </span>
            <span className="text-tinyFontSize text-titleColor tracking-wide font-mediumWeight">
              Hour
            </span>
          </div>
          <div>
            <span className="text-h2FontSize font-semiBolded text-textColor">
              {minutes}
            </span>
            <span className="text-tinyFontSize text-titleColor tracking-wide font-mediumWeight">
              Min
            </span>
          </div>
          <div>
            <span className="text-h2FontSize font-semiBolded text-textColor">
              {seconds}
            </span>
            <span className="text-tinyFontSize text-titleColor tracking-wide font-mediumWeight">
              Sec
            </span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="pt-[6rem] pb-[2rem]">
      <h2 className="text-[2rem] text-titleColor font-mediumWeight text-center md:text-h1FontSize mb-[0.5rem]">
        Today's Offer! Offer!
      </h2>
      <p className="text-textColor text-smallFontSize font-mediumWeight text-center mb-[2rem]">
        Offer expires soon. Buy NOW and plant Today!
      </p>
      <div className="container">
        <div className="flex justify-center">
          <Countdown date={Date.now() + 86400000} renderer={renderer} />
        </div>
        <Swiper
          className="mt-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:w-[750px]"
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {data.map((data, index) => {
            return (
              <SwiperSlide
                key={index}
                className="relative border-2 border-gray-200 rounded-[1.25rem] px-[1rem] py-[1.5rem] h-60 overflow-hidden mb-[3rem]"
              >
                <img
                  src={data.image}
                  className="opacity-30 object-cover"
                  alt={`${data.textSubHeading}`}
                />
                <h2 className="absolute top-4 uppercase text-textColor text-normalFontSize mb-[0.5rem]">
                  {data.textHeader}
                </h2>
                <h3 className="absolute top-20 text-titleColor text-h1FontSize mb-[0.5rem] font-mediumWeight">
                  {data.textSubHeading}
                </h3>
                <span className="absolute bottom-8 italic text-textColor text-smallFontSize">
                  Category: {data.category}
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderContents;
