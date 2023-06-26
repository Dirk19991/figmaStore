import MinusButton from 'components/MinusButton/MinusButton';
import PlusButton from 'components/PlusButton/PlusButton';
import { useCartContext } from 'context/CartContextProvider';
import { useCountryContext } from 'context/CountryContextProvider';
import Link from 'next/link';
import findById from 'shared/utils/findById';
import styles from './CartRow.module.scss';

interface CartRowProps {
  item: Item;
  data: Product[];
}

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

const CartRow = ({ item, data }: CartRowProps) => {
  const { items, removeItem, addItem, decreaseItems } = useCartContext();
  const { country } = useCountryContext();

  const currentItem = data ? findById(data, item.id) : null;
  const sign = prices[country].sign;
  const currentPrice = currentItem ? currentItem[prices[country].label] : null;

  const formattedName = currentItem?.title.replaceAll(' ', '-').toLowerCase();

  const increaseItems = () => {};

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
          <Link href={`/products/${formattedName}`}>
            <div className={styles.image}>
              <img src={currentItem ? currentItem.imageMain : ''} alt='image' />
            </div>
          </Link>

          <div>{currentItem ? currentItem.title : 'loading'}</div>
        </h3>
        <div className={styles.price}>
          {data ? `${sign}${currentPrice}` : 'loading'}
        </div>
        <div className={styles.quantity}>
          <MinusButton decreaseItems={() => decreaseItems(item.id)} />
          <div>{item.quantity}</div>
          <PlusButton increaseItems={() => addItem(item.id, 1)} />
        </div>
        <div className={styles.subtotal}>
          {data ? `${sign}${item.quantity * (currentPrice || 0)}` : 'loading'}
        </div>
      </div>
      <div className={styles.thinLine} />
    </>
  );
};

export default CartRow;
