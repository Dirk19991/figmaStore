import styles from './MinusButton.module.scss';

interface MinusButtonsProps {
  decreaseItems: () => void;
}

const MinusButton = ({ decreaseItems }: MinusButtonsProps) => {
  return (
    <button className={styles.minus} onClick={decreaseItems}>
      <img src='/icons/minus.svg' alt='plus' />
    </button>
  );
};

export default MinusButton;
