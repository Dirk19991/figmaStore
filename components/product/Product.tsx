import { useState } from 'react';
import styled from 'styled-components';

interface ProductProps {
  data: Product;
}

const ProductWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
`;

const ImageCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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

const MainImage = styled.div`
  width: 600px;
  height: 900px;
  border-radius: 100px;
  overflow: hidden;
  background-color: #e8e8e8;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 2/3;
  }
`;

const Description = styled.div``;

function Product({ data }: ProductProps) {
  const [chosenImage, setChosenImage] = useState(data.productInfo.image1);

  const handleChosenImage = (image) => {
    setChosenImage(image);
  };

  return (
    <ProductWrapper>
      <ImageCarousel>
        <Image
          source={data.productInfo.image1}
          onClick={() => handleChosenImage(data.productInfo.image1)}
        >
          <img src={data.productInfo.image1} alt='image1' />
        </Image>
        <Image
          source={data.productInfo.image2}
          onClick={() => handleChosenImage(data.productInfo.image2)}
        >
          <img src={data.productInfo.image2} alt='image2' />
        </Image>
        <Image
          source={data.productInfo.image3}
          onClick={() => handleChosenImage(data.productInfo.image3)}
        >
          <img src={data.productInfo.image3} alt='image3' />
        </Image>
        <Image
          source={data.productInfo.image4}
          onClick={() => handleChosenImage(data.productInfo.image4)}
        >
          <img src={data.productInfo.image4} alt='image4' />
        </Image>
        <Image
          source={data.productInfo.image5}
          onClick={() => handleChosenImage(data.productInfo.image5)}
        >
          <img src={data.productInfo.image5} alt='image5' />
        </Image>
      </ImageCarousel>
      <MainImage>
        <img src={chosenImage} alt='image' />
      </MainImage>
      <Description></Description>
    </ProductWrapper>
  );
}
export default Product;
