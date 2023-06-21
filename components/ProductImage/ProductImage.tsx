import styles from './ProductImage.module.scss';

interface ProductImageProps {
  chosenImage: string;
}

function ProductImage({ chosenImage }: ProductImageProps) {
  return (
    <div className={styles.wrapper}>
      <img src={chosenImage} alt='image' />
    </div>
  );
}
export default ProductImage;
