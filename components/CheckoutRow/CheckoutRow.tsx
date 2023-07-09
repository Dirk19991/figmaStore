import { useCartContext } from 'context/CartContextProvider';
import { useCountryContext } from 'context/CountryContextProvider';
import findById from 'shared/utils/findById';
import styles from './CheckoutRow.module.scss';
import Image from 'next/image';

interface CheckoutRowProps {
  item: Item;
  data: Product[];
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

const CheckoutRow = ({ item, data }: CheckoutRowProps) => {
  const { removeItem, addItem, decreaseItems } = useCartContext();
  const { country } = useCountryContext();

  const currentItem = data ? findById(data, item.id) : null;
  const sign = prices[country].sign;
  const currentPrice = currentItem ? currentItem[prices[country].label] : null;

  const formattedName = currentItem?.title.replaceAll(' ', '-').toLowerCase();

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={currentItem ? currentItem.imageMain : ''}
          width={80}
          height={80}
          alt='image'
        />
      </div>
      <div>{currentItem ? currentItem.title : 'loading'}</div>
      <div className={styles.subtotal}>
        {data ? `${sign}${item.quantity * (currentPrice || 0)}` : 'loading'}
      </div>
    </div>
  );
};

export default CheckoutRow;
