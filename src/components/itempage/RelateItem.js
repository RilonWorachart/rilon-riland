import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCard from '../homepage/ItemCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles (if needed)
import 'swiper/css/pagination'; // Pagination styles (if needed)

function RelateItem() {
  const { id } = useParams();
  const [productData, setProductData] = useState([])
  const swiperRef = useRef(null);


  useEffect(() => {
    // Fetch all products
    fetch('/allproduct.json')
      .then((response) => response.json())
      .then((result) => {
        // Filter out the product with the matching id
        const filteredProducts = result.filter(item => item.id !== parseInt(id));
        setProductData(filteredProducts);
        console.log(filteredProducts);  // Logs all products except the one with the matching id
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);  // Re-fetch data whenever `id` changes


  return (
    <>
      <div className="px-[100px]">
        <div className="pb-8">
          <h1 className="pt-2 text-[30px] text-center">
            สินค้าที่เกี่ยวข้อง
          </h1>
          <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
        </div>

        <div className="py-10 relative w-full mx-auto">

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
            className="mySwiper"
          >
            {productData.map((item) => {

              return (
                <SwiperSlide key={item.id}>
                  <ItemCard key={item.id} image={item.image} id={item.id} name={item.name} category={item.category}
                    description={item.description} searchword={item.searchword} brand={item.brand}
                  />

                </SwiperSlide>
              )
            })}
          </Swiper>

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
    </>
  )
}

export default RelateItem