import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../Component/SectionTitle';

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 px-4">
      <SectionTitle
        subHeading={'From 11:00am to 10:00pm'}
        heading={'ORDER ONLINE'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        infiniteLoop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-4xl text-white -mt-14 text-center uppercase ">
            {' '}
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-4xl text-white -mt-14 text-center uppercase ">
            {' '}
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-4xl text-white -mt-14 text-center uppercase ">
            {' '}
            Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-4xl text-white -mt-14 text-center uppercase ">
            {' '}
            Deserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-4xl text-white -mt-14 text-center uppercase ">
            {' '}
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-4xl text-white -mt-14 text-center uppercase ">
            {' '}
            Cake
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
