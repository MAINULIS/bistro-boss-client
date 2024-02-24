import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import silder1 from '../../assets/home/slide1.jpg';
import silder2 from '../../assets/home/slide2.jpg';
import silder3 from '../../assets/home/slide3.jpg';
import silder4 from '../../assets/home/slide4.jpg';
import silder5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
       <section className='md:w-3/4 mx-auto'>
        <SectionTitle
           Heading={"Order Online"}
           SubHeading={"From 11:00am to 10:00pm"}
        ></SectionTitle>
         <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide><img src={silder1} alt="" /> <h3 className='md:text-3xl font-serif text-white text-center -mt-14 uppercase'>Salads</h3></SwiperSlide>
          <SwiperSlide><img src={silder2} alt="" /> <h3 className='md:text-3xl font-serif text-white text-center -mt-14 uppercase'>Pizzas</h3></SwiperSlide>
          <SwiperSlide><img src={silder3} alt="" /> <h3 className='md:text-3xl font-serif text-white text-center -mt-14 uppercase'>Soups</h3></SwiperSlide>
          <SwiperSlide><img src={silder4} alt="" /> <h3 className='md:text-3xl font-serif text-white text-center -mt-14 uppercase'>desserts</h3></SwiperSlide>
          <SwiperSlide><img src={silder5} alt="" /><h3 className='md:text-3xl font-serif text-white text-center -mt-14 uppercase'>Salads</h3></SwiperSlide>         
        </Swiper>
       </section>
    );
};

export default Category;