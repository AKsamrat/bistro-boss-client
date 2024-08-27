import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://bistro-boss-server-eta-nine-25.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-5 px-4 py-16">
      <SectionTitle
        subHeading={'What Our Clients Say'}
        heading={'TESTIMONIALS'}
      ></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviews.map(item => (
          <SwiperSlide key={item._id}>
            <div className="flex flex-col items-center justify-center px-20">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p className="text-6xl py-10">
                <FaQuoteLeft />
              </p>
              <p className="py-6">{item.details}</p>
              <h1 className="text-3xl text-yellow-500 uppercase">
                {item.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
