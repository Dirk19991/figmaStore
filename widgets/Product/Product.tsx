import { useState } from 'react';
import styles from './Product.module.scss';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import ProductImage from 'components/ProductImage/ProductImage';
import ProductCarousel from 'components/ProductCarousel/ProductCarousel';

interface ProductProps {
  data: Product;
}

function Product({ data }: ProductProps) {
  const [chosenImage, setChosenImage] = useState<string>(
    data.productInfo.image1
  );

  return (
    <div className={styles.wrapper}>
      <ProductCarousel
        data={data}
        setChosenImage={setChosenImage}
      ></ProductCarousel>
      <ProductImage chosenImage={chosenImage}></ProductImage>
      <ProductInfo data={data}></ProductInfo>
    </div>
  );
}
export default Product;
