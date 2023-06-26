import styles from './Cart.module.scss';
import { useCartContext } from '../../context/CartContextProvider';
import { useCountryContext } from '../../context/CountryContextProvider';
import findById from '../../shared/utils/findById';
import Link from 'next/link';
import CartRow from 'components/CartRow/CartRow';

interface Prices {
  'UNITED STATES': {
    label: 'priceUS';
    sign: '$';
  };
  'UNITED KINGDOM': {
    label: 'priceUK';
    sign: '£';
  };
}

function CartComponent({ data }: AllProducts) {
  const { items, removeItem } = useCartContext();
  const { country } = useCountryContext();

  const prices: Prices = {
    'UNITED STATES': {
      label: 'priceUS',
      sign: '$',
    },
    'UNITED KINGDOM': {
      label: 'priceUK',
      sign: '£',
    },
  };

  return (
    <div className={styles.wrapper}>
      <h3>
        {items.length} {items.length === 1 ? 'item' : 'items'} in Cart
      </h3>
      <div className={styles.line} />
      <div className={styles.tableHeader}>
        <h3 className={styles.item}>Item</h3>
        <div className={styles.price}>Price</div>
        <div className={styles.quantity}>Qty</div>
        <div className={styles.subtotal}>Subtotal</div>
      </div>
      <div className={styles.thinLine} />
      <div className={styles.table}>
        {items.map((item) => {
          return <CartRow data={data} item={item} />;
        })}
      </div>
    </div>
  );
}
export default CartComponent;
