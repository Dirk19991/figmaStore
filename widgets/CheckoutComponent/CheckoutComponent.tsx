import CheckoutForm from 'components/CheckoutForm/CheckoutForm';
import CheckoutGoods from 'components/CheckoutGoods/CheckoutGoods';
import styles from './CheckoutComponent.module.scss';

const CheckoutComponent = ({ data }: AllProducts) => {
  return (
    <div className={styles.wrapper}>
      <CheckoutForm />
      <CheckoutGoods data={data} />
    </div>
  );
};

export default CheckoutComponent;
