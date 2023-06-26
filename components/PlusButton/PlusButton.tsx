import styles from './PlusButton.module.scss';

interface PlusButtonsProps {
  increaseItems: () => void;
}

const PlusButton = ({ increaseItems }: PlusButtonsProps) => {
  return (
    <button className={styles.plus} onClick={increaseItems}>
      <img src='/icons/plus.svg' alt='plus' />
    </button>
  );
};

export default PlusButton;
