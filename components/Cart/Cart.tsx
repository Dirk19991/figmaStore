import styles from './Cart.module.scss';
import { useCartContext } from '../../context/CartContextProvider';
import { useCountryContext } from '../../context/CountryContextProvider';
import findById from '../../shared/utils/findById';
import Link from 'next/link';
import CartRow from 'components/CartRow/CartRow';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';

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
  const { items, removeItem, ordered, setOrdered } = useCartContext();
  const { country } = useCountryContext();
  const router = useRouter();

  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

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

  let sum = 0;
  items.forEach((item) => {
    const currentItem = findById(data, item.id);
    const quantity = item.quantity;
    const subtotal =
      country === 'UNITED KINGDOM'
        ? quantity * currentItem.priceUK
        : quantity * currentItem.priceUS;
    sum += subtotal;
  });

  const handleRouteChange = () => {
    setOrdered(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  if (ordered) {
    return (
      <div className={styles.wrapper}>
        <h1 data-cy='thanks' className={styles.thanks}>
          Thank you for your order!
        </h1>
        <Link data-cy='continue' className={styles.continue} href={'/'}>
          <h2>Continue shopping</h2>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h3 data-cy='items-in-cart'>
        {items.length} {items.length === 1 ? 'item' : 'items'} in Cart
      </h3>
      <div className={styles.line} />
      <div className={styles.tableHeader}>
        <h3 className={styles.item}>Item</h3>
        {showDesktop && <h3 className={styles.price}>Price</h3>}
        {showDesktop && <h3 className={styles.quantity}>Qty</h3>}
        {showDesktop && <h3 className={styles.subtotal}>Subtotal</h3>}
      </div>
      <div className={styles.thinLine} />
      <div className={styles.table} data-cy='table'>
        {items.map((item) => {
          return <CartRow key={item.id} data={data} item={item} />;
        })}
      </div>
      <div className={styles.totalCheckoutWrapper}>
        <div className={styles.total} data-cy='total'>
          <div>Total:</div>
          <div>
            {prices[country].sign}
            {sum}
          </div>
        </div>
        {items.length > 0 && (
          <Link data-cy='checkout-link' href={'/checkout'}>
            <button className={styles.checkout}>CHECKOUT</button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default CartComponent;
