import { Dispatch, SetStateAction } from 'react';
import styles from './ProductButtons.module.scss';

interface ProductButtonsProps {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

function ProductButtons({ amount, setAmount }: ProductButtonsProps) {
  const increaseItems = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseItems = () => {
    setAmount((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.plus} onClick={increaseItems}>
        <img src='/icons/plus.svg' alt='plus' />
      </button>
      <div className={styles.amount}>{amount}</div>
      <button className={styles.minus} onClick={decreaseItems}>
        <img src='/icons/minus.svg' alt='minus' />
      </button>
    </div>
  );
}
export default ProductButtons;
