import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ServiceCarousel = () => {
  return (
    <div className="w-screen h-auto">
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        <SwiperSlide>
          <div className="flex flex-col justify-between h-screen w-screen">
            <div className="bg-white p-10 text-center flex flex-col justify-center items-center h-full">
              <h3 className="text-7xl font-semibold max-[431px]:text-2xl">
                더 많은 연결, 더 높은 매칭
              </h3>
              <div className="flex flex-col items-start">
                <p className="mt-16 text-gray-600 text-3xl max-[431px]:text-sm">
                  물물교환은 상호간의 필요가 충족되어야 합니다.
                </p>
                <p className="text-gray-600 text-3xl mt-2 max-[431px]:text-sm">
                  저희는 1 : N 의 교환 방식을 도입하여
                </p>
                <p className="text-gray-600 text-3xl mt-2 max-[431px]:text-sm">
                  그 물건이 필요한 사람들로부터 제안을 받아
                </p>
                <p className="text-gray-600 text-3xl mt-2 max-[431px]:text-sm">
                  교환 기회를 넓힙니다.
                </p>
              </div>
            </div>
            <div className="flex justify-center max-[431px]:overflow-hidden max-[431px]:h-[50%]">
              <img
                src="/service_1.png"
                alt="Service 1"
                className="w-2/3 object-contain max-[431px]:w-full max-[431px]:object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-between h-screen w-screen">
            <div className="bg-white p-10 text-center flex flex-col justify-center items-center h-full ">
              <h3 className="text-7xl font-semibold max-[431px]:text-2xl">
                환경을 위한 지속 가능한 소비
              </h3>
              <div className="flex flex-col items-start">
                <p className="mt-16 text-gray-600 text-3xl max-[431px]:text-sm">
                  버리기엔 아까운 물건이,
                </p>
                <p className="text-gray-600 text-3xl mt-2 max-[431px]:text-sm">
                  누군가에게는 꼭 필요한 물건이 될 수 있습니다.
                </p>
                <p className="text-gray-600 text-3xl mt-2 max-[431px]:text-sm">
                  교환을 통해 버리지 않고,
                </p>
                <p className="text-gray-600 text-3xl mt-2 max-[431px]:text-sm">
                  물건을 재사용하여 환경을 지켜주세요.
                </p>
              </div>
            </div>
            <div className="flex justify-center max-[431px]:overflow-hidden max-[431px]:h-[50%]">
              <img
                src="/service_2.png"
                alt="Service 1"
                className="w-2/4 object-contain max-[431px]:w-full max-[431px]:object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
