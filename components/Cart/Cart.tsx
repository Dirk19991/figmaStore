import styles from './Cart.module.scss';
import { useCartContext } from '../../context/CartContextProvider';
import { useCountryContext } from '../../context/CountryContextProvider';
import findById from '../../shared/utils/findById';

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
          const currentItem = data ? findById(data, item.id) : null;
          const sign = prices[country].sign;
          const currentPrice = currentItem
            ? currentItem[prices[country].label]
            : null;
          return (
            <>
              <div className={styles.tableRow} key={item.id}>
                <h3 className={styles.item}>
                  <button
                    onClick={() => removeItem(item.id)}
                    className={styles.removeButton}
                  >
                    X
                  </button>
                  <div className={styles.image}>
                    <img
                      src={currentItem ? currentItem.imageMain : ''}
                      alt='image'
                    />
                  </div>
                  <div>{currentItem ? currentItem.title : 'loading'}</div>
                </h3>
                <div className={styles.price}>
                  {data ? `${sign}${currentPrice}` : 'loading'}
                </div>
                <div className={styles.quantity}>{item.quantity}</div>
                <div className={styles.subtotal}>
                  {data
                    ? `${sign}${item.quantity * (currentPrice || 0)}`
                    : 'loading'}
                </div>
              </div>
              <div className={styles.thinLine} />
            </>
          );
        })}
      </div>
    </div>
  );
}
export default CartComponent;
