import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ServiceCarousel = () => {
  return (
    <div className="w-screen h-auto">
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        <SwiperSlide>
          <div className="flex flex-col justify-between h-screen w-screen">
            <div className="bg-white p-10 text-center flex flex-col justify-end items-center h-full">
              <h3 className="text-7xl font-semibold">
                더 많은 연결, 더 높은 매칭
              </h3>
              <p className="mt-16 text-gray-600 text-3xl">
                버려지는 물건에도 누군가의 취향이 담겨 있습니다.
              </p>
              <p className="text-gray-600 text-3xl mt-2">
                바나나창고는 ‘더 이상 필요 없지만 누군가에겐 꼭 필요한 것들'을
              </p>
              <p className="text-gray-600 text-3xl mt-2">
                연결하는 신개념 물물교환 플랫폼입니다.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/service_1.png"
                alt="Service 1"
                className="w-2/3 object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-between h-screen w-screen">
            <div className="bg-white p-10 text-center flex flex-col justify-center items-center h-full">
              <h3 className="text-7xl font-semibold">
                환경을 위한 지속 가능한 소비
              </h3>
              <p className="mt-16 text-gray-600 text-3xl">
                버리기엔 아까운 물건이, 누군가에겐 필요한 물건일 수 있습니다.
              </p>
              <p className="text-gray-600 text-3xl mt-2">
                교환을 통해 버리지 않고, 지속가능한 소비 문화를 만듭니다.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/service_2.png"
                alt="Service 1"
                className="w-2/4 object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
