import { useEffect, useState } from 'react';
import styles from './Product.module.scss';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import ProductImage from 'components/ProductImage/ProductImage';
import ProductCarousel from 'components/ProductCarousel/ProductCarousel';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import ProductSwiper from 'components/ProductSwiper/ProductSwiper';
import ProductButtons from 'widgets/ProductButtons/ProductButtons';

interface ProductProps {
  data: Product;
}

function Product({ data }: ProductProps) {
  const [chosenImage, setChosenImage] = useState<string>(
    data.productInfo.image1
  );

  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  console.log(data);

  return showDesktop ? (
    <div className={styles.wrapper}>
      <ProductCarousel
        data={data}
        setChosenImage={setChosenImage}
      ></ProductCarousel>
      <ProductImage chosenImage={chosenImage}></ProductImage>
      <ProductInfo data={data}></ProductInfo>
    </div>
  ) : (
    <div id='mobile-product' className={styles.wrapper}>
      <ProductInfo data={data}></ProductInfo>
      <ProductSwiper productInfo={data.productInfo}></ProductSwiper>
    </div>
  );
}
export default Product;
