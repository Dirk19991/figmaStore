import MinusButton from 'components/MinusButton/MinusButton';
import PlusButton from 'components/PlusButton/PlusButton';
import { useCartContext } from 'context/CartContextProvider';
import { useCountryContext } from 'context/CountryContextProvider';
import Link from 'next/link';
import findById from 'shared/utils/findById';
import styles from './CartRow.module.scss';
import Image from 'next/image';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import { useEffect, useState } from 'react';

interface CartRowProps {
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

const CartRow = ({ item, data }: CartRowProps) => {
  const { removeItem, addItem, decreaseItems } = useCartContext();
  const { country } = useCountryContext();

  const currentItem = data ? findById(data, item.id) : null;
  const sign = prices[country].sign;
  const currentPrice = currentItem ? currentItem[prices[country].label] : null;

  const formattedName = currentItem?.title.replaceAll(' ', '-').toLowerCase();

  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  return (
    <>
      <div className={styles.tableRow} key={item.id}>
        <h3 className={styles.item}>
          {showDesktop && (
            <button
              onClick={() => removeItem(item.id)}
              className={styles.removeButton}
            >
              X
            </button>
          )}

          <Link href={`/products/${formattedName}`}>
            <div className={styles.image}>
              <Image
                src={currentItem ? currentItem.imageMain : ''}
                width={120}
                height={120}
                alt='image'
              />
            </div>
          </Link>

          <div>{currentItem ? currentItem.title : 'loading'}</div>
        </h3>
        {showDesktop && (
          <div className={styles.price}>
            {data ? `${sign}${currentPrice}` : 'loading'}
          </div>
        )}

        {showDesktop && (
          <div className={styles.quantity}>
            <MinusButton decreaseItems={() => decreaseItems(item.id)} />
            <div>{item.quantity}</div>
            <PlusButton increaseItems={() => addItem(item.id, 1)} />
          </div>
        )}

        {showDesktop && (
          <div className={styles.subtotal}>
            {data ? `${sign}${item.quantity * (currentPrice || 0)}` : 'loading'}
          </div>
        )}
        {!showDesktop && (
          <button
            onClick={() => removeItem(item.id)}
            className={styles.removeButton}
          >
            X
          </button>
        )}
      </div>
      <div className={styles.mobilePriceQuantity}>
        {!showDesktop && (
          <div className={styles.quantity}>
            <MinusButton decreaseItems={() => decreaseItems(item.id)} />
            <div>{item.quantity}</div>
            <PlusButton increaseItems={() => addItem(item.id, 1)} />
          </div>
        )}
        <div className={styles.mobilePriceWrapper}>
          {!showDesktop && (
            <div className={styles.mobilePrice}>
              {data ? `${sign}${currentPrice}` : 'loading'}
            </div>
          )}
          {!showDesktop && (
            <div className={styles.mobileSubtotal}>
              {data
                ? `${sign}${item.quantity * (currentPrice || 0)}`
                : 'loading'}
            </div>
          )}
        </div>
      </div>

      <div className={styles.thinLine} />
    </>
  );
};

export default CartRow;
