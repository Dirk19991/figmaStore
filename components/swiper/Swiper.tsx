import styled from 'styled-components';
import AsianMan from './images/AsianMan';
import Dog from './images/Dog';
import GirlWithGlasses from './images/GirlWithGlasses';
import Moto from './images/Moto';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Wrapper = styled.div`
  height: 350px;
  width: 350px;
`;

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Moto />
      </SwiperSlide>
      <SwiperSlide>
        <Dog />
      </SwiperSlide>
      <SwiperSlide>
        <GirlWithGlasses />
      </SwiperSlide>
      <SwiperSlide>
        <AsianMan />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
export default SwiperComponent;
