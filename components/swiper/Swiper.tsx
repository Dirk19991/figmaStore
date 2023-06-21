import styles from './Swiper.module.scss';
import AsianMan from './imageComponents/AsianMan';
import Dog from './imageComponents/Dog';
import GirlWithGlasses from './imageComponents/GirlWithGlasses';
import Moto from './imageComponents/Moto';
import Bottle from './imageComponents/Bottle';
import GirlGreenHair from './imageComponents/GirlGreenHair';
import TShirt from './imageComponents/TShirt';
import Socks from './imageComponents/Socks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function SwiperComponent() {
  return (
    <>
      <div className={styles.swiperWrapper}>
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Moto />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Dog />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <GirlWithGlasses />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <AsianMan />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Bottle />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <GirlGreenHair />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <TShirt />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Socks />
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
}
export default SwiperComponent;
