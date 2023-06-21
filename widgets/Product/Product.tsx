import { useState } from 'react';
import styles from './Product.module.scss';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import ProductImage from 'components/ProductImage/ProductImage';
import cn from 'classnames';

interface ProductProps {
  data: Product;
}

function Product({ data }: ProductProps) {
  const [chosenImage, setChosenImage] = useState<string>(
    data.productInfo.image1
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <div
          className={cn(
            styles.image,
            data.productInfo.image1 ? styles.block : styles.none
          )}
          onClick={() => setChosenImage(data.productInfo.image1)}
        >
          <img src={data.productInfo.image1} alt='image1' />
        </div>
        <div
          className={cn(
            styles.image,
            data.productInfo.image2 ? styles.block : styles.none
          )}
          onClick={() => setChosenImage(data.productInfo.image2)}
        >
          <img src={data.productInfo.image2} alt='image2' />
        </div>
        <div
          className={cn(
            styles.image,
            data.productInfo.image3 ? styles.block : styles.none
          )}
          onClick={() => setChosenImage(data.productInfo.image3 ?? '')}
        >
          <img src={data.productInfo.image3} alt='image3' />
        </div>
        <div
          className={cn(
            styles.image,
            data.productInfo.image4 ? styles.block : styles.none
          )}
          onClick={() => setChosenImage(data.productInfo.image4 ?? '')}
        >
          <img src={data.productInfo.image4} alt='image4' />
        </div>
        <div
          className={cn(
            styles.image,
            data.productInfo.image5 ? styles.block : styles.none
          )}
          onClick={() => setChosenImage(data.productInfo.image5 ?? '')}
        >
          <img src={data.productInfo.image5} alt='image5' />
        </div>
      </div>
      <ProductImage chosenImage={chosenImage}></ProductImage>
      <ProductInfo data={data}></ProductInfo>
    </div>
  );
}
export default Product;
