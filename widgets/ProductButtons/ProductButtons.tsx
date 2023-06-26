import MinusButton from 'components/MinusButton/MinusButton';
import PlusButton from 'components/PlusButton/PlusButton';
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
      <PlusButton increaseItems={increaseItems} />
      <div className={styles.amount}>{amount}</div>
      <MinusButton decreaseItems={decreaseItems} />
    </div>
  );
}
export default ProductButtons;
