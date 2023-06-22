import styles from './ProductCarousel.module.scss';
import cn from 'classnames';

interface ProductCarouselProps {
  data: Product;
  setChosenImage: (arg0: string) => void;
}

const ProductCarousel = ({ data, setChosenImage }: ProductCarouselProps) => {
  return (
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
  );
};

export default ProductCarousel;
