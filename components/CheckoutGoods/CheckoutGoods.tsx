import CheckoutRow from 'components/CheckoutRow/CheckoutRow';
import { useCartContext } from 'context/CartContextProvider';
import styles from './CheckoutGoods.module.scss';

const CheckoutGoods = ({ data }: AllProducts) => {
  const { items } = useCartContext();
  console.log(data, items);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.goods}>
          {items.map((item) => (
            <CheckoutRow data={data} item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutGoods;
