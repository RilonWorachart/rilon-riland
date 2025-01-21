import { useState, useEffect, useRef } from 'react';
import RecommendProductCard from './RecommendProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles (if needed)
import 'swiper/css/pagination'; // Pagination styles (if needed)

function RecommendProductList() {
  const [recommendProductData, setRecommendProductData] = useState([]);
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('recommendproduct.json')
      .then((response) => response.json())
      .then((result) => {
        setRecommendProductData(result);
      });
  }, []);

  return (
    <div className="pb-10">
      <div>
        <h1 className="pt-2 text-[30px] text-center">
          {t('homepage.p27')}
        </h1>
        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
      </div>
      <div className="py-10 relative w-full max-w-4xl mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Auto slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay running even if user interacts
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store the swiper instance
          className="mySwiper"
        >
          {recommendProductData.map((item) => (
            <SwiperSlide key={item.id}>
              <RecommendProductCard
                image={item.image}
                id={item.id}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full z-10"
        >
          &#8592;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full z-10"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default RecommendProductList;
