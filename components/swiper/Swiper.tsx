import styled from 'styled-components';
import AsianMan from './imageComponents/AsianMan';
import Dog from './imageComponents/Dog';
import GirlWithGlasses from './imageComponents/GirlWithGlasses';
import Moto from './imageComponents/Moto';
import Bottle from './imageComponents/Bottle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GirlGreenHair from './imageComponents/GirlGreenHair';
import TShirt from './imageComponents/TShirt';
import Socks from './imageComponents/Socks';
import { useState } from 'react';

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
    <>
      <SwiperWrapper>
        <Swiper spaceBetween={50} slidesPerView={3}>
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
    </>
  );
}
export default SwiperComponent;
