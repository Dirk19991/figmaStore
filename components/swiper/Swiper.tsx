import styled from 'styled-components';
import AsianMan from './images/AsianMan';
import Dog from './images/Dog';
import GirlWithGlasses from './images/GirlWithGlasses';
import Moto from './images/Moto';
import Bottle from './images/Bottle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GirlGreenHair from './images/GirlGreenHair';
import TShirt from './images/TShirt';
import Socks from './images/Socks';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0 10px;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
  background-color: var(--yellow);
`;

function SwiperComponent() {
  return (
    <SwiperWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Wrapper>
            <Moto />
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <Dog />
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <GirlWithGlasses />
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <AsianMan />
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <Bottle />
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <GirlGreenHair />
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <TShirt />
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <Socks />
          </Wrapper>
        </SwiperSlide>
        ...
      </Swiper>
    </SwiperWrapper>
  );
}
export default SwiperComponent;
