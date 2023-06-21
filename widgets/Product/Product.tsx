import { useState } from 'react';
import styled from 'styled-components';
import styles from './Product.module.scss';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import ProductImage from 'components/ProductImage/ProductImage';

interface ProductProps {
  data: Product;
}

interface ImageProps {
  source: string;
}

const Image = styled.div<ImageProps>`
  display: ${(props) => (props.source ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  border-radius: 25px;
  border: 3px solid black;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Product({ data }: ProductProps) {
  const [chosenImage, setChosenImage] = useState<string>(
    data.productInfo.image1
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <Image
          source={data.productInfo.image1}
          onClick={() => setChosenImage(data.productInfo.image1)}
        >
          <img src={data.productInfo.image1} alt='image1' />
        </Image>
        <Image
          source={data.productInfo.image2}
          onClick={() => setChosenImage(data.productInfo.image2)}
        >
          <img src={data.productInfo.image2} alt='image2' />
        </Image>
        <Image
          source={data.productInfo.image3 ?? ''}
          onClick={() => setChosenImage(data.productInfo.image3 ?? '')}
        >
          <img src={data.productInfo.image3} alt='image3' />
        </Image>
        <Image
          source={data.productInfo.image4 ?? ''}
          onClick={() => setChosenImage(data.productInfo.image4 ?? '')}
        >
          <img src={data.productInfo.image4} alt='image4' />
        </Image>
        <Image
          source={data.productInfo.image5 ?? ''}
          onClick={() => setChosenImage(data.productInfo.image5 ?? '')}
        >
          <img src={data.productInfo.image5} alt='image5' />
        </Image>
      </div>
      <ProductImage chosenImage={chosenImage}></ProductImage>
      <ProductInfo data={data}></ProductInfo>
    </div>
  );
}
export default Product;
