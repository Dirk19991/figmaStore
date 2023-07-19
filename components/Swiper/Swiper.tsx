import styles from './Swiper.module.scss';
import AsianMan from './imageComponents/AsianMan';
import Dog from './imageComponents/Dog';
import GirlWithGlasses from './imageComponents/GirlWithGlasses';
import Moto from './imageComponents/Moto';
import Bottle from './imageComponents/Bottle';
import GirlGreenHair from './imageComponents/GirlGreenHair';
import TShirt from './imageComponents/TShirt';
import Socks from './imageComponents/Socks';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperComponent() {
  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  return (
    <>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={showDesktop ? true : false}
          spaceBetween={showDesktop ? 50 : 5}
          slidesPerView={showDesktop ? 3 : 2}
          centeredSlides={true}
          loop={true}
        >
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <Moto isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <Dog isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <GirlWithGlasses isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <AsianMan isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <Bottle isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <GirlGreenHair isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <TShirt isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={cn(
                styles.imageWrapper,
                !showDesktop && styles.mobileWrapper
              )}
            >
              <Socks isDesktop={isDesktop} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default SwiperComponent;
