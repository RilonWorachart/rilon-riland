import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../ItemCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


function RelateItem() {
  const { id } = useParams();
  const [productData, setProductData] = useState([])
  const swiperRef = useRef(null);
  const { t } = useTranslation();


  useEffect(() => {
    fetch(`/locales/${i18next.language}/products.json`)
      .then((response) => response.json())
      .then((result) => {
        // Convert the object into an array of products
        const productsArray = Object.values(result);
        const filteredProducts = productsArray.filter(item => item.id !== parseInt(id));

        setProductData(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [id, t]); // Empty dependency array means this runs once when the component mounts


  return (
    <>
      <div className="px-[100px]">
        <div className="pb-8">
          <h1 className="pt-2 text-[30px] text-center">
            {t('itempage.p11')}
          </h1>
          <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
        </div>

        <div className="py-10 relative w-full mx-auto z-10">

          <Swiper
            spaceBetween={10}
            breakpoints={{
              320: {
                // For screen widths >= 320px (small screens like mobile)
                slidesPerView: 1,
              },
              768: {
                // For screen widths >= 768px (tablets, larger mobile devices)
                slidesPerView: 2,
              },
              1024: {
                // For screen widths >= 1024px (desktops)
                slidesPerView: 3,
              },
              1440: {
                // For screen widths >= 1440px (large desktops)
                slidesPerView: 4,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000, // Auto slide every 3 seconds
              disableOnInteraction: false, // Keep autoplay running even if user interacts
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Store the swiper instance
            className=""
          >
            {productData.map((item) => {

              return (
                <SwiperSlide key={item.id}>
                  <ItemCard className="z-10" key={item.id} image={item.image} id={item.id} name={item.name} category={item.category}
                    description={item.description} searchword={item.searchword} brand={item.brand}  itemType={"type1"}
                  />

                </SwiperSlide>
              )
            })}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="z-40 absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full "
          >
            &#8592;
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="z-40 absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full "
          >
            &#8594;
          </button>


        </div>

      </div>
    </>
  )
}

export default RelateItem