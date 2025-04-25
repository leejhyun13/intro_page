import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import serviceImage1 from "../assets/service_1.png";
import serviceImage2 from "../assets/service_2.png";

const ServiceCarousel = () => {
  return (
    <div className="w-full h-full max-w-5xl px-4 py-8">
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        <SwiperSlide>
          <div className="bg-white p-10 text-center shadow-md border-2">
            <h3 className="text-3xl font-semibold">🚀 Web Development</h3>
            <p className="mt-4 text-gray-600 text-lg">
              Custom websites and web apps.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-10 text-center shadow-md">
            <h3 className="text-3xl font-semibold">📱 Mobile Solutions</h3>
            <p className="mt-4 text-gray-600 text-lg">
              React Native apps and more.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
