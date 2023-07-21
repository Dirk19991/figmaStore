import styles from './ProductSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ProductSwiperProps {
  productInfo: ProductInfo;
}

const ProductSwiper = ({ productInfo }: ProductSwiperProps) => {
  console.log(productInfo);
  return (
    <div className={styles.swiperWrapper}>
      <Swiper slidesPerView={1.5} spaceBetween={5}>
        <SwiperSlide>
          <div className={styles.imageWrapper}>
            <img src={productInfo.image1} alt='image' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageWrapper}>
            <img src={productInfo.image2} alt='image' />
          </div>
        </SwiperSlide>
        {productInfo.image3 && (
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <img src={productInfo.image3} alt='image' />
            </div>
          </SwiperSlide>
        )}

        {productInfo.image4 && (
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <img src={productInfo.image4} alt='image' />
            </div>
          </SwiperSlide>
        )}

        {productInfo.image5 && (
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <img src={productInfo.image5} alt='image' />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
